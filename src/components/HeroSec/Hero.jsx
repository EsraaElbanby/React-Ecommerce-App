import {
  Box,
  Button,
  Container,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
// @ts-ignore
import banner17 from "./Images/banner-17.jpg";
// @ts-ignore
import banner16 from "./Images/banner-16.jpg";
// @ts-ignore
import banner15 from "./Images/banner-15.jpg";
// @ts-ignore
import banner25 from "./Images/banner-25.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
import { ArrowForward } from "@mui/icons-material";
import IconBoxes from "./IconBoxes";

const slideArr = [
  { title: "men", img: `${banner15}` },
  { title: "women", img: `${banner25}` },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box sx={{ mt: 3, display: "flex", gap: 1, alignItems: "center", py: 3 }}>
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slideArr.map((item) => {
            return (
              <SwiperSlide key={item.title}>
                <img src={item.img} alt="" />

                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      textAlign: "left",
                      top: "15%",
                      left: "10%",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontSize: "25px",
                      color: "#2b3445",
                    }}
                  >
                    Life style collection
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      textTransform: "uppercase",
                      fontSize: "60px",
                      color: "#2b3445",
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      textTransform: "uppercase",
                      display: "flex",
                      gap: 1,
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        [theme.breakpoints.down("lg")]: {
                          fontSize: "30px",
                        },
                        [theme.breakpoints.up("lg")]: {
                          fontSize: "40px",
                        },
                        color: "#2b3445",
                      }}
                    >
                      sale up to
                    </Typography>
                    <Typography
                      sx={{
                        color: "#D23F57",
                        [theme.breakpoints.down("lg")]: {
                          fontSize: "30px",
                        },
                        [theme.breakpoints.up("lg")]: {
                          fontSize: "40px",
                        },
                      }}
                    >
                      30% off
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: 300,
                      my: 1,
                      color: "#000",
                    }}
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>

                  <Button
                    sx={{
                      bgcolor: "#222",
                      color: "#fff",
                      mt: 5,
                      px: 2,
                      py: 1,
                      borderRadius: "1px",
                      transition: ".3s",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",

                      ":hover": { bgcolor: "#151515" },
                    }}
                  >
                    shop now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            minWidth: "25%",
            height: "448px",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Box sx={{ position: "relative", flexGrow: 1, mb: 2 }}>
            <img
              src={banner17}
              alt=""
              width={"100%"}
              style={{
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#2b3445",
                left: 30,
                ":hover": { cursor: "default" },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  textTransform: "uppercase",
                  fontSize: 18,
                }}
              >
                New Arrivals
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  lineHeight: "16px",
                  mt: 1,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Summer
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  textTransform: "uppercase",
                }}
              >
                Sale 20% off
              </Typography>

              <Link
                href="#"
                underline="none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "#2b3445",
                  transition: ".3s",
                  ":hover": { color: "#D23F57", cursor: "pointer" },
                }}
              >
                Shop now
                <ArrowForward sx={{ fontSize: "small" }} />
              </Link>
            </Box>
          </Box>

          <Box sx={{ position: "relative", flexGrow: 1 }}>
            <img
              src={banner16}
              alt=""
              width={"100%"}
              style={{
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#2b3445",
                left: 30,
                ":hover": { cursor: "default" },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  textTransform: "uppercase",
                  fontSize: 18,
                }}
              >
                GAMING 4K
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  lineHeight: "16px",
                  mt: 1,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                DESKTOPS &
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",

                  textTransform: "uppercase",
                }}
              >
                LAPTOPS{" "}
              </Typography>

              <Link
                href="#"
                underline="none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "#2b3445",
                  transition: ".3s",
                  ":hover": { color: "#D23F57", cursor: "pointer" },
                }}
              >
                Shop now
                <ArrowForward sx={{ fontSize: "small" }} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      <IconBoxes />
    </Container>
  );
};

export default Hero;
