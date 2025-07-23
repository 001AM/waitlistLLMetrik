import { BrowserRouter, Route, Routes } from "react-router-dom";
import routesConfig from "@/hooks/routes";
import "./App.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;