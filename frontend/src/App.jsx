import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import HaikuHistory from './pages/HaikuHistory';
import HaikuTheme from './pages/HaikuTheme';
import HaikuLines from './pages/HaikuLines';
import MyHaiku from './pages/MyHaiku';
import Haiku from './pages/Haiku';
import HaikuTitle from './pages/HaikuTitle';
import ConstrainedPoemHistory from './pages/ConstrainedPoemHistory';
import CreateConstrainedPoem from './pages/CreateConstrainedPoem';
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
                        <Route path="/haikus/themes/:themeID" component={HaikuLines} />
                        <Route path="/haikus/themes" component={HaikuTheme} />
                        <Route path="/haikus/history" component={HaikuHistory} />
                        <Route path="/haikus/titles/:poemID" component={Haiku} />
                        <Route path="/haikus/titles" component={HaikuTitle} />
                        <Route path="/haikus/:poemID" component={MyHaiku} />
                        <Route path="/exquisite-corpses/history" component={ExquisiteCorpseHistory} />
                        <Route path="/exquisite-corpses/select/:poemID" component={ExquisiteCorpse} />
                        <Route path="/exquisite-corpses/select" component={ExquisiteCorpseSelection} />
                        <Route path="/constrained-poems/history" component={ConstrainedPoemHistory} />
                        <Route path ="/constrained-poems/:poemID" component={ConstrainedPoem} />
                        <Route path="/constrained-poems" component={ConstrainedPoems} />
                        <Route path="/create-constrained-poems" component={CreateConstrainedPoem} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div> 
        </Router>
    );
}

export default App;
