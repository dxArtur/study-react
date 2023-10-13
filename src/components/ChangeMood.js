function ButtonChangeMood() {

    function changeMood() {
        return(
            console.log('go to little nap')
        )
    }

    return(
        <>
            <button onClick={changeMood}>change mood</button>
        </>
    )
}

export default ButtonChangeMood