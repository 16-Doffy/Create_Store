import React, { useEffect } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import TodoFeatures from "./components/features/Todo/pages";
import AlbumFeatures from "./components/features/Album/pages";
import productApi from "./api/productApi";
import CounterFeature from "./components/features/Counter";

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    };
    fetchProduct();
  }, []);
  return (
    <div className="App">
      <h1>Home Page</h1>

      <nav>
        <p>
          <Link to="/todos">Todos</Link>
        </p>
        <p>
          <Link to="/album">Album</Link>
        </p>
      </nav>

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
