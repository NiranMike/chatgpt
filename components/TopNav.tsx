"use client"
import React,{useState} from 'react'
import { PlusIcon, Bars3Icon } from "@heroicons/react/24/solid" 
import { useSession } from "next-auth/react"; 
import { useRouter } from "next/navigation"; 
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";  
import SideBar from './SideBar'


const TopNav = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    const router = useRouter() // Getting the router object using the useRouter hook
    const { data: session } = useSession(); // Getting the session object using the useSession hook
    
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

        <div className=' py-2 fixed w-full left-0 px-4 right-0 bg-[#434654] border-[#434654]  '>
            <div className='flex justify-between items-center'>
                <Bars3Icon onClick={()=> setOpenSideBar(!openSideBar)} className='text-white' width={32} />
             {/* Creating a clickable div to create a new chat */}
                <PlusIcon width={32} onClick={createNewChat} className="h-4 w-4 text-white" /> {/* Displaying the PlusIcon */}
            </div>
            <div>
                {
                    openSideBar && (
                        <SideBar />
                    )
                }
            </div>
                
        </div>
    )
}

export default TopNav