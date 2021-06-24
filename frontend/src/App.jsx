import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import HaikuHistory from './pages/HaikuHistory';
import HaikuTheme from './pages/HaikuTheme';
import HaikuLine from './pages/HaikuLine';
import MyHaiku from './pages/MyHaiku';
import HaikuTitle from './pages/HaikuTitle';
import ConstrainedPoemHistory from './pages/ConstrainedPoemHistory';
import ConstrainedPoemRule from './pages/ConstrainedPoemRule';
import ConstrainedPoems from './pages/ConstrainedPoems';
import ConstrainedPoem from './pages/ConstrainedPoem';
import NavBar from './components/navbar';
import NotFound from './components/notfound';
import ExquisiteCorpseHistory from './pages/ExquisiteCorpseHistory';
import ExquisiteCorpseSelection from './pages/ExquisiteCorpseSelection';
import ExquisiteCorpse from './pages/ExquisiteCorpse';

function App() {
    return ( 
        <Router >
            <div>
                <NavBar />
                <div id="page-body">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/haikus/create/:themeID" component={HaikuLine} />
                        <Route path="/haikus/create" component={HaikuTheme} />
                        <Route path="/haikus/history" component={HaikuHistory} />
                        <Route path="/haikus/titles" component={HaikuTitle} />
                        <Route path="/haikus/:poemID" component={MyHaiku} />
                        <Route path="/exquisite-corpses/history" component={ExquisiteCorpseHistory} />
                        <Route path="/exquisite-corpses/select/:poemID" component={ExquisiteCorpse} />
                        <Route path="/exquisite-corpses/select" component={ExquisiteCorpseSelection} />
                        <Route path="/constrained-poems/history" component={ConstrainedPoemHistory} />
                        <Route path ="/constrained-poems/:poemID" component={ConstrainedPoem} />
                        <Route path="/constrained-poems" component={ConstrainedPoems} />
                        <Route path="/constrained-poems/create" component={ConstrainedPoemRule} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div> 
        </Router>
    );
}

export default App;
