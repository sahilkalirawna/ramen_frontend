import "./App.css";
import Header from "./components/Layout/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./components/view/Home/Home";
import PageNotFound_404 from "./components/view/pageNotFound/PageNotFound_404";
import Footer from "./components/Layout/Footer/Footer";
import Login from "./components/view/login/Login";
import Signup from "./components/view/Signup/Signup";

function App() {
  return (
    <div className='h-100'>
      <Header />
      <Switch>
        <Route path='/' name='Home' exact component={Home} />
        <Route path='/login' name='Login' exact component={Login} />
        <Route path='/signup' name='Signup' exact component={Signup} />
        <Route
          path='404'
          name='PageNotFound_404'
          exact
          component={PageNotFound_404}
        />
        <Route path='*' name='PageNotFound_404' component={PageNotFound_404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
