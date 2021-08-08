import {NavLink} from 'react-router-dom';

const Header = () => {
    return <nav>
        <li>
            <NavLink activeStyle={{color: 'red'}} to="/">Home</NavLink>
        </li>
        <li>
            <NavLink activeStyle={{color: 'red'}} to="/vehicles">Vehicles</NavLink>
        </li>
    </nav>
}

export default Header;