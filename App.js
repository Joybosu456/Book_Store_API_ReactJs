import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Signup from './components/signup/signUp';
import MainPage from './components/mainpage/mainPage';
import Header from './components/header/header';
import Books from './components/books/books';
import BooksDesign from './components/booksdesign/booksDesign';
import Dashbord from './components/dashbord/dashbord';
import Routers from './components/router/router';
import MyCart from './components/mycart/myCart';
import CustomerDetails from './components/customerdetails/customerDetails';
import OrderSuccesFull from './components/ordersuccesfully/orderSuccesfully';
import OrderSummery from './components/ordersummery/orderSummery';
import WishList from './components/wishList/wishList';
import Profile from './components/profile/Profile';



function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <MainPage/> */}
      {/* < Dashbord /> */}
      {/* <OrderSuccesFull/> */}
      {/* <OrderSummery/> */}
      {/* <MyCart/> */}
      {/* <CustomerDetails/> */}
      {/* <WishList/> */}
      <Routers/>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
