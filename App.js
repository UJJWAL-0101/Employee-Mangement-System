
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import './App.css';
import Dashboard from './Dashbard';
import LoginPage from './Dashbard/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
