import React, { useState, useEffect } from 'react'
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"; // Importing icons from Heroicons
import Link from 'next/link'; // Importing Link component from Next.js
import { usePathname, useRouter } from 'next/navigation'; // Importing hooks from Next.js for working with routes
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

type Props = {
  id: string;
}

const ChatRow = ({ id }: Props) => {
    const pathname = usePathname() // Getting the current pathname using the usePathname hook
    const router = useRouter() // Getting the router object using the useRouter hook
    const { data: session } = useSession();
    const [active, setActive] = useState(false)

    const [messages] = useCollection(
      query(collection(db, "users", session?.user?.email!, "chats", id, 'messages'),orderBy("createdAt", "asc"))
    );

    useEffect(() => {
      if(!pathname) return;
      setActive(pathname.includes(id));
    }, [pathname])

    const removeChat = async () =>{
      await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
      router.replace("/")
    }

  return (
      <Link href={`/chat/${id}`} className={`chartRow justify-center ${active && "bg-gray-700/50"}`}> {/* Creating a link to the chat with the specified id */}
          <ChatBubbleLeftIcon className="h-5 w-5" /> {/* Displaying the ChatBubbleLeftIcon */}
          <p className='flex-1 hidden md:inline-flex truncate'>
            {messages?.docs[0]?.data().text || 'New Chat'}
          </p>
          <TrashIcon 
          onClick={removeChat}
          className='h-5 w-5 text-gray-700 hover:text-red-700' /> {/* Displaying the TrashIcon */}
      </Link>
  ) 
}

export default ChatRow // Exporting the ChatRow component
