const NavBar = [
    {name: "CHARACTERS", href: "#"},
    {name: "COMICS", href: "#"},
    {name: "MOVIES", href: "#"},
    {name: "TV", href: "#"},
    {name: "GAMES", href: "#"},
    {name: "COLLECTIBLES", href: "#"},
    {name: "VIDEOS", href: "#"},
    {name: "FANS", href: "#"},
    {name: "NEWS", href: "#"},
    {name: "SHOP", href: "#"},
]

const MyHeader = () => {
    return (
        <header>
        <div className="containerHeader">
            <div className="logo">
                <img src="./img/dc-logo.png" alt="logo dc" />
            </div>
            <div className="">
                <ul className="listHeader">
                    
                    {NavBar.map((link, index) => (
                    <li key={index}><a href={link.href}>{link.name}</a></li>

                    ))}
                </ul>
            </div>

        </div>
        </header>
    )
}
export default MyHeader;