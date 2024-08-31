import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Component/register.jsx';
import Login from './Component/login.jsx';
import Products from './Component/products.jsx';
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Products/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
