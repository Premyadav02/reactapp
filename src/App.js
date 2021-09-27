import { Route } from "react-router";
import HomePage from "./Component/HomePage";
import Skill from "./Component/Skill";
import About from "./Component/About";

function App() {
  return (
   
    <>
      <Route path='/' exact component = {HomePage} />
      <Route path='/skill' exact component = {Skill} />
      <Route path='/about' exact component = {About} />
    </>
    );
}

export default App;
