import {useState} from "react";

function Header(props){

    const [inputName, setInputName] = useState('')
    const [openHeader, setOpenHeader] = useState(false)

    const createButtonsHandler = () => {
        props.createNewName(inputName)
        setInputName('')
    }

    return(
        <div>
            <button onClick={() => setOpenHeader(!openHeader)}>Add new name</button>
            {openHeader &&
                <>
            <button onClick={createButtonsHandler}>Create new name</button>
            <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
                </>
            }

        </div>
    )
}

export default Header;