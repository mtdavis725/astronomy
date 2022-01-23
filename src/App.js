import './styles/App.scss';
import LandingPage from './components/LandingPage';
import Archive from './components/Archive';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
