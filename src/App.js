import './App.css';
import Header from './Header'
import Card from './Card'
import Intro from './Intro'
import Contact from './Contact'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <div className="about">
        <Header/>
        <Card/>
        <Intro/>
      </div>
      <div className="contact">
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
