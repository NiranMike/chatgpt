"use client"

import React from 'react'
import {useCollection} from "react-firebase-hooks/firestore"
import {useSession} from "next-auth/react"
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import Message from './Message'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'

type Props = {
  chatId: string
}

const Chat = ({ chatId }: Props) => {
  const {data: session } = useSession();
  const [messages, loading] = useCollection(session && query(
    collection(db, "users", session?.user?.email!, "chats", chatId, "messages"),
    orderBy("createdAt", "asc")
  ));

  return (
    <div className='flex-1 mt-[60px] overflow-y-auto overflow-x-hidden'>
      {
        messages?.empty && (
          <>
            <p className='mt-5 z-10 text-center text-white'>
              Type a prompt in below to get started
            </p>
            <ArrowDownCircleIcon className='h-10 sm:block hidden w-10 mx-auto mt-5 text-white animate-bounce'/>
          </>
        )
      }
      {
        loading && (
          <div className='animate-pulse text-center text-white'>
            <p>Loading Messages </p>
          </div>
        )
      }
      {messages?.docs.map((message)=>(
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  )
}

export default Chat