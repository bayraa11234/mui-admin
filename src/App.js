import { Box, Button } from "@mui/material";
import { Layout } from "./components/Layout";
import { useToast } from "./hooks";
// import { NestedModal } from "./contexts/ModalContext";
// import { FormDialog } from "./contexts/DialogContext";
import { useDialog } from "./hooks/useDialog";

function App() {
  const showToast = useToast();
  const showDialog = useDialog();

  return (
    <Layout>
      <Box sx={{ p: 5, display: "flex", gap: "10px" }}>
        <Button
          variant="contained"
          onClick={() => {
            showToast("Hello toast");
          }}
        >
          Toggle toast
        </Button>
        {/* <NestedModal /> */}
        <Button
          variant="contained"
          onClick={() => {
            showDialog("new dialog");
          }}
        >
          dialog
        </Button>
      </Box>
    </Layout>
  );
}

export default App;
