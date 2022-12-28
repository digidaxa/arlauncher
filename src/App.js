import './styles/App.css';
import Index from './pages/Index';
import Groups from './pages/Groups';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route path="/groups" element={<Groups />} />
    </Routes>
  );
}
