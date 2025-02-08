import {
  ElectricBikeOutlined,
  ExpandMore,
  KeyboardArrowRightOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Person2Outlined,
  ShoppingCart,
  SportsEsportsOutlined,
  Window,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Links from "./Links";
import Badge from '@mui/material/Badge';
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header3 = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const navigate = useNavigate();

  const cart= useSelector((state)=>state.cart)


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer("anchor", false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ></Box>
  );

  const mainLinks = [
    {
      mainLink: "Home",
      sublinlks: ["link1", "link2", "link3"],
    },
    {
      mainLink: "Mega Menue",
      sublinlks: ["link1", "link2", "link3"],
    },

    {
      mainLink: "full Screen Menue",
      sublinlks: ["link1", "link2", "link3"],
    },

    {
      mainLink: "pages",
      sublinlks: ["link1", "link2", "link3"],
    },

    {
      mainLink: "User Account",
      sublinlks: ["link1", "link2", "link3"],
    },
    {
      mainLink: "vendor Account",
      sublinlks: ["link1", "link2", "link3"],
    },
  ];
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
        position: "sticky",
        top: 0,
        background: theme.palette.bgHead.main,
        zIndex:3
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
            width: "220px",
          }}
        >
          <Window />

          <Typography sx={{ padding: "0", textTransform: "capitalize", mx: 1 }}>
            Categories
          </Typography>

          {/* <Box sx={{ flexGrow: "1" }}></Box> */}

          <KeyboardArrowRightOutlined />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: "220px",
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              color: theme.palette.text.secondary,
            },
          }}
        >
          <MenuItem>
            <ListItemIcon onClick={handleClose}>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon onClick={handleClose}>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon onClick={handleClose}>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon onClick={handleClose}>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack direction={"row"} sx={{ gap: 4, mr: 5 }}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}


      
      <Stack direction={"row"}>
      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root.MuiDrawer-paper": { height: "100%",width:"100%" } }}
      >
        {list("top")}
        <Box
          sx={{
            width: {xs:"100%",sm:400},
            mx: "auto",
            mt: 6,
            position: "relative",
            py: 10,
          }}

        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              ":hover": { color: "red", rotate: "180deg", transition: ".3s" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {mainLinks.map((obj) => {
            return (
              <Accordion
                key={obj.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">{obj.mainLink}</Typography>
                </AccordionSummary>
                {obj.sublinlks.map((link) => {
                  return (
                    <List key={link} sx={{ py: 0, my: 0 }}>
                      <ListItem sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  );
                })}
              </Accordion>
            );
          })}
        </Box>
      </Drawer>

          <IconButton>
                <Person2Outlined/>
              </IconButton>      
              <IconButton aria-label="cart" onClick={() => {
                   navigate("/cart");
      
              }}>
                <StyledBadge badgeContent={cart.length} color="primary">
                  <ShoppingCart />
                </StyledBadge>
              </IconButton>
          </Stack >
    </Container>
  );
};

export default Header3;
