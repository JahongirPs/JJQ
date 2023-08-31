import {Routes, Route} from "react-router-dom";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Nav from "./components/nav/Nav";
import Serch from "./components/serch/Serch";
import End from "./components/end/End";
import Parents from "./routes/Parents/Parents";
import Aloqa from "./routes/aloqa/Aloqa"
import ProductView from "./routes/product-view/ProductView";

function App() {
  return (
    <div className="container">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Parents" element={<Parents/>} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path='/Aloqa' element={<Aloqa/>}/>
        <Route path='/product-view/:id' element={<ProductView/>}/>
        
      </Routes>
      <End/>
    </div>
  );
}

export default App;