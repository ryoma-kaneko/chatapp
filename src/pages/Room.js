//チャット画面
import React from 'react'
import firebase from '../config/firebase'
import { Message , Chats} from './index'

const Room = () => {
    
    return (
        <>
            <h1>Room</h1>
            <h2>こんにちわ〇〇さん</h2>
                <Message />
                <Chats />
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Room