import React from 'react';

/**
 * MadeOnZaptBadge component that displays a non-removable badge.
 * @returns {JSX.Element}
 */
const MadeOnZaptBadge = () => {
  return (
    <div className="fixed bottom-2 left-2 bg-black text-white px-2 py-1 rounded cursor-pointer text-xs z-50">
      <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer">
        Made on ZAPT
      </a>
    </div>
  );
};

export default MadeOnZaptBadge;