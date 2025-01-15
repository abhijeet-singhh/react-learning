const UserList = () => {

    const users = [
        { "user_id": 1, "name": "John Doe", "age": 25 },
        { "id": 2, "name": "Jane Smith", "age": 30 },
        { "id": 3, "name": "Alice Lee", "age": 22 },
        { "id": 4, "name": "Bob White", "age": 28 },
        { "id": 5, "name": "Charlie Brown", "age": 35 }
    ]


    return (
        <div>
            {users.map(({ id, name, age }) => {
                return (<div key={id}>
                    <h2>Name: {name}</h2>
                    <h2>Age: {age}</h2>
                </div>)
            })}
        </div>
    )
}

export default UserList