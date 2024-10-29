import { Box, Button, Typography } from "@mui/material"


const Footer = () => {
  return (
    
          <Box className="foter"
      sx={{
        bgcolor: "#2B3445",
        py: 1.4,
        borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
       
      }}
    >
          <Typography
              
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 20 }}
      >
         developed by
              <Button
                 
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          tony george
        </Button>
        ©2024
      </Typography>
    </Box>
   
  )
}

export default Footer