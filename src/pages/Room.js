//チャット画面

import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import firebase from '../config/firebase'


const Room = () => {
    const [messages,setMessages] = useState(null)
    const handleSubmit = e => {
        e.preventDefault()
    
    }
    useEffect(() => {
    firebase.firestore().collection('messages')
                    .onSnapshot((snapshot) => {
                        const messages = snapshot.docs.map(doc => {
                            return doc.data()
                        })
        
                        setMessages(messages)
                    })
            }, [])

    

    return (
        <>
            <h1>Room</h1>
            <ul>
                
            </ul>
            <form onSubmit = {handleSubmit}>
                <input 
                    type = 'text'
                    value={messages}
                    onChange = {
                        e => setMessages(e.target.value)
                    }
                />
                <button type = "submit">送信</button>
            </form>
            <hr />
            <Link to="/login">Login</Link>
            <Link to = "/signup">SignUp</Link>
            <button onClick={() => firebase.auth().signOut()}>LOGOUT</button>
        </>

    )
}

export default Room