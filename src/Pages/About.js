import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import PDFViewer from "../Features/PDF/PDFViewer";

import TitleBar from "../Components/TitleBar";
import Banner from "../Components/Banner";
import ImageTextComponent from "../Components/ImageTextComponet";
import TextBlock from "../Components/TextBlock";
import Infocards from "../Components/Infocards";
import PDFModal from "../Features/PDF/PDFModal";

export default function About({ setCurrentPage }) {
  const resumeCard = [
    {
      title: "",
      details: "",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const resumePDF =  "https://dillon-portfolio-bucket.s3.us-east-2.amazonaws.com/PDF/resume_AndrewDillon_2024.pdf";
  return (
    <Box>
      <TitleBar PageName={"About"} />
      <ImageTextComponent
        ImageLeft={true}
        ImagePath={require("../Media/Images/self.jpg")}
        AltText={"gif of a pixel art version of myself writing"}
        Title={"Where I Come From"}
        Text={"I grew up in Buffalo, New York, the city of Football, Good Pizza, and Wings. I went attended college at Rochester Institute of Technology where I majored in Game Design and Development. "+

        "\n\nI currently work as a Software Engineer at M&T Bank, where I joined as part of their Technology Development Program and graduated into the fulltime role I am in today.  I work on and manage a lot of tools based in Marketing Technology, so a lot of applications that deal with Communication, Collaboration, and Compliance."}
        ImageWidth={"80%"}
      />
      <Stack
        direction={"row"}
        spacing={3}
        paddingLeft={"5%"}
        paddingRight={"5%"}
        paddingTop={"2.5%"}
        paddingBottom={"2.5%"}
        alignContent={'center'}
        justifyContent={'center'}
      >
        <TextBlock Title={"Let's connect:"} Body={""} />
        <Infocards
          Title={"Resume"}
          Infolist={resumeCard}
          ActionFunction={() => {
            //setCurrentPage("Development");
            handleOpen();
          }}
          FunctionName={"View my resume"}
        />
        <Infocards
          Title={"Email"}
          Infolist={resumeCard}
          ActionFunction={() => {
            window.open("mailto:ajmakesgames@gmail.com", "_blanks");
          }}
          FunctionName={"Send an Email"}
        />
      </Stack>
      <PDFModal CurrentPDF={resumePDF} open={open} handleClose={handleClose}/>
    </Box>
  );
}
