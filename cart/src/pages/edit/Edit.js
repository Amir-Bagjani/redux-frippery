import { useParams, useHistory } from 'react-router';
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import './Edit.css'
import { editUser, foundUser } from '../../redux/usersSlice';

const Edit = () => {
    const { findUser } = useSelector(state => state.users)
    const dispatch = useDispatch()
    const { id } = useParams();
    const history = useHistory();
    const [editName,setEditName] = useState(``);

    useEffect(() => {
            dispatch(foundUser(id))
            if(findUser.name){
                setEditName(findUser.name);
            }
    }, [dispatch, id, findUser]);

    

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(editUser({...findUser, name: editName}))
        history.push(`/`);
    }
    const handleCancel = () => {
        history.push(`/`);
    }

    return (
        <div className="edit-user">
        <label>
               <span>Name</span>
               <input type="text" required value={editName} onChange={e => setEditName(e.target.value)} />
           </label>
           <button className='btn-submit' onClick={handleSubmit}>Submit</button>
           <button className='btn-cancel' onClick={handleCancel}>Cancel</button>
        </div>
    );
}
 
export default Edit;