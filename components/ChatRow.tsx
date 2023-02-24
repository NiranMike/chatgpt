import React from 'react'
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"; // Importing icons from Heroicons
import Link from 'next/link'; // Importing Link component from Next.js
import { usePathname, useRouter } from 'next/navigation'; // Importing hooks from Next.js for working with routes

type Props = {
  id: string;
}

const ChatRow = ({ id }: Props) => {
    const pathname = usePathname() // Getting the current pathname using the usePathname hook
    const router = useRouter() // Getting the router object using the useRouter hook

  return (
      <Link href={`/chat/${id}`} className={`chartRow justify-center`}> {/* Creating a link to the chat with the specified id */}
          <ChatBubbleLeftIcon className="h-5 w-5" /> {/* Displaying the ChatBubbleLeftIcon */}
          <p className='flex-1 hidden md:inline-flex truncate'>New Chat</p> {/* Displaying the chat name */}
          <TrashIcon 
          className='h-5 w-5 text-gray-700 hover:text-red-700' /> {/* Displaying the TrashIcon */}
      </Link>
  ) 
}

export default ChatRow // Exporting the ChatRow component
