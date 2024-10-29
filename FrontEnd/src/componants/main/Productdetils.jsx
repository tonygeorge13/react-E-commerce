import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Productdetils = ({ clickedProduct }) => {
  const [selectedImg, setselectedImg] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", alignItems: "center", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={360}
          src={clickedProduct.productimg[selectedImg].url}
          alt=""
        />
      </Box>
      <Box sx={{ py: 3, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5"> {clickedProduct.producttitle} </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          {clickedProduct.Productprice} $
        </Typography>
        <Typography variant="body1">
          {clickedProduct.Productdiscrption}
        </Typography>
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1.2}
          my={2}
        >
          {clickedProduct.productimg.map((item) => {
            return (
              <img
                style={{ borderRadius: 3 }}
                width={90}
                height={100}
                key={item.id}
                src={item.url}
                alt=""
                onClick={() => setselectedImg(clickedProduct.productimg.indexOf(item))}
                // onClick={() => setselectedImg(index)}
              />
            );
          })}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default Productdetils;
