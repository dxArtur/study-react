import styles from './Mood.module.css'

function Mood({imgSrc, description}) {
    return (
        <>
            <img src={imgSrc} alt="cat mood" />
            <h3>{description}</h3>
        </>
    )
}

export default Mood