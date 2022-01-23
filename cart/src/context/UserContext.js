import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [users,setUsers] = useState([])

    useEffect(() => {
        const getUsers = localStorage.getItem(`amiUsers`)
        getUsers ? setUsers(JSON.parse(getUsers)) : setUsers([])
    },[])

    useEffect( () => {
        localStorage.setItem(`amiUsers`, JSON.stringify(users))
    },[users])

    const addUser = (newUser) => {
        let newU = [{name: newUser, id:Math.random()}, ...users];
        setUsers(newU)
    }

    const deleteUser = (id) => {
        let newU = users.filter( user => {
            return user.id !== id
        })
        setUsers(newU)
    }

    const editUser = (newUser) => {
        let updated = users.map( user => {
            if(user.id.toString() === newUser.id.toString()){
                return newUser
            }
            return user
        })
        setUsers(updated)
    }

    return (
        <UserContext.Provider value={{users, addUser, deleteUser, editUser}}>
            {children}
        </UserContext.Provider>
    );
}
 
export default UserContextProvider;