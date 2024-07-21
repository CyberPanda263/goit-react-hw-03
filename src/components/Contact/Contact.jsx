import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({id, name, number, removeContact}) => {
   
        return (
            <>
                <div>
                    <p><BsFillPersonFill /> {name}</p>
                    <p><BsFillTelephoneFill /> {number}</p>
                </div>
                <div>
                    <button onClick={() => removeContact(id)}>Delet</button>
                </div>
            </>
        )
    }


export default Contact