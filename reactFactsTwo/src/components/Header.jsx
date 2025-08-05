export default function Header({logo}) {
    return (
        <header className='header'>
            <nav>
                <img src={logo} alt="react logo" width={50}/>
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}