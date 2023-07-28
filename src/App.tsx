import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataContextProvider } from "./components/providers/DataContext";
import { Layout } from "./components/Layout";
import { Map } from "./pages/Map";
import { IPStats } from "./pages/IPStats";
import Home from "./pages";

export const App = () => {
  return (
   
      <BrowserRouter>
       <DataContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="map" element={<Map />} />
            <Route path="stats" element={<IPStats />} />
          </Route>
        </Routes>
        </DataContextProvider>
      </BrowserRouter>
    
  );
}
