/* eslint-disable react/prop-types */
import { Box, Button, Typography, useTheme } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { addProduct } from "../../rtk/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = ({ clickedpro }) => {
  console.log(clickedpro);

  const dispach = useDispatch();


  const theme = useTheme();


  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexDirection: { xs: "column", sm: "row" },

      }}
    >
      <Box sx={{ display: "flex",  mx: { xs: "auto", sm: "left" },mt: { xs: 5,sm:0 } }}>
        <img src={clickedpro.image} width={300} className="detailsimg" alt="" />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" }, my:5 , mr:1,px: { xs: 1 }}}>
        <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
          {clickedpro.title}
        </Typography>
        <Typography
          variant="body1"
          color="error"
          sx={{ fontWeight: 600, fontSize: "18px", my: 1 }}
        >
          {clickedpro.price} $
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.primary }}
        >
          {clickedpro.description}
        </Typography>



        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", mb: { xs: 2, sm: 0 }, mt: 5, color:"#fff" }}
          onClick={()=>{dispach(addProduct(clickedpro))}}
        >
          <AddShoppingCartOutlinedIcon fontSize="small" sx={{ mr: 1 ,color:"#fff"}} /> Buy
          Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
