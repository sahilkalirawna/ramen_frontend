import "./App.css";
import Header from "./components/Layout/Header/Header";
<<<<<<< HEAD
import { Route, Switch } from "react-router-dom";
import Home from "./components/view/Home/Home";
import PageNotFound_404 from "./components/view/pageNotFound/PageNotFound_404";
import Footer from "./components/Layout/Footer/Footer";
import Login from "./components/view/login/Login";
import Signup from "./components/view/Signup/Signup";
import EditProfile from "./components/view/EditProfile/EditProfile";
=======
import MainRouter from "./MainRouter";
>>>>>>> a8f8470d166b1ebad26c77d43b9ba0e40848b0bf

function App() {
  return (
    <div className='h-100'>
      <Header />
<<<<<<< HEAD
      <Switch>
        <Route path='/' name='Home' exact component={Home} />
        <Route path='/login' name='Login' exact component={Login} />
        <Route path='/signup' name='Signup' exact component={Signup} />
        <Route path='/editProfile' name='EditProfile' exact component={EditProfile} />
        <Route
          path='404'
          name='PageNotFound_404'
          exact
          component={PageNotFound_404}
        />
        <Route path='*' name='PageNotFound_404' component={PageNotFound_404} />
      </Switch>
      <Footer />
=======
      <MainRouter />
      {/* <Footer /> */}
>>>>>>> a8f8470d166b1ebad26c77d43b9ba0e40848b0bf
    </div>
  );
}

export default App;
