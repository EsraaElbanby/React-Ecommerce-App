import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Hero from "./components/HeroSec/Hero";
import Scroll from "./components/scroll/Scroll";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Products from "./components/main-content/Products";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer/Footer";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <Header1 />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header2 />
                <Box
                  sx={{
                    bgcolor:
                      // @ts-ignore
                      theme.palette.bg.main,
                  }}
                >
                  <Hero />
                  <Products />
                  <Footer />
                </Box>
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Scroll />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
