import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
const WithCopyToClipboard = ({ children, text }) => {
  const handleCopy = () => {
    toast.success("Copied successfully");
  };
  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      {children}
    </CopyToClipboard>
  );
};

export default WithCopyToClipboard;
