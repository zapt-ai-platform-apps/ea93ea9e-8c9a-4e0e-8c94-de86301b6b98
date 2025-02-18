import React from 'react';

/**
 * Footer component displaying social media links, customer service, and newsletter signup.
 * @returns {JSX.Element}
 */
const Footer = () => {
  return (
    <footer className="bg-lightBlue p-6 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-black font-medium">Customer Service: 1800-123-456</p>
          <p className="text-black font-medium">Email: support@sarahug.com</p>
        </div>
        <div className="mb-4 md:mb-0">
          <a href="https://instagram.com/SARAHUG_OFFICIAL" target="_blank" rel="noopener noreferrer" className="text-black underline">
            Instagram: @SARAHUG_OFFICIAL
          </a>
        </div>
        <div>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Newsletter Signup" 
              className="box-border p-2 border rounded"
            />
            <button type="submit" className="px-4 py-2 bg-pink-500 text-white rounded cursor-pointer">Subscribe</button>
          </form>
        </div>
      </div>
      <p className="text-center text-sm text-black mt-4">&copy; {new Date().getFullYear()} Sara Hug. All rights reserved.</p>
    </footer>
  );
};

export default Footer;