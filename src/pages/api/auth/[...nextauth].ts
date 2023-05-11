import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string
    }),
    GoogleProvider({  
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async jwt({ user, token, account }) {
      if (account) {
        token.uid = user.id
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      session!.accessToken = token.accessToken
      session!.uid = token.uid
      return session
    }
  }
})