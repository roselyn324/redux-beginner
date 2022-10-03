import React from 'react';
//grab the value of the state and be able to display it our component using useSElector
import { useSelector } from 'react-redux';


function Profile() {
    //to access use state
    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value)
  return (
    <div style={{ color: themeColor }}>
        {/*over here where we display the info of our state. */}
        <h1>Profile Page</h1>
        <p>Name: {user.name} </p>
        <p>Age: {user.age} </p>
        <p>Email: {user.email} </p>
    </div>
  )
}

export default Profile