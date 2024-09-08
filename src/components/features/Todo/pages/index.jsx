import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListPage from '../pages/ListPage';
import DetailPage from '../pages/Detail';

function TodoFeatures() {
    return (
        <div>
            <Routes>
                {/* Đường dẫn chính là "/" sẽ tương ứng với "/todos" từ App */}
                <Route path="/" element={<ListPage />} />
                
                {/* Đường dẫn con với tham số */}
                <Route path=":todoId" element={<DetailPage />} />
            </Routes>
        </div>
    );
}

export default TodoFeatures;
