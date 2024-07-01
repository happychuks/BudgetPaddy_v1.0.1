import React from 'react';

const Doc = () => {
  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-8 md:pt-12">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Documentation</h1>
      <p className="text-xl mb-6">Find helpful resources and guides to get the most out of BudgetPaddy.</p>
      <ul className="list-none mb-6">
        <li><a href="https://github.com/happychuks/BudgetPaddy_v1.0.1/blob/main/README.md" target='_blank' className="text-blue-600 hover:text-blue-800">User Manual</a></li>
        <li><a href="#" className="text-blue-600 hover:text-blue-800">API Documentation</a></li>
        <li><a href="#" className="text-blue-600 hover:text-blue-800">FAQs</a></li>
      </ul>
      <p className="text-xl mb-6">Checkout the Github repository for this project: <a href="https://github.com/happychuks/BudgetPaddy_v1.0.1/" target="_blank" className="text-blue-600 hover:text-blue-800">Source Code</a></p>
    </div>
  );
};

export default Doc;