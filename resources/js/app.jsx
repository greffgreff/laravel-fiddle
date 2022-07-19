import './bootstrap';
import '../css/app.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Tasks />} />
        </Routes>
    </BrowserRouter>
);
