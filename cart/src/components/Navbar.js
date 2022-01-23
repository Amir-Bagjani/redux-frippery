import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    const { quantity, totalHeal } = useSelector(state => state.users)
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li className="logo">MyTeam</li>
                    <li style={{color: `white`}}>quantity: {quantity}</li>
                    <li style={{color: `white`}}>totHeal: {totalHeal}</li>

                    <li> <Link to="/add">Add User</Link></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;