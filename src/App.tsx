import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DataContextProvider} from "./components/providers/DataContext";
import {Layout} from "./components/Layout";
import {Map} from "./pages/Map";
import {IPStats} from "./pages/IPStats";
import WelcomePage from "./pages/WelcomePage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="" element={<WelcomePage/>}/>
          <Route element={<DataContextProvider/>}>
            <Route path="map" element={<Map/>}/>
            <Route path="stats" element={<IPStats/>}/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
    ;
}
