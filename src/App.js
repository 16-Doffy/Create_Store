import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import TodoFeatures from "./components/features/Todo/pages";
import AlbumFeatures from "./components/features/Album/pages";
import productApi from "./api/productApi";
import CounterFeature from "./components/features/Counter";
import "./App.css"; // Make sure to import your CSS
import Header from "components/Header";
import Footer from "components/Footer";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

import ListingPage from "components/features/Product/pages/ListtingPage";

function App() {
  const { enqueueSnackbar } = useSnackbar(); 

  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    };
    fetchProduct();
  }, []);

  const showNotice = () => {
    enqueueSnackbar('successfully', { variant: 'success' });
  }

  return (
    <div className="App">
      <Header />
      <Button onClick={showNotice}>Show notice</Button>
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} exact />
        <Route path="/post-list/:postId" element={<Navigate to="/post/:postId" />} exact />
        <Route path="/" element={<CounterFeature />} exact />
        <Route path="/todos/*" element={<TodoFeatures />} />
        <Route path="/album" element={<AlbumFeatures />} />
        <Route path="/products" element={<ListingPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
