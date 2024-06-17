import { Routes, Route, BrowserRouter } from "react-router-dom";
import Setting from "./pages/Setting";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Typography variant="h2" fontWeight="bold">
                    Quiz App
                  </Typography>
                  <Setting />
                </>
              }
            />
            <Route path="/question" element={<Questions />} />
            <Route path="/score" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
