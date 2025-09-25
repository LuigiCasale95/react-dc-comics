import Card from './card/Card'


const MyMain = () => {
    return (
        <main>
            <img className="jumbotron" src="./img/jumbotron.jpg" alt="JUmbotroon TeenTitans"/>
            <div className="containerMain">
                <div className="content">
                    <h2>CURRENT SERIES</h2>

                    <div className="row">
                        <Card></Card>

                    </div>

                </div>

            </div>
            
            <div className="blueBar">
                <div className="containerMain">
                    <ul className="listMain">
                        <li><a href="@"> <img className="iconDC" src="./img/buy-comics-digital-comics.png" alt="Logo digital" /> <span>DIGITAL COMICS</span> </a></li>
                        <li><a href="@"> <img className="iconDC" src="./img/buy-comics-merchandise.png" alt="Logo T-shirt" /> <span> DC MERCCHANDISE</span> </a></li>
                        <li><a href="@"> <img className="iconDC" src="./img/buy-comics-subscriptions.png" alt="Logo card" /> <span>SUBSCRIPTION</span> </a></li>
                        <li><a href="@"> <img className="iconDcLocator" src="./img/buy-comics-shop-locator.png" alt="Logo posizione" /> <span>COMICS SHOP LOCATOR</span> </a></li>
                        <li><a href="@"> <img className="iconDC" src="./img/buy-dc-power-visa.svg" alt="Logo power Visa" /> <span> DC POWER VISA</span> </a></li>
                    </ul>
                </div>

            </div>
        </main>
    )
}
export default MyMain;