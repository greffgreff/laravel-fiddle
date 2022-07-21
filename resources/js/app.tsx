import React from 'react';
import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Tasks />} />
        </Routes>
    </BrowserRouter>
);
