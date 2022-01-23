import { useEffect } from "react"
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import AddUser from "./pages/add/AddUser";
import Edit from "./pages/edit/Edit";
import { Switch, Route } from "react-router-dom";

//styles
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { setLocalstorage } from "./redux/usersSlice";

function App() {
  //save redux to local storage
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const localCart = localStorage.getItem(`cart`);
    localCart && dispatch(setLocalstorage(JSON.parse(localCart)));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(`cart`, JSON.stringify(users));
  }, [users]);


  return (
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <HomePage />
          </Route>
          <Route path="/add">
            <AddUser />
          </Route>
          <Route path="/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
