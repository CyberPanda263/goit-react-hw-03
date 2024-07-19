import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({name, number}) => {
   
        return (
            <>
                <div>
                    <p><BsFillPersonFill /> {name}</p>
                    <p><BsFillTelephoneFill /> {number}</p>
                </div>
                <div>
                    <button>Delet</button>
                </div>
            </>
        )
    }


export default Contact