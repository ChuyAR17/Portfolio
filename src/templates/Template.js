// Images
import youtube_landing from '@images/youtube-landing.png';
import github_landing from '@images/github-landing.png';

// Badges
import javascript_badge from '@images/JavaScript-Bagde.png';
import frontend_badge from '@images/FrontEnd-Badge.png';
import webdevelopment_badge from '@images/WebDevelopment-Badge.png';


const Template = async () => {
  const view = `
    <header class="header-container">
        <div class="menu-icon"></div>
        <div class="logo-icon" title="Jesus Ramirez"></div>
    </header>
    <main class="main-container">
    <div class="side-containers icons-container">
        <a class="icon icon-github" href="https://github.com/ChuyAR17" target="_blank" rel="noopener noreferrer"></a>
        <a class="icon icon-linkedin" href="https://www.linkedin.com/in/jesusramirezr17/" target="_blank" rel="noopener noreferrer"></a>
        <a class="icon icon-twitter" href="https://twitter.com/JRamirezR17" target="_blank" rel="noopener noreferrer"></a>
        <a class="icon icon-instagram" href="https://www.instagram.com/j_ramirezr17/" target="_blank" rel="noopener noreferrer"></a>
    </div>
    <div class="side-containers email-container">
        <a href="mailto:jar170396@gmail.com">jar170395@gmail.com</a>
    </div>
    <section class="greeting-card section">
        <h1>Hello!</h1>
        <h4>I'm Jesús a Front-end Engineer.</h4>
        <a class="button-mail" href="mailto:jar170396@gmail.com">Let's work together</a>
    </section>
    <section class="section">
        <h3 class="title">About me</h3>
        <p class="subtitle">Who I am.</p>
        <p class="about-me">I'm a Front-end Engineer passionate for build custom and person-oriented software and apps, always learning how to improve the performance and UX of the apps I've done.</p>
    </section>
    <section class="experience-container section">
        <h3 class="title">Experience</h3>
        <p class="subtitle">Where I've worked.</p>
        <div class="experience-container--card">
            <h4>Software Developer</h4>
            <p><a href="https://www.caffenio.com" target="_blank" rel="noopener noreferrer">@ CAFFENIO</a></p>
            <p><span>2019 - Current Job</span></p>
        </div>
        <div class="experience-container--card">
            <h4>Front-end Engineer</h4>
            <p><a href="#">@ PRAGMA</a></p>
            <p><span>2021 - Part Time</span></p>
        </div>
    </section>
    <section class="section">
        <h3 class="title">Proyects</h3>
        <p class="subtitle">What I've done.</p>
        <div class="proyect-card">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src="${youtube_landing}" alt="Proyect image"></a>
            <h4>Tournament Manager</h4>
            <p>Organize and manage sport tournamenst.</p>
            <div class="proyect-card--links">
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Github Repo</a>
                <a href="https://www.youtubecom/" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
        </div>
        <div class="proyect-card">
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
            <img src="${github_landing}" alt="Proyect image"></a>
            <h4>Booking boardrooms</h4>
            <p>Book a boardroom from your office.</p>
            <div class="proyect-card--links">
                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">Github Repo</a>
                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
        </div>
    </section>
    <section class="section">
        <h3 class="title">Skills</h3>
        <p class="subtitle">What I've studied.</p>
        <div class="course-card">
            <a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">
            <img src="${javascript_badge}" alt="JavaScript Course badge"></a>
            <p class="course-card--title">JavaScript Career</p>
            <p><a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">@ Platzi</a></p>
        </div>
        <div class="course-card">
            <a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">
            <img src="${frontend_badge}" alt="FrontEnd Course badge"></a>
            <p class="course-card--title">Front-End Engineer</p>
            <p><a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">@ Platzi</a></p>
        </div>
        <div class="course-card">
            <a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">
            <img src="${webdevelopment_badge}" alt="Web Development Course badge"></a>
            <p class="course-card--title">Web Development</p>
            <p><a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">@ Platzi</a></p>
        </div>
    </section>
    </main>
    <footer>Jesús Ramírez | 2021</footer>
  `;
  return view;
};

export default Template;