import { classNames } from '../../helpers/helpers.js';
import './about.css'

export default function About(props){
    const {active} = props;
    return (
    <div className={classNames('about', 'active', active)}>
        <article className="about-article">
            <div className="about-article-text">
                <p>Hei, Jeg er Daniel Johansen</p>
                <h3>Er utvikler for NRK og jobber med frontend på yr.no</h3>
            </div>
            <img src="/assets/profile.png"/>
        </article>
    </div>
    );
}