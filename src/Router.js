import React from "react";
import { 
  Route,  
  Routes,
  BrowserRouter,
} from "react-router-dom";
import {
  HomePage,
  Projects,
} from './pages';
import { localizedStrings } from "./constants";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={localizedStrings.homePage} element={<HomePage />}/>
        <Route path={localizedStrings.projectsPage} element={<Projects />}/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;