// This file exports a custom wrapper component called SessionProvider
// It receives two props: children and session.
// children is a ReactNode and will be the component to be wrapped by this provider.
// session is an object of type Session or null and will be passed to the Provider component.
'use client'

import { Session } from "next-auth"
import { SessionProvider as Provider } from "next-auth/react"
import { type } from "os"

type Props = {
    children: React.ReactNode;
    session: Session | null;
}

export function SessionProvider({children, session} : Props) {
// This function returns a Provider component that will wrap its children with a NextAuth session context.
// It receives two props: children and session.
// session will be passed down to the Provider as the session prop.
// children will be the component wrapped by this provider.
    return (
        <Provider session={session}>
            {children}
        </Provider>
    )
}