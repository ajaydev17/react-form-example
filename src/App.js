import React, { useState } from "react";
import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
    const [userList, setUserList] = useState([]);

    const addUserHandler = (username, age) => {
        setUserList((prevUserList) => {
            return [
                ...prevUserList,
                { username: username, age: age, id: Math.random().toString() },
            ];
        });
    };
    return (
        <div>
            <AddUsers onAddUser={addUserHandler} />
            {userList.length > 0 && <UsersList users={userList} />}
        </div>
    );
}

export default App;
