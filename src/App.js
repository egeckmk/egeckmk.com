import { ColorModeContext, useMode } from "./theme";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Homepage from "./scenes/homepage";

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
              </Routes>
            </Container>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
