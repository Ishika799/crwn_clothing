import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/header/header"
import Home from "./pages/Home/home.jsx"
import Shop from "./pages/shop/Shop.jsx"
import SignInSignUp from './pages/signInsignUp/SignInSignUp.jsx';
import { Provider} from 'react-redux';
import store from './redux/store'
import Checkout from './pages/checkout/Checkout';

function App() {
  
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <Routes>
      <Route path='/' element={<Header/>}/>
      <Route index element={<Home/>}/>
      <Route path='shop/*' element={<Shop/>}/>
      <Route path='/signin' element={<SignInSignUp/>}/>
      <Route path='/checkout' element={<Checkout  />} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
