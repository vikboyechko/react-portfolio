import Header from '../components/Header';
import Project from '../components/Project';

const renterlyApp = {
    imgSrc: './src/assets/images/renterly-home-screen.jpg',
    imgAlt: 'Renterly App',
    title: 'Renterly App',
};


const techBlog = {
    imgSrc: './src/assets/images/tech-blog-screenshot.jpg',
    imgAlt: 'Tech Blog',
    title: 'Tech Blog',
};



export default function Portfolio() {
    return (
        <>
            <Header>Portfolio</Header>
            <section className='work' id='work'>
                <Project imgSrc={renterlyApp.imgSrc} imgAlt={renterlyApp.imgAlt} title={renterlyApp.title} />
                <Project imgSrc={techBlog.imgSrc} imgAlt={techBlog.imgAlt} title={techBlog.title} />
            </section>
        </>
    );
}
