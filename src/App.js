import React, { useEffect } from "react";
import {  Route, Routes, Navigate } from "react-router-dom";
import TodoFeatures from "./components/features/Todo/pages";
import AlbumFeatures from "./components/features/Album/pages";
import productApi from "./api/productApi";
import CounterFeature from "./components/features/Counter";
import './App.css';

import Header from "components/Header";
// const Title = styled.h1`
//   text-align:center;
//   font-weight:bold;
//   color:${(props) => props.color || 'green'};
// `; //style-components css in js

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    };
    fetchProduct();
  }, []);

  // const color = 'yellow';
  // const backgroundUrl = 'https://i.pinimg.com/originals/a7/6f/b5/a76fb56a44eb84ac877bde3ae1326086.jpg';

  return (
    <div className="App">
     <Header/>

   

      <Routes>
        <Route path="/home" element={<Navigate to="/" />} exact />
        <Route
          path="/post-list/:postId"
          element={<Navigate to="/post/:postId" />}
          exact
        />

        <Route path="/" element={<CounterFeature />} exact />
        <Route path="/todos/*" element={<TodoFeatures />} />
        <Route path="/album" element={<AlbumFeatures />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;