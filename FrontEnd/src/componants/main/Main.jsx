import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import Productdetils from "./Productdetils";
import { useGetProductByNameQuery } from "../../Redux/Product";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  // const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmydata(newValue);
    }
  };

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allproductAPI = "products?populate=*";
  const mencategoryAPI = "products?populate=*&&filters[Category][$eq]=men";
  const womencategoryAPI = "products?populate=*&&filters[Category][$eq]=women";

  const [mydata, setmydata] = useState(allproductAPI);

  const { data, error, isLoading } = useGetProductByNameQuery(
    //  "products?populate=*"
    mydata
  );

  const [clickedProduct, setclickedProduct] = useState({});

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography variant="h6">{error.massage}</Typography>;
  }

  if (data) {
    return (
      <Container sx={{ my: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          textAlign={"center"}
          // sx={{justifyContent:"center"}}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            color="error"
            value={mydata}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton
              className="myButton"
              value={allproductAPI}
              aria-label="left aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              All Products
            </ToggleButton>
            <ToggleButton
              className="myButton"
              sx={{ mx: "12px ! important", color: theme.palette.text.primary }}
              value={mencategoryAPI}
              aria-label="centered"
            >
              MEN category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={womencategoryAPI}
              aria-label="right aligned"
            >
              Women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          className="content"
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <AnimatePresence>
            {data.data.map((item) => {
              return (
                <Card
                  component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                  key={item.id}
                  sx={{
                    maxWidth: 340,
                    mt: 8,

                    ":hover .MuiCardMedia-root ": {
                      rotate: "1deg",
                      scale: "1.1",
                      transition: "0.35s",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 277 }}
                    // image={`http://localhost:1337/ ${item.productimg.data[0].url}`}

                    // image={` http://localhost:1337 ${item.productimg.data[0].url}`}
                    image={`${item.productimg[0].url}`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Stack>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography gutterBottom variant="h6" component="div">
                          {item.producttitle}
                        </Typography>

                        <Typography variant="subtitle1" component="p">
                          {item.Productprice} $
                        </Typography>
                      </Stack>

                      <Typography variant="body2" color="text.secondary">
                        {item.Productdiscrption}
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      onClick={() => {
                        handleClickOpen();
                        setclickedProduct(item);
                      }}
                    >
                      <AddShoppingCartOutlinedIcon sx={{ mr: 1.5 }} />
                      Add to cart
                    </Button>
                    <Rating
                      precision={0.5}
                      name="read-only"
                      value={item.Productrating}
                      readOnly
                    />
                  </CardActions>
                </Card>
              );
            })}
          </AnimatePresence>
        </Stack>
        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <Productdetils clickedProduct={clickedProduct} />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
