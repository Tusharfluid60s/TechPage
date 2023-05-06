import {Route, BrowserRouter as Router, Routes} from 'react-router-dom' 
import  './styles/App.scss'
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';


import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"
import "./styles/footer.scss"


function App (){
return(
   <Router>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Services' element={<Services/>}/>
    </Routes>
    <Footer/>
  </Router>










);
}
export default App;