import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocalstorage } from "./usersSlice";

const SaveInLocalstorage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const localCart = localStorage.getItem(`cart`);
    localCart && dispatch(setLocalstorage(JSON.parse(localCart)));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(`cart`, JSON.stringify(users));
  }, [users]);

  return null
};
export default SaveInLocalstorage;
