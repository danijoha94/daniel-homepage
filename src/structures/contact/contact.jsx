import { classNames } from '../../helpers/helpers.js';
import './contact.css'

export default function Contact(props){
    const {active} = props;
    return (
    <div className={classNames('contact', 'active', active)}>
        Kommer snart
    </div>);
}