import Header from '../components/Header';

export default function Home() {
    return (
        <>
            <Header>About Me</Header>
            <section className='d-flex justify-content-between p-5'>
                <div className='w-25'>
                    <img src='./src/assets/images/vik-profile-pic-small.jpg' alt='Vik Boyechko' className='rounded-circle' />
                </div>
                <div className='w-75 mx-5'>
                    <h2 className='mb-4'>Product Owner -&gt; Web Developer</h2>
                    <p>I am a Digital Product Owner who is learning full stack web development to further extend my skill set in web application development.</p>

                    <p>Throughout my career, I have had a deep love for continually learning and evolving in the digital space. My early background in digital marketing and content production has helped me utilize storytelling and technology to distill complex business goals into effortless customer experiences.</p>

                    <p>After pivoting to digital product management, I have managed the development and growth of multiple custom web platforms with robust staff and customer portals, using a variety of technologies.</p>

                    <p>Now with my ability to understand the end-to-end process of web app development, I will be able to guide development teams toward truly efficient, agile deployments with the customer at the heart of every decision.</p>
                </div>
            </section>
        </>
    );
}
