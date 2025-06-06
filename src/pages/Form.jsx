import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form({editableUser, setEditableUser, handleSubmit, user, setUser}) {
    const navigate = useNavigate();
    const url = "http://localhost:3000/user";

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    async function onSubmit(e){
        e.preventDefault()
        await handleSubmit(user, editableUser);
        navigate("/table");
    }
   


    useEffect(() => {
        if (editableUser) {
            setUser(editableUser);
        }
    }, [editableUser]);

    return (
        <div>
            <form method="POST" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        className="form-control"
                        value={user.email || ""}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Your Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={user.name || ""}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
