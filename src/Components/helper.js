import Home from "@mui/icons-material/Home";
import Code from "@mui/icons-material/Code";
import Preview from "@mui/icons-material/Preview";
import Draw from "@mui/icons-material/Draw";
import Face from "@mui/icons-material/Face";

function setIcon(PageName, size = "small") {
  switch (PageName) {
    case "Development":
      return <Code fontSize={size} />;
      break;
    case "Design":
      return <Preview fontSize={size} />;
      break;
    case "Art":
      return <Draw fontSize={size} />;
      break;
    case "About":
      return <Face fontSize={size} />;
      break;
    case "Home":
      return <Home fontSize={size} />;
      break;
    default:
      break;
  }
}

export { setIcon };
