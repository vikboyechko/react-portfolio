export default function Project({ imgSrc, imgAlt, title }) {
    return (
        <>
            <div className='work-item'>
                <a href='#' className='hover-link'>Deployed Application</a>
                <img src={imgSrc} alt={imgAlt} />
                <div className='work-item-title'>
                    <h4>{title}</h4>
                </div>
            </div>
        </>
    )
}