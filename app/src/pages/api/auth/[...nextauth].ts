import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

type ClientType = {
  clientId: string;
  clientSecret: string;
};

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    } as ClientType),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === 'google') {
        return true
      } else {
        return false
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET
  // 他の設定...
};

export default NextAuth(authOptions);
