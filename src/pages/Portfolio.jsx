// This file contains the Portfolio page component, which displays a list of projects. Each project is displayed using the Project component.

import Header from '../components/Header';
import Project from '../components/Project';

const renterlyApp = {
    imgSrc: '/images/renterly-home-screen.jpg',
    imgAlt: 'Renterly App',
    title: 'Renterly App',
    description: 'A full-stack app using Sequelize, Express, Handlebars, and Node.js',
    github: 'https://github.com/vikboyechko/renter-profile',
    deployed: 'https://afternoon-forest-27682-c3f9d39e0ce3.herokuapp.com/'
};

const chooseAidventure = {
    imgSrc: '/images/choose-your-own-ai-adventure-screenshot.png',
    imgAlt: 'Choose Your Own AI Adventure',
    title: 'Choose Your Own AI Adventure',
    description: 'An unpredictable AI-powered adventure game with DALL-E images',
    github: 'https://github.com/Index-al/Choose-Your-Own-AI-venture',
    deployed: 'https://index-al.github.io/Choose-Your-Own-AI-venture'
}

const textEditorPWA = {
    imgSrc: '/images/jate-pwa-screengrab.jpg',
    imgAlt: 'JavaScript Text Editor PWA',
    title: 'JavaScript Text Editor PWA',
    description: 'A JavaScript text editor Progressive Web App with offline capabilities',
    github: 'https://github.com/vikboyechko/pwa-text-editor',
    deployed: 'https://pwa-text-editor-mob7.onrender.com/'
}

const weatherDashboard = {
    imgSrc: '/images/weather-dashboard-screenshot.jpg',
    imgAlt: 'Weather Dashboard',
    title: 'Weather Dashboard',
    description: 'A weather dashboard using the OpenWeather API',
    github: 'https://github.com/vikboyechko/weather-dashboard',
    deployed: 'https://vikboyechko.github.io/weather-dashboard'
}

const dayPlanner = {
    imgSrc: '/images/workday-scheduler-screenshot.jpg',
    imgAlt: 'Work Day Planner',
    title: 'Work Day Planner',
    description: 'A day planner using Javascript and Local Storage',
    github: 'https://github.com/vikboyechko/day-planner',
    deployed: 'https://vikboyechko.github.io/day-planner'
}

const techBlog = {
    imgSrc: '/images/tech-blog-screenshot.jpg',
    imgAlt: 'Tech Blog',
    title: 'Tech Blog',
    description: 'An API template using Express, Sequelize, and Node.js',
    github: 'https://github.com/vikboyechko/tech-blog',
    deployed: 'https://github.com/vikboyechko/tech-blog'
};

const readmeGenerator = {
    imgSrc: '/images/readme-generator-screenshot.jpg',
    imgAlt: 'Readme Generator',
    title: 'Readme Generator',
    description: 'A command-line application using Node.js',
    github: 'https://github.com/vikboyechko/readme-generator',
    deployed: 'https://github.com/vikboyechko/readme-generator'
}

export default function Portfolio() {
    return (
        <>
            <Header>Portfolio</Header>
            <section className='work pb-5' id='work'>
                <Project imgSrc={renterlyApp.imgSrc} imgAlt={renterlyApp.imgAlt} title={renterlyApp.title} description={renterlyApp.description} github={renterlyApp.github} deployed={renterlyApp.deployed} />

                <Project imgSrc={chooseAidventure.imgSrc} imgAlt={chooseAidventure.imgAlt} title={chooseAidventure.title} description={chooseAidventure.description} github={chooseAidventure.github} deployed={chooseAidventure.deployed} />

                <Project imgSrc={textEditorPWA.imgSrc} imgAlt={textEditorPWA.imgAlt} title={textEditorPWA.title} description={textEditorPWA.description} github={textEditorPWA.github} deployed={textEditorPWA.deployed} />

                <Project imgSrc={weatherDashboard.imgSrc} imgAlt={weatherDashboard.imgAlt} title={weatherDashboard.title} description={weatherDashboard.description} github={weatherDashboard.github} deployed={weatherDashboard.deployed} />

                <Project imgSrc={dayPlanner.imgSrc} imgAlt={dayPlanner.imgAlt} title={dayPlanner.title} description={dayPlanner.description} github={dayPlanner.github} deployed={dayPlanner.deployed} />

                <Project imgSrc={techBlog.imgSrc} imgAlt={techBlog.imgAlt} title={techBlog.title} description={techBlog.description} github={techBlog.github} deployed={techBlog.deployed} />

                <Project imgSrc={readmeGenerator.imgSrc} imgAlt={readmeGenerator.imgAlt} title={readmeGenerator.title} description={readmeGenerator.description} github={readmeGenerator.github} />
            </section>
        </>
    );
}
