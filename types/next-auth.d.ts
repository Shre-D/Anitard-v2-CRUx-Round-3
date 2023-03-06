import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      image: string | undefined
      name: ReactNode
      email:string
      /** The user's id */
      id:number|null|undefined|unknown
      /**The provider's name */
      provider:string|null|undefined|unknown
    }
  }
}