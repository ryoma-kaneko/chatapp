import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCaNFgs2RIoS8YURAdmlN42UiJrVrkLvSk",
    authDomain: "chat-app02.firebaseapp.com",
    databaseURL: "https://chat-app02.firebaseio.com",
    projectId: "chat-app02",
    storageBucket: "chat-app02.appspot.com",
    messagingSenderId: "10675771342",
    appId: "1:10675771342:web:f88ae490317c3e9dbcfd9f"
}

firebase.initializeApp(firebaseConfig)

export default firebase