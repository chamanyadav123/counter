import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    const handleDecrement = (event) => {
        if (count === 0) {
            return;
        }

        setCount(count - 1);
    };

    const handleIncrement = () => {
        if (count === 10) return;
        setCount(count + 1);
    };

    useEffect(() => {
        if (count >= 0 && count <= 4) setColor("green");
        else if (count >= 5 && count <= 9) setColor("blue");
        else setColor("red");
    }, [count]);

    return ( <
        div className = "App" >
        <
        div className = "container" >
        <
        button onClick = { handleDecrement } > - < /button> <
        h1 className = { `color-${color}` } > { count } < /h1> <
        button onClick = { handleIncrement } > + < /button> < /
        div > <
        /div>
    );
}

export default App;