import React from "react";
import SelectField from "../components/SelectField";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import TextFieldComponent from "../components/TextFieldComponent";
import useAxios from "../hook/useAxios";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOption = [
    {
      id: "easy",
      name: "Easy",
    },
    {
      id: "medium",
      name: "Medium",
    },
    {
      id: "hard",
      name: "Hard",
    },
  ];

  const typeOptions = [
    {
      id: "boolean",
      name: "True/False",
    },
    {
      id: "mutiple",
      name: "Multiple Choice",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/question");
  };
  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField options={difficultyOption} label="Difficulty" />
      <SelectField options={typeOptions} label="Type" />
      <TextFieldComponent />
      <Box mt={3} width="100%">
        <Button variant="contained" fullWidth type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Setting;
