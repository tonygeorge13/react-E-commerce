import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useTheme } from "@emotion/react";
import { Close } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";

const Header3 = () => {
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

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 8,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          // @ts-ignore
          sx={{
            // @ts-ignore
            bgcolor: theme.palette.mycolor.main,
            // @ts-ignore
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography sx={{ mx: "8px" }}>categories</Typography>

          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Bikes</MenuItem>
          <MenuItem onClick={handleClose}>Books</MenuItem>
          <MenuItem onClick={handleClose}>Games</MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(width>1100px)") && (
        <Stack gap={4} direction={"row"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {useMediaQuery("(width<1100px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".css-k1yagv-MuiPaper-root-MuiDrawer-paper": { height: "80%" } }}
      >
        <Box
          sx={{
            width: "300px",
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
          }}
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <Close onClick={toggleDrawer("top", false)} />
          </IconButton>

          {[
            { mainlink: "home", sublink: ["link1", "link2", "link3"] },
            { mainlink: "pages", sublink: ["link1", "link2", "link3"] },
            {
              mainlink: "full screen menu",
              sublink: ["link1", "link3", "link3"],
            },
            { mainlink: "user account", sublink: ["link1", "link2", "link3"] },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainlink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {item.mainlink}
                </AccordionSummary>

                <List>
                  {item.sublink.map((link) => {
                    return (
                      <ListItem key={link} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
