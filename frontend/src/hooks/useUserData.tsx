import { redirect } from 'react-router-dom'
import { create } from 'zustand'

const apiURL = import.meta.env.PUBLIC_BACKEND_URL;

interface State {
  permissions: string[]
  addPermission: (perm: string) => void
  clearPermissions: () => void
  recoverPermissions: () => Promise<void>
}

const useUserData = create<State>((set, get) => ({
  permissions: [],

  // Saves the permission to the state if it doesn't already exist
  addPermission: (perm: string) =>
    set((state) => (
      state.permissions.includes(perm)
      ? state 
      : {permissions: [...state.permissions, perm]
    })),

  clearPermissions: () =>
    set(() => ({
      permissions: []
    })),

  // Recovers permissions from the backend
    recoverPermissions: async () => {
    const token = localStorage.getItem('token')

    if (token) {
      try {
      const response = await fetch(`${apiURL}/api/auth/permissions`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })

      const data = await response.json()
      const permissions = data.permissions || []

      if (response.status === 401) {
        localStorage.removeItem('token')
        redirect('/login')
      }

      permissions.forEach((perm: string) => {
        get().addPermission(perm)
      })

    } catch (err) {
      console.error('Error recovering permissions:', err)
    }
    } else {
      redirect('/login')
    }
  }
}))

export default useUserData
