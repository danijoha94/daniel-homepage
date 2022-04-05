import './header.css'
export default function Header(props){
    const {changePage} = props;

    return(
        <div className="header"> 
            <div className="header-some">
                <a href="https://www.facebook.com/daniel.johansen.33" target="_blank"><img src="/assets/facebook.svg"/></a>
                <a href="https://www.linkedin.com/in/daniel-johansen-60a50a15a/" target="_blank"><img src="/assets/linkedin.svg"/></a>
            </div>
            <div className="header-title">
                <button onClick={() => changePage('homepage')}>
                    <h1>Daniel Johansen</h1>
                </button>
            </div>
            <div className="header-tabs">
                <button onClick={() => changePage('about')}>Om meg</button>
                <button onClick={() => changePage('contact')}>Kontakt</button>
            </div>
        </div>
    );
}