import * as React from "react";
import Box from "@mui/material/Box";

export default function Banner({ Image, Text }) {
  return (
    <Box width={'100%'} height={'100%'}>
        <img src={Image.filePath} alt={Image.altText} width={'100%'}></img>
    </Box>
  );
}
