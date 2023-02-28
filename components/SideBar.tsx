"use client"

import NewChat from "./NewChat"
import {useCollection } from "react-firebase-hooks/firestore"
import { useSession, signOut } from "next-auth/react"
import { collection, query, orderBy } from "firebase/firestore"
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModalSelection from "./ModalSelection";


const SideBar = () => {
  const {data: session } = useSession();
  const [chats] = useCollection(
    session && query(collection(db, "users", session.user?.email!, "chats"),
    orderBy("createdAt", "desc"))
  );
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
              <div>
                  {/* NewChat */}
                  <NewChat />
                  <div className='hidden sm:inline'>
                      {/* ModelSelection */}
                      <ModalSelection />
                  </div>

                  {/* Map through the Chat Rows */}
                  {chats?.docs.map(chat => (
                    <ChatRow key={chat.id} id={chat.id} />
                  ))}
                </div>
        </div>
      {session &&
        <img 
          onClick={()=>signOut()}
          src={session.user?.image!} alt="profile pic"
          className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'
      />}
    </div>
  )
}

export default SideBar