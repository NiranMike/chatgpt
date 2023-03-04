import React from 'react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import { useSession } from "next-auth/react"; 
import { useRouter } from "next/navigation"; 
import { db } from "../firebase"; 


const addChat = () => {
  const router = useRouter() // Getting the router object using the useRouter hook
  const {data: session } = useSession(); // Getting the session object using the useSession hook
  const createNewChat = async () => {
        const doc = await addDoc(
        collection(db, "users", session?.user?.email!, "chats"), { // Adding a new document to the chats collection for the current user
        userId: session?.user?.email!, // Adding the user's email as the userId
        createdAt: serverTimestamp() // Adding the current server timestamp as the createdAt value
        }
    );

    router.push(`/chat/${doc.id}`) // Navigating to the new chat page using the chat ID as the route parameter
    };
    
    
    
}

export default addChat