import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Portfolio from './pages/Portfolio';
import TomutoPage from './pages/TomutoPage';

function App() {
  return (
    <div className='w-full h-screen box-border overflow-hidden hover:overflow-y-scroll'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/tomuto' element={<TomutoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
