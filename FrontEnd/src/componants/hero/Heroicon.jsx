import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const Heroicon = () => {
    const theme = useTheme();
  return (
    <Container sx={{ bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" , mt: 1.5 }}>
      <Stack
        divider={
          useMediaQuery("(width>600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
      >
        <Mybox
          icon={<ElectricBoltIcon />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <Mybox
          icon={<CreditScoreOutlinedIcon />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />

        <Mybox
          icon={<WorkspacePremiumOutlinedIcon />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <Mybox
          icon={<AccessAlarmOutlinedIcon />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};

export default Heroicon;

const Mybox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "200px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        flexGrow: "1",
        // justifyContent: "center",
        pt: 1.6,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
