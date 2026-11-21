import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn&rsquo;t find the page you&rsquo;re looking for.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors"
          >
            Go Back Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Need help? <Link href="/contact-us/" className="text-primary hover:underline">Contact us</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}