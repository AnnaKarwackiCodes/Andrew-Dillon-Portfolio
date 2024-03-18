import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImageTextComponent({
  ImageLeft,
  ImagePath,
  AltText,
  Title,
  Text,
  ImageWidth,
  CallToActionName,
  ActionToCall,
  SecondCallToActionName,
  SecondActionToCall,
}) {
  const imgPath = ImagePath;
  const myDirection = ImageLeft ? "row" : "row-reverse";
  return (
    <Stack
      direction={{xs: "column",md: myDirection}}
      paddingLeft={"5%"}
      paddingRight={"5%"}
      paddingTop={"2.5%"}
      paddingBottom={"2.5%"}
      container
    >
      <Box width={"50%"} alignContent={"center"} justifyContent={"center"}>
        <img src={ImagePath} alt={AltText} width={ImageWidth} margin="auto" />
      </Box>
      <Box alignItems={"center"} width={"50%"}>
        <Box>
          <Typography width={"90%"} fontSize={"2rem"}>
            {Title}
          </Typography>
          <Typography style={{whiteSpace: 'pre-line'}} width={"90%"} fontSize={"1.25rem"}>
            {Text}
          </Typography>
          {CallToActionName && (
            <Box
              alignContent={"center"}
              justifyContent={"center"}
              marginTop={"15px"}
            >
              <Button
                style={{backgroundColor:'#175825'}}
                variant="contained"
                onClick={() => {
                  ActionToCall();
                }}
              >
                {CallToActionName}
              </Button>
            </Box>
          )}
          {SecondCallToActionName && (
            <Box
              alignContent={"center"}
              justifyContent={"center"}
              marginTop={"15px"}
            >
              <Button
                variant="contained"
                style={{backgroundColor:'#175825'}}
                onClick={() => {
                  SecondActionToCall();
                }}
              >
                {SecondCallToActionName}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Stack>
  );
}
