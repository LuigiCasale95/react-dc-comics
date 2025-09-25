const DcComicsLinks = ["Characters", "Comics", "Movies", "TV", "Games","Videos", "News"];

const ShopLinks = ["Shop DC", "Shop DC Collectibles"];

const DcLinks = ["Terms Of Use", "Privacy policy News", "Ad Choices", "Adversting", "Jobs", "Subscription", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"];

const SitesLinks = ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"];


const MyFooter = () => {
    return (
        <footer>
            <div className="containerFooter">

            <div className="listFooter">
                <section>
                    <ul>
                        <li>DC COMICS</li>
                        {DcComicsLinks.map((link) => (
                        <li><a href="#">{link}</a></li>

                        ))}
                    </ul>
                    <ul>
                        <li>SHOP</li>
                        {ShopLinks.map((link) => (
                        <li><a href="#">{link}</a></li>

                        ))}
                    </ul>
                </section>
                <section>
                    <ul>
                        <li>DC</li>
                        {DcLinks.map((link) => (
                        <li><a href="#">{link}</a></li>

                        ))}
                    </ul>
                </section>
                <section>
                    <ul>
                        <li>SITES</li>
                        {SitesLinks.map((link) => (
                        <li><a href="#">{link}</a></li>

                        ))}

                    </ul>
                </section>
            </div>

            <div className="imgFooter">
                <img src="./img/dc-logo-bg.png" alt="logo DC " />
            </div>

            </div>
        </footer>
    )
}
export default MyFooter;