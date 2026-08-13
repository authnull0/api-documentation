import { Sidebar } from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="site-pad" style={{ paddingTop: 60, display: 'flex', minHeight: 'calc(100vh - 60px)' }}>
        <Sidebar />
        <main style={{ flex: 1, minWidth: 0, overflowX: 'hidden' }}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
