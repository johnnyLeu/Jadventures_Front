import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import PatronLogin from "./components/login/PatronLogin";


//Variabile di contesto globale
//è STATE dell'intera applicazione;

function App() {
  return (
    <BrowserRouter>
      <Navbar />    
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="patronlogin" element={<PatronLogin />} />

        {/*
        <Route path="allpeople" element={<AllPeople />} />
        <Route path="persondetail/:id" element={<PersonDetail />}/>
         in spring facciamo con url/{id} 
        */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
