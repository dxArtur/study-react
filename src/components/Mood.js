import React, {useState} from 'react'
import stylesMood from './Mood.module.css'
import ButtonChangeMood from './ChangeMood'
import stylesButtonChoose from './Emotional.module.css'

function Mood({imgSrc, description}) {

    const [isMoodVisible, setIsMoodVisible] = useState(false)
    
    function changeMood() {
        setIsMoodVisible(!isMoodVisible)

    }

    return (
        <div id={stylesMood.containerMood} >
            <img id={stylesMood.image} src={imgSrc} alt="cat mood" />
            <h3>{description}</h3>

            <button onClick={changeMood}>change mood</button>
        </div>
    )
}

export default Mood