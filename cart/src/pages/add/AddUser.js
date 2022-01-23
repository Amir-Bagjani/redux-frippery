import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addUser } from '../../redux/usersSlice';

import './AddUser.css'

const AddUser = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [name,setName] = useState(``);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addUser(name))
        history.push(`/`);
    }
    const handleCancel = () => {
        history.push(`/`);
    }

    return (
        <div className="add-user">
           
           <label>
               <span>Name</span>
               <input type="text" required value={name} onChange={e => setName(e.target.value)} />
           </label>
           <button className='btn-submit' onClick={handleSubmit}>Submit</button>
           <button className='btn-cancel' onClick={handleCancel}>Cancel</button>
           
        </div>
    );
}
 
export default AddUser;