import React from 'react';
import { motion } from 'framer-motion';

/**
 * Promotional data for product timeline.
 */
const products = [
  {
    id: 1,
    title: 'Half Sleeve Shorts Co-ord Set',
    offers: ['Buy 1 @ Rs. 399', 'Buy 2 @ Rs. 699']
  },
  {
    id: 2,
    title: 'Full Sleeve Pant Co-ord Set',
    offers: ['Buy 1 @ Rs. 599', 'Buy 2 @ Rs. 999']
  },
  {
    id: 3,
    title: 'Winter Co-ord Set',
    offers: ['Buy 1 @ Rs. 699', 'Buy 2 @ Rs. 1199']
  }
];

/**
 * ProductTimeline component displaying products with promotional offers in a timeline layout.
 * @returns {JSX.Element}
 */
const ProductTimeline = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8 text-center">Our Promotions</h3>
        <div className="relative">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="mb-8 p-6 bg-white rounded shadow cursor-pointer"
            >
              <h4 className="text-xl font-semibold mb-2">{product.title}</h4>
              <ul className="list-disc list-inside">
                {product.offers.map((offer, i) => (
                  <li key={i} className="text-gray-700">{offer}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTimeline;