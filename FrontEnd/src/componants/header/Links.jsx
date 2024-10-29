import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { KeyboardArrowRightOutlined  } from "@mui/icons-material";

const Links = ({ title }) => {
  return (
    <Box
      sx={{
        ":hover .show-hover": {
          display: "block",
          cursor: "",
        },

        display: "flex",
        position: "relative",
      }}
    >
          <Typography>{title}</Typography>
      <ExpandMoreIcon sx={{ ml: 1, fontSize: "16px" }} />

      <Box
        className="show-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "-50%",
          transform: "translateX:(-50%)",
          display: "none",
          zIndex: 3,
          
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem
                sx={{
                  ":hover .sublink": { display: "block" },
                  position: "relative",
                }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="products"
                  />
                  <Box flexGrow={1} />

                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>
                <Box
                  className="sublink"
                  sx={{
                    display: "none",
                    position: "absolute",
                    top: 0,
                    left: "100%",
                  }}
                >
                  <Paper sx={{ ml: 1, minWidth: 150 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="Add product" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Edit product" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="orders"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
