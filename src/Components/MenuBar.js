import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { setIcon } from "./helper";
import Menu from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";

export default function MenuBar({ setCurrentPage, CurrentScreen, optionList }) {
  const [open, setOpen] = React.useState(false);
  console.log(optionList);

  function setPage(text) {
    setCurrentPage(text);
  }

  function OpenMenu(state) {
    setOpen(state);
  }

  const MenuList = (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      anchor={"left"}
      onClick={() => {
        OpenMenu(false);
      }}
    >
      <List>
        <ListItem key={'close'}>
          <ListItemButton
            onClick={() => {
              OpenMenu(false);
            }}
          >
            <Stack direction={"row"} spacing={2}>
              <MenuOpen />
              <ListItemText primary={"Close Menu"}/>
            </Stack>
          </ListItemButton>
        </ListItem>
        {optionList.map((text) => (
          <ListItem key={text}>
            <ListItemButton
              onClick={() => {
                setPage(text);
              }}
            >
              <Stack direction={"row"} spacing={2}>
                {setIcon(text)}
                <ListItemText primary={text} style={{color: '#1F457C'}}/>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box>
      <Button
        onClick={() => {
          OpenMenu(!open);
        }}
      >
        <Menu />
      </Button>
      <Drawer
        open={open}
        onClose={() => {
          OpenMenu(false);
        }}
        variant="persistent"
      >
        {MenuList}
      </Drawer>
    </Box>
  );
}
