import { Inter,Montserrat } from 'next/font/google'
import { GalleryContextProvider } from '@/context/Gallery_Context'
import Footer from '@/client/components/common/Footer'
import "./cssreset.css"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets:['latin']});

export const metadata = {
  title: 'The Wedding Friends',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={montserrat.className}>
        <div className='custom-scrollbar'>
          <GalleryContextProvider>
            {children}
          </GalleryContextProvider>
        </div>
        <div id="footer mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  )
}
