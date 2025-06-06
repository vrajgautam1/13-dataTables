import axios from "axios";
import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Table({ userList, setUserList, editableUser, setEditableUser }) {
    const navigate = useNavigate();
    const url = "http://localhost:3000/user";
    const ExpandedComponent = ({ data }) => (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    );

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
    }, []);

    async function handleDelete(id) {
       

        //-2
        try {
            await axios.delete(url + `/${id}`);
            console.log("user deleted");
            toast.info("user deleted successfully")
        } catch (error) {
            console.log(error.message);
            toast.error("❌ Failed to delete user");
        }

         //-1
        let updatedArray = userList.filter((u) => {
            return u.id !== id
        });

        //-3
        setUserList(updatedArray); //no need to destructre userList and then add inside an array. userList is already an array

    }

    function handleEdit(id) {
        const userToEdit = userList.find((u) => {
            return u.id === id;
        });

        setEditableUser(userToEdit);
        navigate("/form");
    }

    const columns = [
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Year",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "action",
            cell: (row) => {
                return (
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-sm btn-primary"
                            onClick={() => handleEdit(row.id)}
                        >
                            Edit
                        </button>

                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(row.id)}
                        >
                            Delete
                        </button>
                    </div>
                );
            },
        },
    ];

    const data = userList || [];

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
                pagination
                highlightOnHover
                striped
                responsive
                fixedHeader
                fixedHeaderScrollHeight="400px"
                persistTableHead
                pointerOnHover
                expandableRowsComponent={ExpandedComponent}
            />

        </>
    );
}

export default Table;
