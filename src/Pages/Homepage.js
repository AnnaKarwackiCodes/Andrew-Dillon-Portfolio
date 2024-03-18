import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TitleBar from "../Components/TitleBar";
import Banner from "../Components/Banner";
import ImageTextComponent from "../Components/ImageTextComponet";
import PDFModal from "../Features/PDF/PDFModal";

export default function Homepage({ setCurrentPage }) {
  const [CurrentPDF, setCurrentPDF] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const homeBrewPDF = "https://dillon-portfolio-bucket.s3.us-east-2.amazonaws.com/PDF/Way-of-the-Blackshot-ver1-1.pdf";
  const homeBrewNotesPDF = "https://dillon-portfolio-bucket.s3.us-east-2.amazonaws.com/PDF/Design+Notes-+Way+of+the+Blackshot_1-1.pdf";

  return (
    <Box>
      <TitleBar PageName={"Welcome!"} />
      <ImageTextComponent
        ImageLeft={false}
        ImagePath={require("../Media/Images/self.jpg")}
        AltText={"photo of andrew dillon for intro section of the homepage"}
        Title={"Hiya!"}
        Text={
          "My name is Andrew Dillon but I go by AJ. I am currently a Software Engineer and an aspiring Game and UX Designer. My current obsessions are D&D, TCGS, and Video Games. More importantly, the cute corgi's name is Wulfred."
        }
        ImageWidth={"60%"}
        CallToActionName={"Contact Me"}
        ActionToCall={() => {
          setCurrentPage("About");
        }}
      />
      <ImageTextComponent
        ImageLeft={true}
        ImagePath={require("../Media/Images/blackshot-screenshot.png")}
        AltText={"screenshot of the pdf of the monk subclass"}
        Title={"Way of the Blackshot - 5e Monk Subclass"}
        Text={"GM Binder, HTML/CSS" +
        "\n\nCan be downloaded here or found on GM Binder. " +
        "\n\nPlay as a Monk trained to use Firearms in tandem with their martial arts. Inspired by the likes of John Wick from the John Wick series and Leon Kennedy from the Resident Evil series"}
        ImageWidth={"90%"}
        CallToActionName={"View Subclass"}
        ActionToCall={() => {
          setCurrentPDF(homeBrewPDF);
          handleOpen();
        }}
        SecondCallToActionName={"View Design Notes"}
        SecondActionToCall={()=>{
          setCurrentPDF(homeBrewNotesPDF);
          handleOpen();
        }}
      />

      <ImageTextComponent
        ImageLeft={false}
        ImagePath={require("../Media/Images/nullsector-cover.png")}
        AltText={"Cover spread for the ttrpg Null Sector"}
        Title={"Null Sector TTRPG"}
        Text={
          "Design and developed by a team of 5 people. Main roles were mechanics co-designer, item designer, and lore writer." +
          "\n\nPublish on DrivethruRPG." +
          "\n\nIn this TTRPG you play in the new USA, under the guidance and watchful eye of an all knowing AI: BINF. The players are all apart of different groups around the capital of this new United States who all have different skill focuses and relationships with the other groups.This system also features a unique reverse dice system where rolling low is your key to success." +
          "\n\nThis game is focused toward experienced tabletop RPG players."
        }
        ImageWidth={"90%"}
        CallToActionName={"Download for Free"}
        ActionToCall={() => {
          window.open(
            "https://preview.drivethrurpg.com/en/product/229217/Null-Sector",
            "_blanks"
          );
        }}
      />
      <ImageTextComponent
        ImageLeft={true}
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
        ImageLeft={false}
        ImagePath={require("../Media/Images/Sten.gif")}
        AltText={"gif of heading bobbing animation of professor like character"}
        Title={"Professor Character Head Bobbing Cycle"}
        Text={
          "Made in Photoshop"
        }
        ImageWidth={"60%"}
      />
      <ImageTextComponent
        ImageLeft={true}
        ImagePath={require("../Media/Images/AbilityIcons.jpg")}
        AltText={"icons for rpg-styled project"}
        Title={"Ability Icons for RPG-styled project"}
        Text={
          "Made in Photoshop"
        }
        ImageWidth={"90%"}
      />
      <PDFModal
        CurrentPDF={CurrentPDF}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
}
