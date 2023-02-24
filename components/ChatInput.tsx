"use client"

import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { useSession } from "next-auth/react";
import { type } from 'os';
import { useState } from "react";

type Props = {
  chatId: string
}

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("")
  const { data: session } = useSession();
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form className="p-5 space-x-5 flex">
        <input
          className=' focus:outline-none
          disabled:cursor-not-allowed disabled:text-gray-300 
          bg-transparent flex-1 '
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Enter message..."
        />
        <button
          disabled={!prompt || !session}
          className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded 
          disabled:bg-gray-300 disabled:cursor-not-allowed'
          type="submit">
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>

        <div>
          {/* ModelSelection */}
        </div>
      </form>
    </div>
  )
}

export default ChatInput