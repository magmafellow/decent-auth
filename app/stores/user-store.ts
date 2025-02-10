import { useSession } from 'next-auth/react'
import { create } from 'zustand'
import { OriginalUser } from '@/app/types/user'
import { getUserFromDbById, getUserFromDbByUsername } from '@/app/lib/actions/user'



interface IUserStore {
  loading: boolean
  user: OriginalUser | null

  fetchGetUser: (userId: string | undefined) => Promise<void>
}

// Consume a full user object from DataBase. With minimal session info. For Client-Side.
//  The best option is to use server-side auth() to get the user object.
const useUser = create<IUserStore>()((set) => ({
  loading: false,
  user: null,
  fetchGetUser: async (userId) => {
    set({ loading: true })
    if (userId === undefined) {
      console.log('userId is UNDEFINED in fetchGetUser()')
      set({ user: null })
      return
    }
    const fetchedUser = await getUserFromDbById(userId)
    set({ user: fetchedUser, loading: false })
    console.log('settings fetched user')
  }
}))

export default useUser
