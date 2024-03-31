import Header from '../components/Header';

export default function Contact() {
    return (
        <>
            <Header>Contact</Header>
            {/* <div className='w-25'></div> */}
            <section className='mx-auto'>
                <div className='p-5'>
                    <h2>Get in Touch</h2>
                    <p>Feel free to reach out to me with any questions or opportunities.</p>
                    <form>
                        <div className='form-group'>
                            <label for='name'>Name</label>
                            <input type='text' className='form-control' id='name' />
                        </div>
                        <div className='form-group mt-3'>
                            <label for='email'>Email address</label>
                            <input type='email' className='form-control' id='email'></input>
                        </div>
                        <div className='form-group mt-3'>
                            <label for='message'>Message</label>
                            <textarea className='form-control' id='message' rows='3'></textarea>
                        </div>
                        <button type='submit' className='btn btn-secondary mt-4'>Submit</button>
                    </form>
                </div>
            </section>
            {/* <div className='w-25'></div> */}


        </>
    );
}
