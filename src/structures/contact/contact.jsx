import './contact.css'

export default function Contact(){
    return (
        <section className="contact" id="contact">
            <h2 className="contact__header">Kontakt</h2>
            <p className="contact__text">Kontakt meg gjerne om det er noe du lurer på eller om du har noen tilbakemeldinger på noe av det jeg har gjort</p>
            <a className="contact__button" href="mailto:danijoha@live.no">E-post</a>  
        </section>
    );
}