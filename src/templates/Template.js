const Template = async () => {
  const view = `
    <div class="page-frame">
    <div class="page-frame--upperline"></div>
    <div class="page-frame--leftline"></div>
    <div class="page-frame--rightline"></div>
    <span class="page-frame--menuicon"></span>
    <span class="page-frame--logoicon"></span>
    <div class="page-frame--info-container">
        <div class="page-frame--icons">
            <span class="page-frame--github"></span>
            <span class="page-frame--linkedin"></span>
            <span class="page-frame--twitter"></span>
            <span class="page-frame--instagram"></span>
        </div>
        <div class="page-frame--email">
            <p>jar170396@gmail.com</p>
        </div>
    </div>
  </div>
  <header>
    <div class="header-container">
        <h1>Hello!</h1>
        <h4>I'm Jesús a Front-end developer.</h4>
        <button>Let's work</button>
    </div>
  </header>
  <main>
    <section class="section">
        <h3>About me</h3>
        <p>Who I am.</p>
        <p>I'm a front-end developer passionate for build custom and person oriented software and apps.</p>
    </section>
    <section class="section">
        <h3>Experience</h3>
        <p>Where I've worked.</p>
        <div>
            <h4>Software Developer</h4>
            <div>
                <a href="https://www.caffenio.com" target="_blank" rel="noopener noreferrer"><p>@ CAFFENIO</p></a>
                <p><small>2019 - </small></p>
            </div>
        </div>
        <div>
            <h4>Front-end Engineer</h4>
            <div>
                <a href="/" target="_blank" rel="noopener noreferrer"><p>@ PRAGMA</p></a>
                <p><small>2021 - </small></p>
            </div>
        </div>
    </section>
    <section class="section">
        <h3>Proyects</h3>
        <p>What I've done.</p>
        <div>
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
            <img src="/" alt="Proyect image"></a>
            <h4>Tournament Manager</h4>
            <p>Organize and manage sport tournamenst.</p>
            <div>
                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">Github Repo</a>
                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
        </div>
        <div>
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
            <img src="/" alt="Proyect image"></a>
            <h4>Booking boardrooms</h4>
            <p>Book a boardroom from your office.</p>
            <div>
                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">Github Repo</a>
                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
        </div>
    </section>
    <section class="section">
        <h3>Studies</h3>
        <p>What I've studied.</p>
        <div>
            <a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">
            <img src="/" alt="Course badge"></a>
            <p>Front-end Developer</p>
            <p>@ Platzi</p>
        </div>
        <div>
            <a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">
            <img src="/" alt="Course badge"></a>
            <p>React Developer</p>
            <p>@ Platzi</p>
        </div>
    </section>
  </main>
  <footer>Jesús Ramírez | 2021</footer>
  `;
  return view;
};

export default Template;