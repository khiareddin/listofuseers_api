import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./components/UserList";

function App() {
    const [listOfUSer, setListOfUSer] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((listOfUSer) => setListOfUSer(listOfUSer.data))
            .catch((err) => console.log(err));

    });

    return (
        <div className="App">
            <h1 style={{ color: "Highlight" }}>list of users</h1>
            <UserList listOfUSer={listOfUSer}/>
        </div>
    );
}

export default App;
