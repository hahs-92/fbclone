import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  theme: 'dark',
  debug: process.env.NODE_ENV === 'development',
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
    // ...add more providers here
  ],
})