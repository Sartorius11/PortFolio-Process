import { Link } from 'react-router-dom'; 

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-start">
            <span className="ml-2 font-semibold text-xl">Fernando Sartorius</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Sobre mí</Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
