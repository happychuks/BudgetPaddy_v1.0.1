import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-8 md:pt-12">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Get in Touch</h1>
      <p className="text-xl mb-6">Have a question or need support? Send an email to us <a href="mailto:happychukwuma@gmail.com" className="font-bold text-blue-600" style={{ textDecoration: 'underline solid #000' }}>Here</a>.</p>
      <p className="text-xl mb-6">You can also follow us on:</p>
      <ul className="list-none mb-6">
        <li><a href="https://x.com/code_with_Felix" target="_blank" className="text-blue-600 hover:text-blue-800">Twitter (X)</a></li>
        <li><a href="https://www.linkedin.com/in/happyfelixchukwuma/" target="_blank" className="text-blue-600 hover:text-blue-800">LinkedIn</a></li>
        <li><a href="https://github.com/happychuks" target="_blank" className="text-blue-600 hover:text-blue-800">Github</a></li>
      </ul>
    </div>
  );
};

export default Contact;