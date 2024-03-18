import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TitleBar from "../Components/TitleBar";
import Banner from "../Components/Banner";
import ImageTextComponent from "../Components/ImageTextComponet";
import TextBlock from "../Components/TextBlock";

export default function Development({setCurrentPage}) {
  const bannerImage = {
    filePath: require("../Media/Images/linkedin-header.png"),
    name: "Header Image",
    altText: "Header image for the development page",
  };

  return (
    <Box>
      <TitleBar PageName={"Development"} />
      <Banner Image={bannerImage} />
      <ImageTextComponent
        ImageLeft={true}
        ImagePath={require("../Media/Images/development.png")}
        AltText={"photo to preview some of the projects that will be seen"}
        Title={"My Development Experience"}
        Text={
          "I currently work as a software engineer for the company Turnaround Factor. Here I work fully remotely on a communication application that adds AR capabilities, PDF viewing, CAD Model viewing and interactions, and external tool readings to a video call session. \n\nOn this project I am solely responsibly for the development of the iOS application and the AR features. Daily I am working with React Native, Node.js, AR Foundation, and Unity. On the more difficult days I will work with Obejctive-C."
        }
        ImageWidth={"90%"}
      />
      <ImageTextComponent
        ImageLeft={false}
        ImagePath={require("../Media/Images/dontwastetimeonit.gif")}
        AltText={"a gif of gameplay for the game Don't Spend Time On It"}
        Title={"Don't Spend Time On It"}
        Text={
          "Designed with the theme of \"Everyday Hero\". Two person team, roles on project was co-designer and sole developer. Inspired by the games: Diner Dash and Typing of the Dead, \"Don't Spend Time On It\" is a two player game where one player is playing as a professor and the other is playing as the TA. \n\nThe professor's goal is to type the words that appear on the board behind them, the TA's job is to run around the classroom and gather as many words as they can for the professor to type. Putting more of the same word up on the board awards more points. \n\nMade during RIT's Hero Jam Fall 2017 and awarded Best Game."
        }
        ImageWidth={"90%"}
        CallToActionName={'View Github'}
        ActionToCall={()=>{window.open("https://github.com/AnnaKarwackiCodes/Hero-Jam-2017/tree/master", "_blanks")}}
      />
      <ImageTextComponent
        ImageLeft={true}
        ImagePath={require("../Media/Images/Screenshot_20200804-210757.png")}
        AltText={"an image of gameplay for the game The Original Mobile Games"}
        Title={"Don't Spend Time On It"}
        Text={
            "Worked as Unity Developer, worked on updates and optimization to the mobile versions of the game (iOS and Android) and porting the game to the Nintendo Switch."
         }
        ImageWidth={"90%"}
        CallToActionName={'Visit Nintendo eShop'}
        ActionToCall={()=>{window.open("https://www.nintendo.com/us/store/products/the-original-mobile-games-switch/", "_blanks")}}
      />
      <ImageTextComponent
        ImageLeft={false}
        ImagePath={require("../Media/Images/cyberb.png")}
        AltText={"an image of the terrain for the game Cyber B"}
        Title={"Project Cyber B"}
        Text={"Six person team. Responsibilities on project include: project management, development lead, and VR implementation. Was displayed at RIT's annual Imagine RIT."}
        ImageWidth={"90%"}
        CallToActionName={'View Github'}
        ActionToCall={()=>{window.open("https://github.com/AnnaKarwackiCodes/ProjectCyberB", "_blanks")}}
      />
      <TextBlock Title={'This Website'} Body={'Using React to build the website itself, utilizing libraries such as Material UI to assist in building the UI of the site. Deployed the website using AWS services. Built out individual components that could be used again and again to make developing this website quicker.'}/>

    </Box>
  );
}
