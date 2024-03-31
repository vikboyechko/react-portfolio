export default function Home() {
    return (
        <div className='d-flex justify-content-between'>
            <div className='w-25'>
                <img src='./src/assets/images/vik-profile-pic-small.jpg' alt='Vik Boyechko' className='rounded-circle' />
            </div>
            <div className='w-75 mx-5'>
                <h1 className='mb-4'>About Me:</h1>
                <p>I am a Product Manager/Owner who is learning full stack web development to further extend my skill set in web application development.</p>
                <p>
                    Throughout my career, I have had a deep love for continually learning and evolving in the digital space. My background in digital marketing and content production has helped me utilize storytelling and technology to distill complex business goals into effortless customer experiences. After pivoting to product management, I have managed the development and growth of multiple custom web platforms with robust staff and customer portals.</p>
                <p>Now with my ability to understand the end-to-end process of web app development, I will be able to guide development teams toward truly efficient, agile deployments with the customer at the heart of every decision.</p>
            </div>
        </div>
    );
}
