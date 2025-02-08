import { useDispatch, useSelector } from "react-redux";
import { clear, deleteProduct } from "../rtk/slices/cartSlice";
import { Button, Container, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total_price = cartProducts.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <Container>
      <Typography
        sx={{ textAlign: "center", py: 5, fontSize: "30px" }}
        variant="h6"
      >
        Welcom to Cart
      </Typography>
      <Button
        sx={{ bgcolor: "#188954", color: "#fff" }}
        className=" mb-3"
        variant="primary"
        onClick={() => {
          dispatch(clear());
        }}
      >
        Clear Cart
      </Button>

      <h4>Total Price: {total_price.toFixed(2)}$</h4>
      {/* <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <Image
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{product.decreption}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteProduct(product))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={{ minWidth: 150, maxWidth: 200 }}>
                  {row.title}
                </TableCell>
                <TableCell>
                  <img
                    src={row.image}
                    alt={row.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>
                  {" "}
                  <Button
                    sx={{ backgroundColor: "#e42021", color: "#fff" }}
                    onClick={() => dispatch(deleteProduct(row))}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Cart;
