import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";
import AppRoutes from './config/Routes.js'
import { ActivityDataProvider } from "./context/ActivityDataContext.jsx";
import { ToastrProvider } from "./context/ToastrContext.jsx";
import ActivityArchivedFeedPage from "./pages/ActivityArchivedFeed.jsx";
import ActivityInboxFeedPage from "./pages/ActivityInboxFeed.jsx";
import ActivityDetailPage from "./pages/ActivityDetail.jsx";
import ComingSoonPage from "./pages/ComingSoon.jsx";

const App = () => {
  const defaultTheme = createTheme({
    palette: { primary: { main: "#2AC420" } },
    typography: { fontFamily: "Space Grotesk" },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <ToastrProvider>
          <Router>
            <ActivityDataProvider>
              <Routes>
                <Route
                  exact
                  path={AppRoutes.INBOX}
                  element={<ActivityInboxFeedPage />}
                />
                <Route
                  exact
                  path={AppRoutes.ACTIVITY_DETAIL}
                  element={<ActivityDetailPage />}
                />
                <Route
                  exact
                  path={AppRoutes.ARCHIVED}
                  element={<ActivityArchivedFeedPage />}
                />
                <Route
                  exact
                  path={AppRoutes.CONTACTS}
                  element={<ComingSoonPage pageName="Contacts" />}
                />
                <Route
                  exact
                  path={AppRoutes.NUMPAD}
                  element={<ComingSoonPage pageName="Numpad" />}
                />
                <Route
                  exact
                  path={AppRoutes.SETTINGS}
                  element={<ComingSoonPage pageName="Settings" />}
                />
                <Route
                  exact
                  path={AppRoutes.APP_DETAILS}
                  element={<ComingSoonPage pageName="App Details" />}
                />
              </Routes>
            </ActivityDataProvider>
          </Router>
        </ToastrProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);

export default App;
