import About from "./components/about/About";
import Course from "./components/course/Course";
import Footer from "./components/footer/Footer";
import HeaderApp from "./components/header/HeaderApp";
import Ourapp from "./components/ourapp/Ourapp";

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <About />
      <Course />
      <Ourapp />
      <Footer />
    </div>
  );
}

export default App;
