import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();
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
    // GitHub
    const handleSigninWithGithub = ()=>{
        signInWithPopup(auth, providerGithub)
        .then((res) => {
            setUser(res.user)
            console.log(res);
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
                user? <button onClick={handleSingOut}>Sing out</button> 
                : <>
                    <button style={{marginRight: '20px'}} onClick={handleLoginWithGoogle}>Signin With Google</button>
                    <button onClick={handleSigninWithGithub}>Signin With Github</button>
                </>
            }
        </div>
    );
};

export default Login;