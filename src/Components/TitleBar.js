import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { setIcon } from "./helper.js";


export default function TitleBar({ PageName }) {
  return (
    <Stack direction={"row"} width={'100%'} alignItems={'center'} justifyContent={'center'} spacing={2}>
      {setIcon(PageName, 'large')}
      <Typography fontSize={'2.4rem'}>{PageName}</Typography>
    </Stack>
  );
}
