function Header({onToggleSidebar}){
    return(
        <header className="header">
            <button onClick={onToggleSidebar} className="T-btn">☰</button>
            


        </header>
    )
}
export default Header;