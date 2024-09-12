import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import prisma from "./db";

export const NEXTAUTH_CONFIG = {
  providers: [
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
      console.log("signIn", user, account, profile);

      // If you need to perform actions based on sign-in, do it here.
      // However, it's better to store access token in the `jwt` callback.

      return true; // Allow the sign-in process to continue
    },

    async jwt({ token, account }: any) {
      console.log("JWT", token, account);
      if (account) {
        token.accessToken = account.access_token;

        // Store user details including the access token in your database.
        await prisma.user.upsert({
          where: { email: token.email },
          update: { accessToken: token.accessToken },
          create: {
            username: token.name,
            email: token.email,
            accessToken: token.accessToken,
          },
        });
      }
      console.log("jwt", token, account);
      return token;
    },

    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      console.log("session", session, token);
      return session;
    },

    async redirect({ url, baseUrl }: any) {
      console.log("redirect", url, baseUrl);
      return baseUrl;
    },

  }
}
