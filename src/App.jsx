import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";
import { ActivityDataProvider } from "./context/ActivityDataContext.jsx";
import { ToastrProvider } from "./context/ToastrContext.jsx";
import ActivityArchivedFeedPage from "./pages/ActivityArchivedFeed.jsx";
import ActivityInboxFeedPage from "./pages/ActivityInboxFeed.jsx";
import ActivityDetailPage from "./pages/ActivityDetail.jsx";

const App = () => {
  
  const defaultTheme = createTheme({
    palette: { primary: { main: "#2AC420" } },
    typography: { fontFamily: "Space Grotesk" },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <ToastrProvider>
          <ActivityDataProvider>
            <Router>
              <Routes>
                <Route exact path="/" element={<ActivityInboxFeedPage />} />
                <Route
                  exact
                  path="/activities/:id"
                  element={<ActivityDetailPage />}
                />
                <Route
                  exact
                  path="/archived"
                  element={<ActivityArchivedFeedPage />}
                />
              </Routes>
            </Router>
          </ActivityDataProvider>
        </ToastrProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);

export default App;
