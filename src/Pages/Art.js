import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageTextComponent from "../Components/ImageTextComponet";
import TitleBar from "../Components/TitleBar";
import Banner from "../Components/Banner";
import ImageGrid from "../Features/ImageLibrary/ImageGrid";

import artImage from "../Media/Images/art.png";
import TextBlock from "../Components/TextBlock";

export default function Art({ setCurrentPage }) {
  const bannerImage = {
    filePath: require("../Media/Images/linkedin-header.png"),
    name: "Header Image",
    altText: "Header image for the development page",
  };

  const logoList = [
    {
      filePath: require("../Media/Images/server-logo-test8.png"),
      name: "Server Logo",
      altText: "image of discord server logo",
    },
    {
      filePath: require("../Media/Images/Miller-Moon.png"),
      name: "Fictional Beer Logo",
      altText: "design of a fictional beer label",
    },
    {
      filePath: require("../Media/Images/karwacki-logo.png"),
      name: "Personal Logo",
      altText: "design of personal logo",
    },
    {
      filePath: require("../Media/Images/shiba-samurai.png"),
      name: "Personal Logo",
      altText: "design of a personal logo for a friend",
    },
  ];

  const digitalList = [
    {
      filePath: require("../Media/Images/Terry.jpg"),
      name: "D&D paladin character art",
      altText: "image of D&D paladin character art",
    },
    {
      filePath: require("../Media/Images/meepthew-delivery.jpg"),
      name: "D&D Companion",
      altText: "image of D&D companion",
    },
    {
      filePath: require("../Media/Images/jacelocke.jpg"),
      name: "D&D character art",
      altText: "image of D&D Dragonborn character art",
    },
    {
      filePath: require("../Media/Images/theo-icon.png"),
      name: "D&D Dragonborn character art",
      altText: "image of D&D Dragonborn character art",
    },
    {
      filePath: require("../Media/Images/creed.png"),
      name: "D&D character art",
      altText: "image of D&D character",
    },
  ];

  const traditionalList = [
    {
      filePath: require("../Media/Images/self-portrait.png"),
      name: "Self Portrait",
      altText: "image of a self portrait",
    },
    {
      filePath: require("../Media/Images/allagash.jpg"),
      name: "D&D character art",
      altText: "image of D&D character",
    },
    {
      filePath: require("../Media/Images/red-dragon.jpg"),
      name: "Red Dragon Mini",
      altText: "image of painted red dragon mini",
    },
    {
      filePath: require("../Media/Images/paladin.jpg"),
      name: "Dragonborn Mini",
      altText: "image of painted D&D Dragonborn mini",
    },
  ];
  return (
    <Box width={"100%"}>
      <TitleBar PageName={"Art"} />
      <Banner Image={bannerImage} />
      <ImageTextComponent
        ImageLeft={true}
        ImagePath={require("../Media/Images/art.png")}
        AltText={"photo to preview some of the projects that will be seen"}
        Title={"My Art Experience"}
        Text={
          "Art has always been an area that has been a consistent creative outlet for myself. Starting off learning more traditional mediums and growing to learn how to do both 2D and 3D digital arts."
        }
        ImageWidth={"100%"}
      />
      <Box
        textAlign={"center"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <TextBlock
          Title={"Logo Designs"}
          Body={
            "I have designed and rendered a few logos for both personal use and for specific people."
          }
        />
        <ImageGrid MediaList={logoList} ColumnCount={4} Width={"100%"} />
        <Box
          textAlign={"center"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <TextBlock
            Title={"Digital Art"}
            Body={
              "I have created a lot of illustrations for personal use. A large majority of this illustrations are based around characters created for D&D."
            }
          />
          <ImageGrid MediaList={digitalList} ColumnCount={3} Width={"100%"}/>
          <TextBlock
            Title={"Traditional Art"}
            Body={
              "I don't do as much traditional art as I would like to anymore. Once recent addition to my collection of skills is painting and painting specifically minis. This was always something I was sort of scared of doing but, once I started I really started loving it."
            }
          />
          <ImageGrid MediaList={traditionalList} ColumnCount={3} Width={"100%"}/>
        </Box>
      </Box>
    </Box>
  );
}
