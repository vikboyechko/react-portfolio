import Header from '../components/Header';
import Project from '../components/Project';

const renterlyApp = {
    imgSrc: './src/assets/images/renterly-home-screen.jpg',
    imgAlt: 'Renterly App',
    title: 'Renterly App',
    description: 'A full-stack app using Sequelize, Express, Handlebars, and Node.js',
    github: 'https://github.com/vikboyechko/renter-profile',
    deployed: 'https://afternoon-forest-27682-c3f9d39e0ce3.herokuapp.com/'
};

const chooseAidventure = {
    imgSrc: './src/assets/images/choose-your-own-ai-adventure-screenshot.png',
    imgAlt: 'Choose Your Own AI Adventure',
    title: 'Choose Your Own AI Adventure',
    description: 'An unpredictable AI-powered adventure game with DALL-E images',
    github: 'https://github.com/Index-al/Choose-Your-Own-AI-venture',
    deployed: 'https://index-al.github.io/Choose-Your-Own-AI-venture'
}

const textEditorPWA = {
    imgSrc: './src/assets/images/jate-pwa-screengrab.jpg',
    imgAlt: 'JavaScript Text Editor PWA',
    title: 'JavaScript Text Editor PWA',
    description: 'A JavaScript text editor Progressive Web App with offline capabilities',
    github: 'https://github.com/vikboyechko/pwa-text-editor',
    deployed: 'https://pwa-text-editor-mob7.onrender.com/'
}

const techBlog = {
    imgSrc: './src/assets/images/tech-blog-screenshot.jpg',
    imgAlt: 'Tech Blog',
    title: 'Tech Blog',
    description: 'An API template using Express, Sequelize, and Node.js',
    github: 'https://github.com/vikboyechko/renter-profile',
    deployed: 'https://afternoon-forest-27682-c3f9d39e0ce3.herokuapp.com/'
};



export default function Portfolio() {
    return (
        <>
            <Header>Portfolio</Header>
            <section className='work' id='work'>
                <Project imgSrc={renterlyApp.imgSrc} imgAlt={renterlyApp.imgAlt} title={renterlyApp.title} description={renterlyApp.description} github={renterlyApp.github} deployed={renterlyApp.deployed} />

                <Project imgSrc={chooseAidventure.imgSrc} imgAlt={chooseAidventure.imgAlt} title={chooseAidventure.title} description={chooseAidventure.description} github={chooseAidventure.github} deployed={chooseAidventure.deployed} />

                <Project imgSrc={textEditorPWA.imgSrc} imgAlt={textEditorPWA.imgAlt} title={textEditorPWA.title} description={textEditorPWA.description} github={textEditorPWA.github} deployed={textEditorPWA.deployed} />

                <Project imgSrc={techBlog.imgSrc} imgAlt={techBlog.imgAlt} title={techBlog.title} description={techBlog.description} github={techBlog.github} deployed={techBlog.deployed} />
            </section>
        </>
    );
}
