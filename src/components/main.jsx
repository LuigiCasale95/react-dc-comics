import Card from './Card/Card'


const MyMain = () => {
    return (
        <main>
            <img className="jumbotron" src="./img/jumbotron.jpg" alt="JUmbotroon TeenTitans"/>
            <div className="containerMain">
                <div className="content">
                    <h2>CURRENT SERIES</h2>

                    <div className="row">
                        <div className="card">
                            <div className='containerImg'>
                             <img className='ImgComics' src="https://imgs.search.brave.com/gAZQuZyt6WjcUWF6aXCIBaiJqtOJAK-X4nxS9Vbvwno/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4y/LnBlbmd1aW4uY29t/LmF1L2NvdmVycy9v/cmlnaW5hbC85Nzgx/NDAxMjc1NDI2Lmpw/Zw" alt="" />
                            </div>
                            <h3>Titolo</h3>
                        </div>

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