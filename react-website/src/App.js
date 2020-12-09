import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages";
import examOptimum from "./pages/examOptimum";
import programming from "./pages/programming";
import BunBunBakeShop from "./pages/BunBunBakeShop";
import Shuttle from "./pages/Shuttle";
import IAT from "./pages/IAT";
import StemIAT from "./pages/StemIAT";
import Test from "./pages/Test";
import ResearchProject from "./pages/ResearchProject";
import Resume from "./pages/Resume";




function App() {
  return (
    <Router>
    	<Switch>
    		<Route path='/' exact component={Home} />
    		<Route path='/examOptimum' exact component={examOptimum} />
    		<Route path='/15112' exact component={programming} />
    		<Route path='/BunBunBakeShop' exact component={BunBunBakeShop} />
    		<Route path='/Shuttle' exact component={Shuttle} />
    		<Route path='/IAT' exact component={IAT} />
    		<Route path='/StemIAT' exact component={StemIAT} />
    		<Route path='/Test' exact component={Test} />
    		<Route path='/ResearchProject' exact component={ResearchProject} />
            <Route path='/Resume' exact component={Resume} />
    	</Switch>

    </Router>
  );
}

export default App;
