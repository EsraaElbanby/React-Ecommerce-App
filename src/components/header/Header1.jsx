import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Stack,
  Container,
  Link,
} from "@mui/material";
import {
  DarkModeOutlined,
  Facebook,
  Instagram,
  LightModeOutlined,
  ShoppingCartOutlined,
  Twitter,
} from "@mui/icons-material";

import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        WebkitBorderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
        py: "4px",
      }}
    >
      <Container>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <Stack
            sx={{
              alignItems: "center",
              flexDirection: "row",
              mr: 2,
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <ShoppingCartOutlined sx={{ color: "#fff" }} />
            <Typography sx={{ mx: 1, color: "#fff" }}>E-commerce</Typography>
          </Stack>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="body2"
              color="#fff"
              sx={{
                mr: "10px",
                bgcolor: "#D23F57",
                px: 1,
                py: "1px",
                borderRadius: "10px",
              }}
            >
              HOT
            </Typography>
            <Typography variant="body1" fontSize={15} color="#fff">
              Free Express Shipping
            </Typography>
          </Box>

          <Box flexGrow={1}></Box>

          <Link
            onClick={() => {
              navigate("/");
            }}
            sx={{
              color: "#fff",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Home
          </Link>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ my: "auto", mx: 1, height: "25px", bgcolor: "#fff" }}
          />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
              >
                <LightModeOutlined sx={{ color: "#fff", fontSize: "16px" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
              >
                <DarkModeOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            )}
          </div>
          {/* 
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: "8px" }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "12px",
                    color: "#fff",
                    textAlign: "center",
                  },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                sx={{ fontSize: "11px", minHeight: "10px" }}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu> */}

          <Twitter sx={{ color: "#fff", fontSize: "16px" }} />
          <Facebook sx={{ color: "#fff", fontSize: "16px", mx: 1 }} />
          <Instagram sx={{ color: "#fff", fontSize: "16px" }} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
