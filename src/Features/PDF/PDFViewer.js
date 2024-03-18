import React from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "@mui/material/Button";
import * as pdfjsLib from "pdfjs-dist";
import Stack from "@mui/material/Stack";
// Import the worker correctly to avoid the message "Warning: Setting up fake worker"
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import Link from "@mui/material/Link";

export default function PDFViewer({ filePath }) {
  const [numPages, setNumPages] = React.useState();
  const [pageNumber, setPageNumber] = React.useState(1);
  const [myPath, setMyPath] = React.useState(filePath);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  React.useEffect(() => {
    setMyPath(filePath);
  },[filePath]);

  const pageInteraction = (
    <Box width={"100%"} padding={"1%"}>
      <Stack direction={"column"} spacing={3}>
        <Stack
          direction={"row"}
          alignContent={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          {pageNumber !== 1 && (
            <Button
              variant="contained"
              onClick={() => {
                setPageNumber(pageNumber - 1);
              }}
            >
              Prev Page
            </Button>
          )}
          <p>
            Page {pageNumber} of {numPages}
          </p>
          {pageNumber !== numPages && (
            <Button
              variant="contained"
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
            >
              Next Page
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );

  React.useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
  }, []);
  return (
    <Box alignItems={"center"} justifyContent={"center"} width={"100%"} margin={'2%'}>
      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          window.open(filePath, "_blanks");
        }}
      >
        Download
      </Button>
      {pageInteraction}
      <Document file={myPath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          size="A4"
          pageNumber={pageNumber}
          style={{
            flexDirection: "row",
            backgroundColor: "#E4E4E4",
          }}
        />
      </Document>
      {pageInteraction}
    </Box>
  );
}
