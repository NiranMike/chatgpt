import SideBar from "../components/SideBar"
import TopNav from "../components/TopNav"
import { getServerSession } from "next-auth"

import "../styles/globals.css"
import { SessionProvider } from "../components/SessionProvider"
import { authOptions } from "../pages/api/auth/[...nextauth]"
import Login from "../components/Login"
import ClientProvider from "../components/ClientProvider"

// RootLayout component receives a `children` prop that represents the content to be rendered
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  
  // Get the server-side session using `getServerSession` from NextAuth
  const session = await getServerSession(authOptions)
  
  return (
    <html>
      <head />
      <body>
        {/* SessionProvider component from our app that sets the session context */}
        <SessionProvider session={session}>
          {/* If there is no session, show the login page */}
          {
            !session ? (
              <Login />
            ) : (
              <>
               
                <div className='flex sm:hidden '>
                  <TopNav />
                </div>
                
                
                <div className="flex">
                  {/* Sidebar */}
                  <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                    <SideBar />
                  </div>
                  
                  {/* ClientProvider - Notification */}

                  <ClientProvider />
                  {/* Main content area */}
                  <div className="bg-[#343541] flex-1">
                    {children}
                  </div>
                </div>
              </>
                
            )
          }
          
        </SessionProvider>
        
        
      </body>
    </html>
  )
}
