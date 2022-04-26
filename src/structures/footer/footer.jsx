import './footer.css';

export default function Footer(){
    return (
        <footer className="footer">
            <h2 className="footer__title">Daniel Johansen · Overingeniør</h2>
            <ul className="footer__contact">
                <li><a href="#"><span class="fab fa-linkedin"></span><span className="sr-only">linkedin</span></a></li>
                <li><a href="#"><span class="fab fa-facebook-square"></span><span className="sr-only">facebook</span></a></li>
                <li><a href="#"><span class="fab fa-github-square"></span><span className="sr-only">github</span></a></li>
                <li><a href="#"><span class="fas fa-envelope"></span><span className="sr-only">email</span></a></li>
            </ul>
            <span className="footer_rights">© 2022 Daniel Johansen. All rights reserved.</span>
        </footer>
    );
}