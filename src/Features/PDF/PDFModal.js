import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PDFViewer from "./PDFViewer";
export default function PDFModal({ CurrentPDF, open, handleClose, Width="50%", Alignment="20%" }) {
  const style = {
    position: "absolute",
    top: "10%",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '75%',
    bgcolor: "background.paper",
    border: "2px solid #000",
    backgroundColor: "white",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
      }}
      aria-labelledby="modal-modal-title"
    >
      <Box style={style} overflow={'scroll'}>
        <PDFViewer filePath={CurrentPDF} />
      </Box>
    </Modal>
  );
}
