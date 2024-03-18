import * as React from "react";
import Box from "@mui/material/Box";
import About from "../Pages/About";
import MenuBar from "../Components/MenuBar";
import Homepage from "../Pages/Homepage";
import Footer from "../Components/Footer";

export default function Navigator() {
  const [CurrentScreen, setCurrentScreen] = React.useState("Homepage");
  const menuList = ["Homepage", "About"];
  const [CurrentView, setCurrentView] = React.useState(<Homepage />);

  React.useEffect(() => {
    console.log(CurrentScreen);
    switch (CurrentScreen) {
      case "About":
        window.scrollTo(0, 0);
        setCurrentView(<About setCurrentPage={setCurrentScreen} />);
        break;
      default:
        window.scrollTo(0, 0);
        setCurrentView(<Homepage setCurrentPage={setCurrentScreen} />);
        break;
    }
  }, [CurrentScreen]);
  return (
    <Box width={"100%"}>
      <MenuBar
        setCurrentPage={setCurrentScreen}
        CurrentScreen={CurrentScreen}
        optionList={menuList}
      />
      {CurrentView}
      <Footer />
    </Box>
  );
}
