import React from 'react';
import  './assets/css/login.css';
import { auth, provider } from '../firebase';
import { useStateValue } from './StateProvider';

const Login = () => {
    const [{}, dispatch] = useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider).then(result=>{
            var credential = result.credential;
            const photoURL = `${result.user.photoURL}?access_token=${credential.accessToken}`;
            dispatch({
                type:"SET_USER",
                user:{
                    displayName:result.user.displayName,
                    photoURL:photoURL
                }
            })
        }).catch(error => console.log(error))
    }
  return (
    <div className='loginWrapper'>
        <div className="login">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png?w=100%&h=512'/>
            <h2>Sign in with Facebook</h2>
            <button 
            onClick={signIn}
            >Login with Facebook</button>
        </div>
    </div>
  )
}

export default Login