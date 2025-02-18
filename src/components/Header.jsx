import React from 'react';

/**
 * Header component displaying the Sara Hug logo, tagline, navigation, and search bar.
 * @returns {JSX.Element}
 */
const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between bg-lightBlue p-4 box-border">
      <div className="flex items-center gap-4">
        <img 
          src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=100&height=100" 
          alt="Sara Hug Logo" 
          className="w-16 h-16"
        />
        <div>
          <h1 className="text-3xl font-bold">Sara Hug</h1>
          <p className="text-sm italic">Wrapped With Mother’s Love.</p>
        </div>
      </div>
      <nav className="mt-4 md:mt-0">
        <ul className="flex gap-4">
          <li className="cursor-pointer font-medium">Half Sleeve Shorts Co-ord Set</li>
          <li className="cursor-pointer font-medium">Full Sleeve Pant Co-ord Set</li>
          <li className="cursor-pointer font-medium">Winter Co-ord Set</li>
        </ul>
      </nav>
      <div className="mt-4 md:mt-0">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="box-border p-2 border rounded"
        />
      </div>
    </header>
  );
};

export default Header;