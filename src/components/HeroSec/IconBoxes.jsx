import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";

import Divider from "@mui/material/Divider";

const IconBoxes = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{ bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        divider={
          useMediaQuery("(min-width:900px)") ? (
            <Divider orientation="vertical" variant="middle" flexItem />
          ) : null
        }
        direction={"row"}
        sx={{ py: 5, flexWrap: "wrap" }}
      >
        <IBox
          icon={<ElectricBolt fontSize="large" />}
          title={"Fast Delivery"}
          subtitle={"Start from $10"}
        />

        <IBox
          icon={<WorkspacePremiumOutlined fontSize="large" />}
          title={"Money Guarantee"}
          subtitle={"7 Days Back"}
        />

        <IBox
          icon={<AccessAlarmOutlined fontSize="large" />}
          title={"365 Days"}
          subtitle={"For free return"}
        />

        <IBox
          icon={<CreditScoreOutlined fontSize="large" />}
          title={"Payment"}
          subtitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};

export default IconBoxes;

// eslint-disable-next-line react/prop-types
const IBox = ({ icon, title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box
      //   className={"border"}
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
        width: "250px",

        py: 1.5,

        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}
    >
      {icon}

      <Box>
        <Typography
          variant="body1"
          sx={{ fontSize: "18px", fontWeight: "500" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "14px",
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
