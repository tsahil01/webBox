import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "./db";
import randomUsername from "./randomUsername";

export const NEXTAUTH_CONFIG = {
  providers: [
    CredentialsProvider({
      name: "Demo User",
      credentials: {},

      async authorize() {
        const newUsername = randomUsername();
        const user = await prisma.user.create({
          data: {
            username: newUsername,
            email: `${newUsername}@example.com`,
            provider: "credentials",
          }
        });

        if (user) {
          return { id: user.id, name: user.username, email: user.email };
        }

        return null;

      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account, profile }: any) {
      // console.log("signIn", user, account, profile);

      // If you need to perform actions based on sign-in, do it here.
      // However, it's better to store access token in the `jwt` callback.

      return true; // Allow the sign-in process to continue
    },

    async jwt({ token, account }: any) {
      // console.log("JWT", token, account);
      if (account) {
        token.accessToken = account.access_token;

        // Store user details including the access token in your database.
        const user = await prisma.user.upsert({
          where: { email: token.email },
          update: { accessToken: token.accessToken },
          create: {
            username: token.name,
            email: token.email,
            provider: account.provider,
            accessToken: token.accessToken,
          },
        });
        token.isAdmin = user.isAdmin;
        // console.log("user", user);

        if (account.provider == "credentials") {
          token.expires = Math.floor(Date.now() / 1000) + 1 * 60;
        }
      }
      // console.log("jwt", token, account);

      if (token.expires && Date.now() / 1000 > token.expires) {
        return null; // Return an empty token to signify it's expired
      }

      return token;
    },

    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      session.isAdmin = token.isAdmin;
      // console.log("session", session, token);

      if (token.expires && Date.now() / 1000 > token.expires) {
        return null; // Invalidate session if token is expired
      }

      return session;
    },

    async redirect({ url, baseUrl }: any) {
      // console.log("redirect", url, baseUrl);
      return baseUrl;
    },

  }
}
