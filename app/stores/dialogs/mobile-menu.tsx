import { create } from 'zustand'


type Props = {
  isOpen: boolean
  changeOpenState: (state: boolean) => void
}



const useMobileMenu = create<Props>()((set) => ({
  isOpen: false,
  changeOpenState: (state) => set({ isOpen: state })
}))

export default useMobileMenu
