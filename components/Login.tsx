// Import necessary modules
'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

// Define the Login component
const Login = () => {
// Render a login form with the ChatGPT logo and a "Sign In" button that triggers the Google authentication flow
    return (
      <div className="bg-[#009F77] h-screen flex flex-col items-center justify-center text-center">
        <Image
        src={'https://justcreative.com/wp-content/uploads/2023/02/chatgpt-logo.png.webp'}
        width={300}
        height = {300}
        alt="logo"
        />
        <button onClick={() => signIn('google')} className='text-white font-bold text-3xl animate-pulse'>Sign In</button>
      </div>
    )
}

// Export the Login component
export default Login