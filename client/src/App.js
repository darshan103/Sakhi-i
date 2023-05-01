import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/dashboard' element={<PrivateRoute/>} >
        <Route path="" element={<Dashboard/>} />
      </Route>
      <Route path='/register' element={<Register/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/privacy' element={<Policy/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    </>
  );
}

export default App;
