import React, { useState, useEffect } from 'react'
import firebase from '../config/firebase'
import dateToFormatString from '../Util'
// import Chats from './Chats'


const Message = ()=>{
    const [messages, setMessages] = useState(null)
    
    useEffect(() => {
            
            firebase.firestore().collection('messages').orderBy("createAt", "desc")
                .onSnapshot((snapshot) => {
                    const addMessages = snapshot.docs.map(doc => {
                        return doc.data()
                    })
                    setMessages(addMessages)
            })
    }, [messages])
    
    return (
        <>
            {messages && 
            
                (<table>
                    <tbody>
                    
                    {messages.map((value) => {
                        return (
                            <React.Fragment>
                                <tr>
                                    <th>テキスト:{value.content}</th>
                                    <br></br>
                                    <td>ユーザー名:{value.user}</td>
                                    
                                    <td>作成日：{dateToFormatString(value.createAt.toDate(), '%YYYY%年%MM%月%DD%日 (%w%) %HH%時%mm%分%ss%秒')}</td>
                                    
                                </tr>
                            </React.Fragment>
                        )
                    })}
                    </tbody>
                    
                </table>)
            
            }
                
            
        </>
    )
}

export default Message