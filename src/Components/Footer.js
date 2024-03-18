import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function Footer({}) {
  return (
    <Box
      minHeight={"14%"}
      padding={"1%"}
      width={"98%"}
      alignContent={"center"}
      justifyContent={"center"}
      backgroundColor={"#72baf4"}
    >
      <Stack direction={"row"}>
        <Typography sx={{ textAlign: "center", width: "100%" }}>
          Developed and Designed by Anna Karwacki, Copyright 2024 Anna Karwacki,
          All Rights Reserved
        </Typography>
        <Fab variant="extended" onClick={()=>{window.scrollTo(0, 0);}}>
          <NavigationIcon />
        </Fab>
      </Stack>
    </Box>
  );
}
