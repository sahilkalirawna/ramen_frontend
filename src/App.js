import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import MainRouter from "./MainRouter";
import { useEffect } from "react";
import { resetState } from "./redux/action/generalActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  return (
    <div className='h-100'>
      <Header />
      <MainRouter />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
