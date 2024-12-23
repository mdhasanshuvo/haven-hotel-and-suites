import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        
        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <p className="text-sm">Haven Hotel & Suites, Downtown Street, City, Country</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Email: info@havenhotel.com</p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/rooms" className="text-sm hover:text-gray-400">Rooms</a></li>
            <li><a href="/about" className="text-sm hover:text-gray-400">About Us</a></li>
            <li><a href="/booking" className="text-sm hover:text-gray-400">Book Now</a></li>
            <li><a href="/privacy-policy" className="text-sm hover:text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-xl hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="text-xl hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="text-xl hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-gray-400"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Stay Updated</h3>
          <p className="text-sm">Sign up for exclusive offers and updates!</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="p-2 w-full rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
        
      </div>

      <div className="bg-gray-900 py-4 text-center text-sm mt-8">
        <p>&copy; 2024 Haven Hotel & Suites. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
