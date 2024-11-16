import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectToDb } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }: { session: any }) {
      return session;
    },
    async signIn({ profile }: any) {
      try {
        await connectToDb();

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
