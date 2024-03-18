import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TitleBar from "../Components/TitleBar";
import Banner from "../Components/Banner";
import ImageTextComponent from "../Components/ImageTextComponet";
import TextBlock from "../Components/TextBlock";
import Stack from "@mui/material/Stack";
import Infocards from "../Components/Infocards";

export default function Homepage({setCurrentPage}) {
  const bannerImage = {
    filePath: require("../Media/Images/linkedin-header.png"),
    name: "Header Image",
    altText: "Header image for the homepage",
  };

  const devCard = [
    {
        title: 'Languages',
        details: 'C#, JavaScript, C++, HTML5, CSS, SCSS'
    },
    {
        title: 'Libraries',
        details: 'AR Foundation, React, React Native, Node.js'
    },
    {
        title: 'Platforms',
        details: 'Android, HP Mixed Reality Headset, iOS (React Native, Objective-C), Microsoft Hololens 2, Nintendo Switch, PC, Web (WordPress, HubSpot, Kajabi)'
    },
    {
        title: 'Development Tools',
        details: 'Unity, Microsoft Visual Studio, Visual Studio Code'
    }, 
];

const designCard = [
    {
        title: 'Targets',
        details: 'Digital Games, Web, TableTop RPG'
    },
    {
        title: 'Tools',
        details: 'Photoshop, inDesign, Marvel App, Figma, Affinity App Suite'
    }
];

const artCard = [
    {
        title: 'Mediums',
        details: '2D Traditional, 2D Digital, 3D Digital'
    },
    {
        title: 'Digital Tools',
        details: 'Procreate, Photoshop, Illustrator, Clip Studio, Maya (2017, 2018, 2019), Blender'
    },
    {
        title: 'Physical Mediums',
        details: 'Pen, Dip pen, Marker, Paint, Charcoal'
    },
];

  return (
    <Box>
      <TitleBar PageName={"Welcome!"} />
      <Banner Image={bannerImage} />
      <ImageTextComponent
        ImageLeft={false}
        ImagePath={require("../Media/Images/picture-of-me.jpg")}
        AltText={"photo of anna karwacki for intro section of the homepage"}
        Title={"Hi There!"}
        Text={
          "Thanks for stopping by, my name is Anna Karwacki. I am a software developer during the day, but during my free time I love creating things. Whether that is through development, art, design, or playing D&D with my friends."
        }
        ImageWidth={"60%"}
      />
      <TextBlock
        Title={"Quick Overview of What I Can Do"}
        Body={
          "I work as a Software engineer on an AR communication application for the Apple iPad. Daily I work with React Native, Unity, AR Foundation and where Javascript cannot get the job done: Objective-C."
        }
        Width={"90%"}
      />
      <Stack direction={'row'} spacing={3} paddingLeft={'5%'} paddingRight={'5%'} paddingTop={'2.5%'} paddingBottom={'2.5%'}>
        <Infocards Title={'Development'} Infolist={devCard} ActionFunction={()=>{setCurrentPage('Development')}} FunctionName={'Learn More'}/>
        <Infocards Title={'Design'} Infolist={designCard} ActionFunction={()=>{setCurrentPage('Design')}} FunctionName={'Learn More'}/>
        <Infocards Title={'Art'} Infolist={artCard} ActionFunction={()=>{setCurrentPage('Art')}} FunctionName={'Learn More'}/>
      </Stack>

      <ImageTextComponent
        ImageLeft={true}
        ImagePath={require("../Media/Images/creation-gif.gif")}
        AltText={"photo of anna karwacki for intro section of the homepage"}
        Title={"Now you got a little bit of an idea of what I can do:"}
        Text={
          "Take a look at more of what I've made or contact me if you want to talk more about what I have worked on. "
        }
        ImageWidth={"60%"}
        CallToActionName={'Contact Me'}
        ActionToCall={()=>{setCurrentPage('About')}}
      />
    </Box>
  );
}
