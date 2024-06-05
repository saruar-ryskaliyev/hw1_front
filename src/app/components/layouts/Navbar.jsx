import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
