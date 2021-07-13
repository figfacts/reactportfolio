//Components
import Nav from "./components/Nav/Nav";
import Intro from "./components/About/Intro";
import AboutMe from "./components/About/AboutMe";
import MyWork from "./components/MyWork/MyWork";
// import Contact from "./components/ContactInfo/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro/>
      <AboutMe/>
      <MyWork/>
      <Footer />
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



