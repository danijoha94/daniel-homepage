import "./projects.css";

export default function Projects() {
  return (
    <section className='projects'>
      <div className="projects__content-container">
        <h2 className='projects__header'>Mine prosjekter</h2>
        <article className='projects__project'>
          <img src='/assets/article-1.jpg'></img>
          <div className='projects__project-content'>
            <p className='projects__project-title'>Lorem Ipsum dorem</p>
            <h3 className='projects__project-header'>Dorem foo</h3>
            <p className='projects__project-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>
        <article className='projects__project reverted'>
          <div className='projects__project-content'>
            <p className='projects__project-title'>Lorem Ipsum dorem</p>
            <h3 className='projects__project-header'>Dorem foo</h3>
            <p className='projects__project-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <img src='/assets/article-2.jpg'></img>
        </article>
        <article className='projects__project'>
          <img src='/assets/article-1.jpg'></img>
          <div className='projects__project-content'>
            <p className='projects__project-title'>Lorem Ipsum dorem</p>
            <h3 className='projects__project-header'>Dorem foo</h3>
            <p className='projects__project-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
