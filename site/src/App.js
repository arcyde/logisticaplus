import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewClient from './components/pages/NewClient'
import Clients from './components/pages/Clients'
import Client from './components/pages/Client'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router> 
      <Navbar/>

      <Container customClass="min-height">
        <Routes >
        
          <Route exact path= "/" element={<Home/>}/> 
          <Route path= "/Clients" element={<Clients/>}/> 
          <Route path= "/Company" element={<Company/>}/> 
          <Route path= "/Contact" element={<Contact/>}/> 
          <Route path= "/NewClient" element={<NewClient/>}/> 
          <Route path= "/Client/:id" element={<Client/>}/>      
        
        </Routes>
      </Container>

      <Footer/>
    </Router>
  );
}

export default App;
