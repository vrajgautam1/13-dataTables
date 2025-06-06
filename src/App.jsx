import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Table from "./pages/Table";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [userList, setUserList] = useState([]);
    const [user, setUser] = useState({});
    const [editableUser, setEditableUser] = useState({});
    const url = "http://localhost:3000/user";

    

    useEffect(() => {
        async function fetchUserList() {
        try {
            let res = await axios.get(url);
            setUserList(res.data);
        } catch (error) {
            console.log(error.message);
        }
    }
        fetchUserList();
    }, []); //need to pass an empty dependency array

    async function handleSubmit(user, editableUser) {
        try {
            if (editableUser && editableUser.id) {
                await axios.put(url + `/${editableUser.id}`, user);
                console.log("user updated in database");
                toast.success("User edited Successfully");
            } else {
                await axios.post(url, user);
                console.log("user added in database");
                toast.success("User added successfully");
            }
            setUser({});
            setEditableUser({});
            await fetchUserList();
        } catch (error) {
            console.log("Error in form submit:", error.message);
        }
    }

    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/form"
                    element={
                        <Form
                            userList={userList}
                            setUserList={setUserList}
                            editableUser={editableUser}
                            setEditableUser={setEditableUser}
                            handleSubmit={handleSubmit}
                            user={user}
                            setUser={setUser}
                        />
                    }
                />
                <Route
                    path="/table"
                    element={
                        <Table
                            userList={userList}
                            setUserList={setUserList}
                            editableUser={editableUser}
                            setEditableUser={setEditableUser}
                        />
                    }
                />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Footer />
        </div>
    );
}

export default App;
