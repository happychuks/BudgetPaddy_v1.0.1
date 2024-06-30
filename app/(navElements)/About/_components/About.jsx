import React from "react";

export default function About() {
  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-8 md:pt-12 items-center flex-col text-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-xl mb-6">
        Welcome to BudgetPaddy! We're a team of passionate individuals dedicated
        to helping you manage your finances effectively.
      </p>
      <p className="text-xl mb-6">
        {" "}
        While we cannot ignore the present economic crises, the need to plan and
        manage one's finances is key to maintaining financial stability.
        BudgetPaddy will help do just that.
      </p>

      <p className="text-xl mb-6">
        Our mission is to provide you with the tools and resources you need to
        achieve financial stability and success. With this tool, you can create
        Budgets and log expenses made for each budget. You can also view summary of your expenses and budgets on the dashboard.
      </p>
      <p className="text-xl mb-6">You can also follow us on:</p>
      <ul className="list-none mb-6">
        <li><a href="https://x.com/code_with_Felix" target="_blank" className="text-blue-600 hover:text-blue-800">Twitter (X)</a></li>
        <li><a href="https://www.linkedin.com/in/happyfelixchukwuma/" target="_blank" className="text-blue-600 hover:text-blue-800">LinkedIn</a></li>
        <li><a href="https://github.com/happychuks" target="_blank" className="text-blue-600 hover:text-blue-800">Github</a></li>
      </ul>
      <p className="text-xl mb-6">Checkout the Github repository for this project: <a href="https://github.com/happychuks/BudgetPaddy_v1.0.1/" target="_blank" className="text-blue-600 hover:text-blue-800">Source Code</a></p>
    </div>
  );
}
