import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null); 

    const handleLoginWithGoogle = ()=>{
        console.log('clk');
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
            console.log(result);
            
        }).catch((error)=>{
            console.log(error);
        })
    }

    const handleSingOut = ()=>{
        signOut(auth).then(()=>{
            setUser(null)
            console.log('Success signout')
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div>
            <img src={user?.photoURL} alt="" />
            <h2>{user?.displayName}</h2>
            <p>{user?.email}</p>
            
            {
                user? <button onClick={handleSingOut}>Sing out</button> : <button onClick={handleLoginWithGoogle}>Login With Google</button>
            }
        </div>
    );
};

export default Login;