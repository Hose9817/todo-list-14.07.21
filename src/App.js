import './App.css';
import {v4 as uuid} from 'uuid';
import {useState} from "react";
import ListItem from "./ListItem";
import Header from "./Header";

function App() {

    const initialState = [
        {id: uuid(), title: 'Alice', status: false},
        {id: uuid(), title: 'John', status: false},
        {id: uuid(), title: 'Rachel', status: false},
        {id: uuid(), title: 'Steve', status: false}
    ];

    const [name, setName] = useState(initialState)

    const deleteName = (id) => {
        const newList = name.filter(el => {
                return el.id !== id
            }
        )
        setName(newList)
    }

    const moveName = (index, nextIndex) => {
        const newList = [...name];
        const currentName = newList[index];
        newList[index] = newList[nextIndex];
        newList[nextIndex] = currentName;
        setName(newList)
    }

    const createNewName = (inputName) => {
        const newList = [...name, {id: uuid(), title: inputName, status: false}];
        setName(newList)
    }

    const done = (id) => {
        const newList = name.map(el => {
           return  el.id === id ? {...el, status: !el.status} : el;
        })
        setName(newList)
    }

    return (
        <div>

            <Header createNewName={createNewName} />

            <h3>{name.map((el, index) => <ListItem
                key={el.id}
                element={el}
                deleteName={deleteName}
                id={name.id}
                moveName={moveName}
                index={index}
                name={name}
                done={done}
            />)}</h3>


        </div>
    );
}

export default App;
