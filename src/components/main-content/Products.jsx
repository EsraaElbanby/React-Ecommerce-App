import { useEffect } from "react";
import {
  fetchProducts,
  fetchProductsByCategory,
} from "../../rtk/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  Container,
  Dialog,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { addProduct } from "../../rtk/slices/cartSlice";
function Products() {
  const products = useSelector((state) => state.products);
  const dispach = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [clickedpro, setClickedpro] = useState({});
  const theme = useTheme();

  useEffect(() => {
    if (selectedCategory === "all") {
      dispach(fetchProducts());
    } else {
      dispach(fetchProductsByCategory(selectedCategory));
    }
  }, [selectedCategory]);

  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setSelectedCategory(newValue);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container sx={{ p: 7 }}>
      <Stack
        direction={"row"}
        sx={{
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack gap={1}>
          <Typography
            sx={{ color: theme.palette.text.primary }}
            variant="h6"
            color="initial"
          >
            Selected Products
          </Typography>

          <Typography
            sx={{ color: theme.palette.text.primary, fontWeight: "300" }}
            variant="body1"
            color="initial"
          >
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Stack>

        <Stack>
          <ToggleButtonGroup
            color="error"
            sx={{
              ".Mui-selected": {
                backgroundColor: "initial !important",
                border: "1px solid rgba(233, 69, 96, 0.5)  !important ",
                color: "#e94560",
              },
              ".btnpro": {
                border: "1px solid rgba(233, 69, 96, 0.5)",
                borderRadius: 1,
              },
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
            value={selectedCategory}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="btnpro"
              value="all"
              aria-label="left aligned"
            >
              All
            </ToggleButton>
            <ToggleButton
              className="btnpro"
              sx={{
                mx: "8px !important",
                color: theme.palette.text.primary,
              }}
              value="men's clothing"
              aria-label="centered"
            >
              Men
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="btnpro"
              value="women's clothing"
              aria-label="right aligned"
            >
              Women
            </ToggleButton>

            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="btnpro"
              value="jewelery"
            >
              jewelery
            </ToggleButton>

            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="btnpro"
              value="electronics"
              aria-label="right aligned"
            >
              Electronics
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        sx={{ columnGap: 11 }}
      >
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              sx={{
                maxWidth: 300,
                mt: 6,
                ":hover .img ": {
                  scale: "1.1",
                  rotate: "1.5deg",
                  transition: ".3s",
                },
              }}
            >
              <Box
                sx={{
                  bgcolor: "#fff",
                  height: 277,
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    className="img"
                    src={product.image}
                    style={{ width: "200px", height: "250px" }}
                    alt=""
                  />
                </Box>
              </Box>

              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    // mb: 2,
                  }}
                >
                  <Rating
                    name="read-only"
                    value={product.rating.rate}
                    precision={0.5}
                    readOnly
                  />

                  <Typography variant="subtitle1">{product.price}$</Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    textTransform: "capitalize",
                    [theme.breakpoints.down("sm")]: { py: 2.5 },
                    [theme.breakpoints.up("sm")]: { py: 2 },

                    fontSize:17.5,
                    fontWeight: "600",
                    maxWidth: "100%",
                  }}
                >
                  {product.title.slice(0, 22)}
                </Typography>
                <Typography variant="body1" fontSize={14}>
                  {product.description.slice(0, 85)} ...
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    px: 1,
                  }}
                >
                    
                    <Button
                      startIcon={<AddShoppingCartOutlinedIcon color="primary" sx={{fontSize:"23px !important"}} />}
                      onClick={() => {
                        dispach(addProduct(product));
                      }}
                      size="small"
                      sx={{
                        fontWeight: "600",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    >
                      Add to Cart
                    </Button>

                  <Link
                    sx={{ textDecoration: "none", cursor: "pointer" }}
                    onClick={() => {
                      handleClickOpen();
                      setClickedpro(product);
                    }}
                  >
                    View
                  </Link>
                </Box>
              </CardActions>
            </Card>
          );
        })}
      </Stack>

      <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 900 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 0,
            right: 10,
            ":hover": { color: "red", rotate: "180deg", transition: ".3s" },
          }}
        >
          <Close />
        </IconButton>

        <ProductDetails clickedpro={clickedpro} />
      </Dialog>
    </Container>
  );
}

export default Products;
