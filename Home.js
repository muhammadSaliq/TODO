import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const Home = () => {
    const [todos, settodos] = useState([]);
    const [inputvalue, setinputvalue] = useState("");

    const [upvalue, setdecupvalue] = useState([todos]);

    const handleclick = () => {
        settodos([...todos, inputvalue]);
        setinputvalue("");

    }

    const handleinput = (event) => {
        setinputvalue(event.target.value);

    }
    const updatetodo = () => {

        return(
<>
setdecupvalue(upvalue+1)
</>
        );
    }
    function handleDeleteClick(id) {
        const updatedTodos = todos.filter((_, i) => i !== id);
        settodos(updatedTodos);
      }

    return (
        <div>
            <h1>todo</h1>
            {inputvalue === "" ? <Alert variant="danger">Input todo</Alert>
                : <></>}

            <input type="text" value={inputvalue} onChange={handleinput} ></input>
            {todos.id}
            <Button variant="success" size="sm" disabled={inputvalue === ""} onClick={handleclick} >add Todo</Button>
            <button >dec</button>
            <div>{todos.map((item,index) => {
                return (
                    <div>
                <span key={item.id}>{item}</span><button onClick={() => () => handleDeleteClick(index)}>del</button>
                <button>edit</button>
                </div>
                )
            })}</div>
        </div>

    );
}

export default Home;