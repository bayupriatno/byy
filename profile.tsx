import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function ProfilePage() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (!data.session) router.push('/login')
      else setEmail(data.session.user.email)
    }
    getSession()
  }, [])

  const logout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Profile</h1>
      <p>Email: {email}</p>
      <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded mt-4">
        Logout
      </button>
    </main>
  )
}