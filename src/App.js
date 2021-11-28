import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import GameDetail from 'pages/GameDetail';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="football/:id/:slug" element={<GameDetail />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
