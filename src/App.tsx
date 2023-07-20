import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataContextProvider } from "./components/providers/DataContext";
import { Layout } from "./components/Layout";
import { Map } from "./pages/Map";
import { IPStats } from "./pages/IPStats";

export const App = () => {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Map />} />
            <Route path="stats" element={<IPStats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  );
}
