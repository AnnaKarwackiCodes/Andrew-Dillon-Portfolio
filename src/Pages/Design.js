import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TitleBar from "../Components/TitleBar";
import Banner from "../Components/Banner";
import ImageTextComponent from "../Components/ImageTextComponet";
import PDFModal from "../Features/PDF/PDFModal";

export default function Design({ setCurrentPage }) {
  const [CurrentPDF, setCurrentPDF] = React.useState(null);
  const [PDFWidth, setPDFWidth] = React.useState("50%");
  const [PDFAlignment, setPDFAlignment] = React.useState("20%");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const medNotesPDF =
    "https://karwacki-portfolio-bucket.s3.us-east-2.amazonaws.com/PDF/Med-game-UI-notes.pdf";
  const UWSheetPDF =
    "https://karwacki-portfolio-bucket.s3.us-east-2.amazonaws.com/PDF/UnchartedWorld-CharacterSheet.pdf";
  const TASheetPDF =
    "https://karwacki-portfolio-bucket.s3.us-east-2.amazonaws.com/PDF/TriangleAgency.pdf";

  const bannerImage = {
    filePath: require("../Media/Images/linkedin-header.png"),
    name: "Header Image",
    altText: "Header image for the development page",
  };
  return (
    <Box>
      <TitleBar PageName={"Design"} />
      <Banner Image={bannerImage} />
      <ImageTextComponent
        ImageLeft={true}
        ImagePath={require("../Media/Images/design2.png")}
        AltText={"photo to preview some of the projects that will be seen"}
        Title={"My Design Experience"}
        Text={
          "My experience with design has ranged from designing the UI to a medical simulation game to being part of a group designing an original TTRPG. \n\nThe most recent design work has been around TTRPGs. I personal deal with visual snow which can make reading some characters sheets very difficult. So I try to design ways to improve my own experience with these games. "
        }
        ImageWidth={"90%"}
      />
      <ImageTextComponent
        ImageLeft={false}
        ImagePath={require("../Media/Images/nullsector-cover.png")}
        AltText={"Cover spread for the ttrpg Null Sector"}
        Title={"Null Sector TTRPG"}
        Text={
          "Adobe Photoshop, Adobe Illustrator, Adobe InDesign" +
          "\n\nDesign and developed by a team of 5 people. Main role on project was co-designer of mechanics and visual designer of the system's rulebook and character sheets." +
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
        ImagePath={require("../Media/Images/unchartedworlds.png")}
        AltText={"Screenshot of character sheet"}
        Title={"Uncharted World Character Sheet Redesign"}
        Text={
          "Adobe Illustrator" +
          "\n\nUncharted World is a TTRPG system by Sean Gomes. While playing the system I felt that the character sheet left something to be desired. I design my own version of it to be used by myself and other player in the campaign that was being ran."
        }
        ImageWidth={"90%"}
        CallToActionName={"View Character Sheet"}
        ActionToCall={() => {
          setPDFWidth("50%");
          setPDFAlignment("20%");
          setCurrentPDF(UWSheetPDF);
          handleOpen();
        }}
      />
      <ImageTextComponent
        ImageLeft={false}
        ImagePath={require("../Media/Images/triangleagency.png")}
        AltText={"Screenshot of character sheet"}
        Title={"Triangle Agency Character Sheet Redesign"}
        Text={
          "Affinity Designer" +
          "\n\nTriangle Agency is a recently Kickstarted TTRPG by Haunted Table Games. While planning on running a one shot using their playtest material I found that the character sheet was lacking (which is understandable with this being playtest material). Before running my one shot with my group I made them this character sheet to use while we played."
        }
        ImageWidth={"90%"}
        CallToActionName={"View Character Sheet"}
        ActionToCall={() => {
          setPDFWidth("50%");
          setPDFAlignment("20%");
          setCurrentPDF(TASheetPDF);
          handleOpen();
        }}
      />
      <ImageTextComponent
        ImageLeft={true}
        ImagePath={require("../Media/Images/mock-up-1.png")}
        AltText={"mockup sketch for the medical sim project"}
        Title={"University Of Rochester Medical Game"}
        Text={
          "Adobe Photoshop \n\n This was a game created in a partnership with RIT and the University of Rochester medical department. \n\nPurpose of the game is to help medical students with learning their material. The focus of the game was about pregnancy and all the factors that affect pregnancy. \n\nI was in charge of designing the UI and creating the art assets for the game. When it came to creating the UI I have to keep in mind that the player would not be traditional gamers so I had to design with them in mind."
        }
        ImageWidth={"90%"}
        CallToActionName={"View Design Notes"}
        ActionToCall={() => {
          setPDFWidth("75%");
          setPDFAlignment("12%");
          setCurrentPDF(medNotesPDF);
          handleOpen();
        }}
      />
      <PDFModal
        CurrentPDF={CurrentPDF}
        open={open}
        handleClose={handleClose}
        Width={PDFWidth}
        Alignment={PDFAlignment}
      />
    </Box>
  );
}
