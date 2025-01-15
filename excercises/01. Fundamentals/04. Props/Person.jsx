const Person = ({name, age}) => {
    return (
      <div>
          <h1 className="font-bold">User</h1>
          <h2>Name: {name}</h2>
          <p>Age: {age}</p>
      </div>
    )
  }
  
  export default Person