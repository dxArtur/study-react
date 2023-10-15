import Mood from "./Mood";
import ButtonChangeMood from "./ChangeMood";
import Moods from '../data/database.json'
import React, {useState} from 'react'
import styles from './Emotional.module.css'


function Emotional() {

    const [selectedMood, setSelectedMood] = useState(null)
    const [isMoodVisible, setIsMoodVisible] = useState(true)

    function renderMood(event) {
        const selectedMood = event.target.value
        const mood = JSON.parse(selectedMood)
        console.log(mood.imgSrc)
        setSelectedMood(mood)

        const containerChooseMood = document.getElementById(`${styles.chooseMoodContainer}`)
        containerChooseMood.style.display = 'none'
    }

    function changeMood() {
        setIsMoodVisible(!isMoodVisible)
    }

    return(
        <div>
            <div id={styles.chooseMoodContainer}>
                <select onChange={renderMood}> 
                    <option>choose your mood:</option>
                    {Moods.moods.map((mood, index)=>(
                        <option  key={index} value={JSON.stringify(mood)}>
                            {mood.description}
                        </option>
                    ))}
                </select>
            </div>
            {isMoodVisible ? (
                <div>
                {selectedMood && (
                    <Mood
                        imgSrc={selectedMood.imgSrc}
                        description={selectedMood.description}
                    />
                )}
                <button onClick={changeMood}>1change mood</button>
            </div>
            ):(
                <button onClick={changeMood}>change mood</button>
            )}
            
        </div>
    )
}

export default Emotional