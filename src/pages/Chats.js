import React, { useState } from 'react'
import firebase from '../config/firebase'
import * as admin from "firebase-admin";

admin.initializeApp();
const Chats = (prpps) =>{
    // サーバー時間の取得
    //const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const [value, setValue] = useState(null)

    const handleSubmit = (e) => {
            e.preventDefault()
            const database = firebase.firestore()
            database.settings({
                timestampsInSnapshots: true
            })
            database.collection('messages').add({
                "content": value, "user": "user", "createAt": new Date()
            })
            setValue("")
            //alert("jdkadf")
        }
        return (
            <>
            <form onSubmit={handleSubmit}>
                <textarea row="10" cols="60"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">追加する</button>
            </form>
            </>
        )

}

export default Chats