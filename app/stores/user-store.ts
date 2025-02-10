import { useSession } from 'next-auth/react'
import { create } from 'zustand'
import { OriginalUser } from '@/app/types/user'
import { getUserFromDbByUsername } from '../lib/actions/user'



interface IUserStore {
  user: OriginalUser | null

  fetchGetUser: () => void
}


const useUser = create<IUserStore>()((set, get) => ({


  user: null,
  fetchGetUser: async () => {
    const { data } = useSession()
    const fetchedUser = await getUserFromDbByUsername(data?.user.username!)
    set({ user: fetchedUser })
  }
  
}))

export default useUser
