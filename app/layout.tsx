// import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harsh Verma',
  description: 'Personal Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">Harsh Verma</h1>
        </Link>
        <p className='text-slate-300'>Welcome to my tech blog. 👨‍💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className='border-t border-slate-500 mt-6 py-6 text-center text-slate-400'>
        <p>Developed by Harsh Verma</p>
      </div>
    </footer>
  )
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
