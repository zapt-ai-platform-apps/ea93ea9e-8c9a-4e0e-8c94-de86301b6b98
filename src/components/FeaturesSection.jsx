import React from 'react';

/**
 * FeaturesSection component highlighting product features.
 * @returns {JSX.Element}
 */
const FeaturesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">Product Features</h3>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4">
          <li className="p-4 border rounded bg-gray-50">100% Organic Cotton</li>
          <li className="p-4 border rounded bg-gray-50">Scratch-Free Labeling</li>
          <li className="p-4 border rounded bg-gray-50">Anti-Microbial Finish</li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;