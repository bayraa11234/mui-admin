import { Box, Button } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { CategoriesScreen, HomeScreen } from "./Pages";
import { CategoryCreateScreen } from "./Pages/CategoryCreateScreen";
// import { useToast } from "./hooks";
// import { useDialog } from "./hooks/useDialog";
// import { useModal } from "./hooks/useModal";
const bgColor = blueGrey[50];
const wrapperStyle = {
  p: 5,
  bgcolor: bgColor,
  width: "calc(100vw - 65px)",
  minHeight: "calc(100vh - 65px)",
  boxSizing: "border-box",
};

function App() {
  // const showToast = useToast();
  // const showDialog = useDialog();
  // const showModal = useModal();

  return (
    <Layout>
      {/* <Button
          variant="contained"
          onClick={() => {
            showDialog("new dialog");
          }}
        >
          dialog
        </Button> */}
      <Box sx={wrapperStyle}>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/categories" element={<CategoriesScreen />}></Route>
          <Route
            path="/categories/new"
            element={<CategoryCreateScreen />}
          ></Route>
        </Routes>
      </Box>
    </Layout>
  );
}

export default App;
