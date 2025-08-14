export interface IChannel {
  id: string
  name: string
  slug: string
  description: string
  isVerified: boolean
  avatarUrl: string
  bannerUrl: string
  userId: string
  user: {
    id: string
    name: string
    email: string
    password: string
    createdAt: string
    updatedAt: string
    verificationToken: string
  }
  createdAt: string
  updatedAt: string
}
