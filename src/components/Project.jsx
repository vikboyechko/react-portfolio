export default function Project({ imgSrc, imgAlt, title, description, github, deployed }) {
    return (
        <>
            <div className='work-item'>

                <img src={imgSrc} alt={imgAlt} />

                <div className='work-item-title'>
                    <h4>{title}</h4>
                </div>

                <div className='work-item-overlay'>
                    <p className='hover-text'>{description}</p>
                    <a href={github} className='hover-link' target='_blank'>GitHub Repository</a>
                    <a href={deployed} className='hover-link' target='_blank'>Deployed Application</a>
                </div>
            </div>
        </>
    )
}