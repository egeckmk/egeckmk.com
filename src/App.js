import { ColorModeContext, useMode } from "./theme";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Homepage from "./scenes/homepage";
import Works from "./scenes/works";
import Posts from "./scenes/posts";
import Uses from "./scenes/uses";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <Container maxWidth="md">
              <Topbar />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/works" element={<Works />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/uses" element={<Uses />} />
              </Routes>
            </Container>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
