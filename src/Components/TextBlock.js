import * as React from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export default function ({Title, Body, Width}){
    return(
        <Box width={Width} paddingLeft={'5%'} paddingRight={'5%'} paddingTop={'2.5%'} paddingBottom={'2.5%'}>
            <Typography fontSize={'2rem'}>{Title}</Typography>
            <Typography fontSize={'1.25rem'}>{Body}</Typography>
        </Box>
    );
}