import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/footer/Footer";
import Header from './components/header/Header';
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
     <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
