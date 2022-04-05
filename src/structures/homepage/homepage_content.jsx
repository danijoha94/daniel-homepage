import { classNames } from "../../helpers/helpers.js";

export default function Homepage_content(props){
    const {active} = props;
    return(
    <div className={classNames('homepage_content', 'active', active)}>
        <section className="homepage_content-section-1">
            <img src="/assets/main-image.jpg"/>
            <article>
                <h3>Frontend</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
            </article>
        </section>
        <section className="homepage_content-section-2">
            <img src="/assets/article-2.jpg"/>
            <article>
                <h3>Web-design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
            </article>
        </section>
        <section className="homepage_content-section-3">
            <img src="/assets/article-3.jpg"/>
            <article>
                <h3>CSS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
            </article>
        </section>
    </div>
    )
}