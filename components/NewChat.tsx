"use client"; 

import { PlusIcon } from "@heroicons/react/24/solid" 
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import { useSession } from "next-auth/react"; 
import { useRouter } from "next/navigation"; 
import { db } from "../firebase"; // Importing the Firebase configuration

const NewChat = () => {
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
  return (
    <div onClick={createNewChat} className="border-gray-700 border chartRow items-center justify-center"> {/* Creating a clickable div to create a new chat */}
        <PlusIcon className="h-4 w-4" /> {/* Displaying the PlusIcon */}
        <p>New Chat</p> {/* Displaying the text for creating a new chat */}
    </div>
  )
}

export default NewChat // Exporting the NewChat component
