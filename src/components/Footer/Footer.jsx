import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 2,
        bgcolor: "#2B3445",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: "#fff", [theme.breakpoints.down("sm")]: { fontSize: 13 } }}
      >
        Designed and developed by
      </Typography>
      <Typography
        variant="body1"
        sx={{ mx: 1, color: "#e94560", fontWeight: "600" ,  [theme.breakpoints.down("sm")]: { fontSize: 13 }}}
      >
        Esraa Elbanby
      </Typography>
      <Typography variant="body1" sx={{ color: "#fff" ,  [theme.breakpoints.down("sm")]: { fontSize: 13 } }}>
        ©2025
      </Typography>
    </Box>
  );
};

export default Footer;
