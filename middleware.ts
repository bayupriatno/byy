import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient({ req, res })
  const { data } = await supabase.auth.getSession()

  const protectedPaths = ['/', '/result']
  const path = req.nextUrl.pathname

  if (protectedPaths.includes(path) && !data.session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}