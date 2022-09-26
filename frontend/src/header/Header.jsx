import './header.css';
import Avatar from '../assets/profile-photo.jpg';

export default function Header() {
    return (
        <header className='Header'>
            <div className="HeaderLeft">
                <i className="social-icons fa-brands fa-square-facebook"></i>
                <i className="social-icons fa-brands fa-square-twitter"></i>
                <i className="social-icons fa-brands fa-square-instagram"></i>
            </div>
            <nav className='HeaderCenter'>
                <ul className="NavList">
                    <li className="NavItems">Home</li>
                    <li className="NavItems">About</li>
                    <li className="NavItems">Contact</li>
                    <li className="NavItems">Write</li>
                    <li className="NavItems">Log Out</li>
                </ul>
            </nav>
            <div className="HeaderRight">
                <img className='Avatar' src={Avatar} alt="Avatar"  />
                <i class="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </header>
    )
}
