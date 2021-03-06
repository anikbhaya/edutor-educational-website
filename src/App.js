import logo from './logo.svg';
import './App.css';
import useCourses from './Components/hooks/useCourses';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Courses from './Components/Courses/Courses';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import SingleCourse from './Components/SingleCourse/SingleCourse';
import { useParams } from 'react-router';

function App() {
  
  return (
    <div id="main">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <Courses>
            <h2 className="text-3xl font-medium mb-5">All Courses</h2>
            </Courses>
          </Route>
          <Route path="/courses/:singleCourse">
            <SingleCourse></SingleCourse>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
