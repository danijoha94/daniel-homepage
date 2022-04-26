import "./header.css";
export default function Header() {

  return (
    <section className='header'>
      <div className="header__blur">
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li>
              <a href='#'>
                <h2>Daniel Johansen</h2>
              </a>
            </li>
            <li>
              <a href='#'>Prosjekter</a>
            </li>
            <li>
              <a href='#'>Om meg</a>
            </li>
            <li>
              <a href='#contact'>Kontakt</a>
            </li>
            <li>
              <a className='header__some-icon' href='#'>
                <span class='fab fa-facebook-square'></span>
                <span className='sr-only'>facebook</span>
              </a>
            </li>
            <li>
              <a className='header__some-icon' href='#'>
                <span class='fab fa-linkedin'></span>
                <span className='sr-only'>linkedin</span>
              </a>
            </li>
            <li>
              <a className='header__cv' href='#'>
                CV
              </a>
            </li>
          </ul>
        </nav>
        <p className='header__intro'>Hei, Mitt navn er</p>
        <span className='header__name'>Daniel Johansen</span>
        <h2 className='header__occupation'>Systemutvikler</h2>
        <p className='header__intro-text'>
          Jeg er frontend-utvikler for NRK og jobber med nettsiden yr.no. For
          øyeblikket prøver jeg meg på <a>"CSS only"-prosjekter</a>
        </p>
      </div>
    </section>
  );
}
