import React,{useState,useEffect} from 'react'
import firebase from './config/firebase'

const AuthContext = React.createContext()
//ログイン、ログアウト時に必ず呼び出される
const AuthProvider = ({children})=>{
    //userには、ログインしてきたユーザーのオブジェクトが入ってくる
    const [user,setUser] = useState(null)
    
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        })
    },[])

    return (
        <AuthContext.Provider value = {user}>
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthContext,
    AuthProvider
}