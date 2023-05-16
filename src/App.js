
import { BrowserRouter as Router, } from "react-router-dom";
import AnimatedRoutes from "./components/AnimateRoutes";
import BackSound from "./components/Backsound"

function App() {

  return (
    <>
      <BackSound />
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
