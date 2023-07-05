import logo from '../images/react-icon-small.png'
export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
              <li className="leftNav">
                <img className='logo' src={logo} />
                <p className="title">ReactFacts</p>
              </li>
              <li className='rightNav'>React Course - Project 1</li>
            </ul>
        </nav>
    )
}
