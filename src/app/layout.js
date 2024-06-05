import './globals.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer'

export const metadata = {
  title: 'My Next.js App',
  description: 'A simple Next.js app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
