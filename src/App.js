import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blogs from './components/Pages/Blogs/Blogs';
import Home from './components/Pages/Home/Home';
import AddItem from './components/Pages/Inventory/AddItem/AddItem';
import Inventory from './components/Pages/Inventory/Inventory';
import ItemUpdate from './components/Pages/ItemUpdate/ItemUpdate';
import Login from './components/Pages/Login/Login';
import RequireAuth from './components/Pages/Login/RequireAuth/RequireAuth';
import MyItems from './components/Pages/MyItems/MyItems';
import Register from './components/Pages/Register/Register';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <ItemUpdate></ItemUpdate>
          </RequireAuth>
        }></Route>

        <Route path='/inventory/add' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>

        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
