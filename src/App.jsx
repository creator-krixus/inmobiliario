import { Route, Routes } from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './components/login/Login';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Home from './components/home/Home';
import SignUp from './components/register/SignUp';
import Separator from './components/separator/Separator';
import MisionVision from './components/misionVision/MisionVision'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Separator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<SignUp/>} />
          <Route path="misionvision" element={<MisionVision/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Separator />
      <Footer />
    </div>
  );
}

export default App;
