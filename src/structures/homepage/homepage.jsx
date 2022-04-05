import { classNames } from "../../helpers/helpers.js";
import About from "../about/about";
import Contact from "../contact/contact.jsx";
import './homepage.css';
import Homepage_content from "./homepage_content.jsx";

export default function Homepage(props){
    const {onPage} = props;
    return (
    <div className="homepage">
        <Homepage_content active={onPage === 'homepage'}/>
        <About active={onPage === 'about'}/>
        <Contact active={onPage === 'contact'}/>
    </div>
    );
}