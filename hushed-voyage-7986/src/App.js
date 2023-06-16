import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <AllRoutes />
      {/* <Navbar/>
      <Footer/>
      <Registration/>
      <Login/> */}
    </div>
  );
}

export default App;
