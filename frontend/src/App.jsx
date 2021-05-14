import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/navbar';
import NotFound from './components/notfound';

function App() {
    return ( 
        <Router >
            <div>
                <NavBar />
                <div id="page-body">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/haikus"/>
                        <Route path="/exquisite-corpses" />
                        <Route path="/constrained-poems" />
                        <Route component={NotFound} />
                    </Switch>
                    
                </div>
            </div> 
        </Router>
    );
}

export default App;