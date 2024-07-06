import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import Home from "./components/Home/Home";
import Articles from "./components/Home/Articles/Articles";
import Blog from "./components/Home/Blog/Blog";
import Sales from "./components/Home/Sales/Sales";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={SignIn} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/home" Component={Home} />
        <Route path="/home/articles" Component={Articles} />
        <Route path="/home/blog" Component={Blog} />
        <Route path="/home/sales" Component={Sales} />
      </Routes>
    </div>
  );
};

export default App;
