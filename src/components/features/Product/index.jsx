import React from "react";
import { Routes, Route, } from "react-router-dom"; 
import ListingPage from "./pages/ListtingPage";


function ProductFeature() {
    

    return (
        <div>
            ProductFeature
            <Routes>
                <Route path="/products" element={<ListingPage />} />
            </Routes>
        </div>
    );
}

export default ProductFeature;
