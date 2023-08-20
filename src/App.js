import HomePage from "./components/HomePage";
import ProviderDashboard from "./components/ProviderDashboard";
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
          <Route path='/UserPage' element={<UsersPage/>}/>
          <Route path='/ProviderDashBoard' element={<ProviderDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
