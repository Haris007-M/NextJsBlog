import Image from 'next/image'
import Link from 'next/link'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
        <Image src="/logo.png" width={40} height={40} alt={''} className="mx-auto"></Image>
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">Haris Blog</h1>
        </Link>
        <p className='text-slate-300'>Welcome to Haris Blog</p>
      </div>
    </header>
  )
  const footer = (
    <footer>
      <div className='border-t border-slate-500 text-center text-slate-400 py-6 my-6'>
        <h4 >Developed by Haris</h4>
      </div>
    </footer>
  )
  return (
    <html>
      <head />
      <body>
        <div className='mx-auto max-w-2xl px-6'>
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
