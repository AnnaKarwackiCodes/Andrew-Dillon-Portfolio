import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Button from "@mui/material/Button";
import ImageViewer from "./ImageViewer";

export default function ImageGrid({
  MediaList,
  ColumnCount,
  Width = 500,
  Height = 450,
}) {
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(MediaList[0]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box width={"90%"} padding={"2%"} height={"100%"}>
      <ImageList
        sx={{ width: Width, height: Height }}
        cols={ColumnCount}
        rowHeight={350}
      >
        {MediaList.map((item) => (
          <Box>
            <Button
              onClick={() => {
                console.log("click " + item.name);
                handleOpen();
                setCurrentImage(item);
              }}
            >
              <ImageListItem key={item.filePath} sx={{ width: '200px', objectFit: "contain" }}>
              <img
                    srcSet={item.filePath}
                    src={item.filePath}
                    alt={item.altText}
                    loading="lazy"
                  />
                <ImageListItemBar title={item.name} position="below" />
              </ImageListItem>
            </Button>
          </Box>
        ))}
      </ImageList>
      <ImageViewer
        CurrentImage={currentImage}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
}
