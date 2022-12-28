import React from 'react';
import './App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault()

    console.log("Method One")
    console.log("username : "+event.target[0].value)
    console.log("password : "+event.target[1].value)

    console.log("Method Two")
    console.log("username : "+event.target.elements.username.value)
    console.log("password : "+event.target.password.value)

    console.log("Method Three")
    console.log("username : "+event.target.elements.username.value)
    console.log("password : "+event.target.password.value)

  }

  return (
    

  <form onSubmit={handleSubmit}>
    <div className='main-cont'>
        <label>
          Name:
          <input
            type="text"
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
          />
        </label>
        <button type="submit">Submit</button>
        </div>
      </form>
 
  );
}

export default App;
