import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
