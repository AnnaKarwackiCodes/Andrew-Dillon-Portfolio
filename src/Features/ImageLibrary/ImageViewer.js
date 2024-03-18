import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function ImageViewer({ CurrentImage, open, handleClose }) {
  const style = {
    position: "absolute",
    width: "auto",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: "background.paper",
    border: "2px solid #000",
    backgroundColor: "white",
    boxShadow: 24,
    p: 4,
    padding: "2%",
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
      }}
      aria-labelledby="modal-modal-title"
    >
      {CurrentImage && (
        <Box style={style}>
          <Box width={'100%'} sx={{alignContent:'center', justifyContent:'center'}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {CurrentImage.name}
            </Typography>
            <img
              id="modal-modal-image"
              srcSet={CurrentImage.filePath}
              src={CurrentImage.filePath}
              alt={CurrentImage.altText}
              loading="lazy"
              height={'350px'}
              width={'auto'}
            />
          </Box>
        </Box>
      )}
    </Modal>
  );
}
