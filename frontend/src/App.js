import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Lab from "./pages/Lab";
import Training from "./pages/Training";
import Projects from "./pages/Projects";
import Mission from "./pages/Innerpages/Mission";
import Vision from "./pages/Innerpages/Vision";
import Response from "./pages/Response";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/lab" exact component={Lab} />
          <Route path="/training" exact component={Training} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/mission" exact component={Mission} />
          <Route path="/vision" exact component={Vision} />
          <Route path='/Response' exact component={Response}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
