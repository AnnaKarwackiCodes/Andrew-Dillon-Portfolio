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
      <PDFModal
        CurrentPDF={CurrentPDF}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
}
