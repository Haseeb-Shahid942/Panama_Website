import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone()
  const hostname = (request.headers.get('host') || '').split(':')[0].toLowerCase()

  // Sirf asli domain (non-www) ko www par redirect karo.
  // Health check, preview aur internal hosts ko kabhi redirect nahi karna.
  if (hostname === 'panamatravel.co.uk') {
    url.host = 'www.panamatravel.co.uk'
    url.port = ''
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|svgs|imgs|public).*)',
  ],
}
