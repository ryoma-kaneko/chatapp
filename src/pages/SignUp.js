//新規登録画面
import React, { useState, useContext} from 'react'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'
import { Redirect } from 'react-router-dom'

const SignUp = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(err => {
            alert(err)
        })
    }
    const user = useContext(AuthContext)
    if (user) {
        return <Redirect to="/login" />
    }

    return (
        <div>
            <h1>新規登録画面</h1>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email'
                        onChange = {
                            (e) => {
                                setEmail(e.target.value)
                            }
                        }
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Password'
                        onChange = {
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        }
                    />
                </div>
                <button type='submit'>登録</button>
            </form>
        </div>
    )
}

export default SignUp