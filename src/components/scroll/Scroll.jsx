import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, useScrollTrigger, Zoom } from "@mui/material";

const Scroll = () => {
  return (
    <Zoom in={useScrollTrigger({threshold:500})}>
      <Box
        role="presentation"
        // Place the button in the bottom right corner.
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default Scroll;
