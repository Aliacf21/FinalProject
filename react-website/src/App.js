import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages";
import Project from "./pages/Project";
import Research from "./pages/Research";


function App() {
  return (
    <Router>
    	<Switch>
    		<Route path='/' exact component={Home} />
    		<Route path='/examOptimum' exact component={Project} />
    		<Route path='/15112' exact component={Project} />
    		<Route path='/BunBunBakeShop' exact component={Project} />
    		<Route path='/Shuttle' exact component={Project} />
    		
    		<Route path='/IAT' exact component={Research} />
    		<Route path='/StemIAT' exact component={Research} />
    		<Route path='/Test' exact component={Research} />
    		<Route path='/ResearchProject' exact component={Research} />
    	</Switch>

    </Router>
  );
}

export default App;
