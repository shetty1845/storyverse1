import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-300">© {new Date().getFullYear()} StoryVerse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
