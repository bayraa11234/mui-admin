import { BreadCrumbs } from "../components";
import { Home } from "@mui/icons-material";
import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const breadCrumbs = [
  {
    label: "",
    link: "/",
    icon: <Home />,
  },
  {
    label: "categories",
    link: "/categories",
  },
  {
    label: "new",
  },
];

export const CategoryCreateScreen = () => {
  const [categories, setCategories] = useState("");

  const submit = () => {
    axios
      .post("http://localhost:8000/categories", { name })
      .then((res) => {
        toast.success("Амжилттай нэмэгдлээ");
        afterSubmit(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Алдаа гарлаа");
      });
    app.post("/categories", jsonParser, (req, res) => {
      const { name } = req.body;
      const newCategories = { id: nextCatId++, name };
      updateCategoriesFile();
      res.send(newCategories);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <Stack
        sx={{
          mt: 3,
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 0 5px rgba(0,0,0,.1)",
        }}
      >
        <h2>Add Users</h2>
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
        />
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "10px",
            mt: 3,
          }}
        >
          <Button variant="contained">Save</Button>
          <Link to={"/categories"}>
            <Button variant="contained">Cancel</Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};
