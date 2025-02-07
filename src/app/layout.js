'use client'
// import { Inter } from 'next/font/google'
import '../../public/assets/scss/themes.scss';
import '../../public/assets/css/global.css'
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'BEX - M3',
//   description: 'Powered by M3 Technologies Pakistan',
// }

export default function RootLayout({ children }) {
  // useRequireAuth();
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  )
}
