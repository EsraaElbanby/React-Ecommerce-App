/* eslint-disable react/prop-types */
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";

const Links = ({ title }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        position: "relative",
        ":hover": { cursor: "pointer" },
        ":hover .show-links": { display: "block" },
        alignItems: "center",
      }}
    >
      <Typography variant="body1" mr={1}>
        {title}
      </Typography>
      <ExpandMore sx={{ fontSize: "16px" }} />

      <Box
        className="show-links"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
          zIndex: 2,
        }}
      >
        <Paper sx={{ mt: "10px" }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                      },
                    }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{
                  position: "relative",
                  ":hover .show-subLinks": { display: "block" },
                }}
              >
                <ListItemButton sx={{ p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                      },
                    }}
                    primary="Products"
                  />

                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>

                <Box
                  className="show-subLinks"
                  sx={{
                    position: "absolute",
                    left: "100%",
                    top: 0,
                    display: "none",
                  }}
                >
                  <Paper sx={{ ml: 1, minWidth: "110px" }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton sx={{ p: 0, px: 1.5 }}>
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: "300",
                                },
                              }}
                              primary="Add Product"
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ p: 0, px: 1.5 }}
                            component="a"
                            href="#simple-list"
                          >
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: "300",
                                },
                              }}
                              primary="Edit Product"
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                      },
                    }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                      },
                    }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Stack>
  );
};

export default Links;
