import HomePage from "./components/HomePage";
import Login from "./components/Login";
import ProviderDashboard from "./components/ProviderDashboard";
import Signup from "./components/Signup";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import UsersPage from "./components/UsersPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<Signup/>}/>
          <Route path='/ProviderDashBoard' element={<ProviderDashboard/>}/>
          <Route path='/UserPage' element={<UsersPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
