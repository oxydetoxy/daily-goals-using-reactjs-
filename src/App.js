import React from 'react';
import './App.css';
import Homepage from './components/homepage'; 
import Header from './components/header';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import About from './components/about';
import Contact from './components/contacts '
import Footer from './components/footer';
import User from './components/user';

function Component({ name }) {
  return <span>{name}</span>;
}

function App() {
  return (
    <BrowserRouter>
     
        <Header /> 
        <Routes>
        <Route  path='/' element={ <Homepage />}/>
        <Route  path='/about' element={  <About />}/>
        <Route  path='/contacts' element={  <Contact/>}/>
        <Route  path='/contacts/:id' element={  <User/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
