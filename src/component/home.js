import React, {useState, useEffect} from 'react';
import { auth, fs } from './config/firebase';
import { getDoc, getDocs, doc, setDoc, onSnapshot, collection } from 'firebase/firestore';
import Header from "./header"
import Footer from "./footer"
import Content from "./content"


export const Home = () => {
    function GetUserUid() {
        const [uid, setUid] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setUid(user.uid);
                }
            })
        }, [])
        return uid;
    }

    const uid = GetUserUid();

    function GetCurrentUser() {
        const [user, setUser] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    const userCollectionRef = doc(fs, 'tblUsers', user.uid);
                    const userSnapshot = await getDoc(userCollectionRef);
                    setUser(userSnapshot.data().FullName);
                } else {
                    setUser(null);
                }
            })
        }, [])
        return user;
    }
    const user = GetCurrentUser();

    return (
        <div> 
            <Header user={user}/>
            <Content />
            <Footer />
        </div>
    )
  }
  
  export default Home;