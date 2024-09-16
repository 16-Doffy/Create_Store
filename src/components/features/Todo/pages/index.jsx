import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListPage from '../pages/ListPage';  // Correct import path
import DetailPage from './Detail';  // Correct import path

function TodoFeatures() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path=":todoId" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default TodoFeatures;

//git add. => git commit -m "đã sửa" //git push -u origin main