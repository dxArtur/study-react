import styles from './Form.module.css'

function Form() {

    function addMood() {
        console.log('mood added')
    }

    function seeForm() {
        const formAddMood = document.getElementById(`${styles.formContainer}`)
        formAddMood.style.display = 'block'

        const buttonSeeForm = document.getElementById(`${styles.buttonAddMood}`)
        buttonSeeForm.style.display = 'none'
    }

    function hiddenForm() {
        const formAddMood = document.getElementById(`${styles.formContainer}`)
        formAddMood.style.display = 'none' 

        const buttonSeeForm = document.getElementById(`${styles.buttonAddMood}`)
        buttonSeeForm.style.display = 'block'
    }

    return(
        <div>
            <div id={styles.buttonAddMood}>
                <button onClick={seeForm}>add mood</button>
            </div>
            <div id={styles.formContainer}>
                <h2>create moods</h2>
                <form onSubmit={addMood}>
                    <div>
                    <input type="text" placeholder="type your mood" />
                    </div>
                    <div>
                        <input type="text" placeholder="type link of image mood" />
                    </div>
                    <div>
                        <input id={styles.buttonAdd} type="submit" value="add"/>
                        <button id={styles.buttonClose} onClick={hiddenForm}>close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form