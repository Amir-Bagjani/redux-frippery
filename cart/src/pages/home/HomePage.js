import { useSelector, useDispatch } from 'react-redux';
import { decreaseHeal, increaseHeal, removeUser } from '../../redux/usersSlice';
import { Link } from 'react-router-dom';

import './HomePage.css'

const HomePage = () => {
    const { users } = useSelector(state => state.users)
    const dispatch = useDispatch()

    return (
        <div className="home-page">
            {users.length === 0 && <p className="error">No user</p>}
            <ul>
            {users.length > 0 && users.map( user => (
               <li key={user.id}>
                   <p className="user-name">{user.name}</p>
                   <div>
                       <button onClick={()=>dispatch(decreaseHeal(user))}>-</button>
                       {user.heal}
                       <button onClick={()=>dispatch(increaseHeal(user))}>+</button>
                   </div>
                   <div>
                    <Link className="btn-edit" to={`/edit/${user.id}`}>Edit</Link>
                    <button className="btn-delete" onClick={() => dispatch(removeUser(user.id))}>Delete</button>
                   </div>
               </li> 
            ))}
            </ul>   
        </div>
    );
}
 
export default HomePage;