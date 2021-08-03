import "./App.css";
import Header from "./components/Layout/Header/Header";
import MainRouter from "./MainRouter";

function App() {
  return (
    <div className='h-100'>
      <Header />
      <MainRouter />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
