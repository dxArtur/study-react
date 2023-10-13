import Mood from "./Mood";
import ButtonChangeMood from "./ChangeMood";

function Emotional() {
    return(
        <>
            <Mood 
                imgSrc={"https://i.pinimg.com/originals/7c/97/91/7c9791e071f34410bb54f7bd829b25f8.jpg"}
                description={"working"}
            />
            <ButtonChangeMood />
        </>
    )
}

export default Emotional