- some important notes 

when we submit the form the table component wont reload and thinks no data is added so the newly added data wont show up. hence we must again fetch the data from db.json using useEffect and pass an empty dependency and then keep that data in userList using setUserList. 

to show toasts in table when we submit the form chat gpt first said to use the useLocation feature of react. but that makes things more complicated. to avoid that simply shift the handleSubmit from Form.jsx to app.jsx but it will look a bit different there it takes two parameters and does not have e.prevent default

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

    instead it is passed as a prop to form.jsx where it used inside onsubmit function. 

        async function onSubmit(e){
        e.preventDefault()
        await handleSubmit(user, editableUser);
        navigate("/table");
    }

    so basically in handlesubmit function we are checking if we want to edit a user or create a new user. and natuarally only one of them will be a truthy value and then the conditional blocks will manage everything

- datatables 

working with datatables is pretty simple and straigt forward. the documentation is pretty good. however we need 3 things a columns arraay which defines how each column will look like. and a data array (we can fetch data from the database and then keep the data in the data array.)

and then the actual datatable component. 

we can define what data will go in each column 

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

and that's it. it was a pretty insightful project. 