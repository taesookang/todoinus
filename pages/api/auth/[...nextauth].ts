import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prisma from "../../../lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },

      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (user && compare(credentials.password, user.password)) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          // throw new Error
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        token.accessToken = user.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.

      const user = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      delete user.password;

      session.user = user;
      session.accessToken = token.accessToken;

      return session;
    },
    // async redirect({ url, baseUrl }) {
    //   // Allows relative callback URLs
    // if (url.startsWith("/")) return `${baseUrl}${url}`
    // // Allows callback URLs on the same origin
    // else if (new URL(url).origin === baseUrl) return url
    // return baseUrl
    // },
  },
};

export default NextAuth(authOptions);
