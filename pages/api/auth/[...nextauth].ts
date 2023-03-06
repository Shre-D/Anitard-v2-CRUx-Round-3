import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
        session.user.provider = token.provider;
      }
      return session;
    },
    jwt: async ({ user, token,account }) => {
      if (user) {
        token.uid = user.id;
        token.provider=account?.provider;
      }
      return token;
    },
  },
  }
)