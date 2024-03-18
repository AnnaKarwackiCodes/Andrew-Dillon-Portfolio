import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { setIcon } from "./helper";

/*
infolist
{
    Title:
    Categories: [
        {
            Title:
            Details:
        }
    ]
}
*/
export default function Infocards({ Title, Infolist, ActionFunction, FunctionName }) {
    const detailList = Infolist.Categories;
  return (
    <Card variant="outlined">
      <Box padding={'5%'}>
        <CardContent>
          <Stack direction={'row'}>
            {setIcon(Title, 'large')}
          <Typography fontSize={"1.75rem"} sx={{textDecoration:'underline', marginBottom:'2%'}}>{Title}</Typography>
          </Stack>
          {Infolist.map((card) => (
            <Box>
              <Typography fontSize={"1.4rem"} sx={{textDecoration:'underline'}}>{card.title}</Typography>
              <Typography fontSize={"1rem"}>{card.details}</Typography>
            </Box>
          ))}
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            style={{backgroundColor:'#175825'}}
            onClick={() => {
                ActionFunction();
            }}
          >
            {FunctionName}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
