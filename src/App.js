
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./AddContact";
import './App.css';
import Create from "./Create";
import Home from './Home';
import UpdateContact from "./UpdateContact";

function App() {
  return (
    <div className="App">
     


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/update" element={<UpdateContact />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
