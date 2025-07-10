export default function Header({Logo}) {
    return (
        <header className='header'>
            <img src={Logo} alt="react-logo" width="55px" />
            <nav>
                <ul style={{ listStyleType: "none", display: 'flex' }} >
                    <li className='nav-list'>Pricing</li>
                    <li className='nav-list'>About</li>
                    <li className='nav-list'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}