import React from 'react'

function Footer() {
  return (
    <footer class="bg-gray-100">
  <div class="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
    <div class="flex justify-center text-teal-600">
      <h1 className='text-primary'>BudgetPaddy</h1>
    </div>

    <p class="mx-auto mt-1 max-w-md text-center leading-relaxed text-gray-500">
      Manage your Expenses, Live a financially free life.
    </p>

    <ul class="mt-1 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="https://happyfelixchukwuma.netlify.app/" target='_blank'> About </a>
      </li>
           
      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="https://github.com/happychuks" target='_blank'> Projects </a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="https://medium.com/@happychukwuma" target='_blank'> Blog </a>
      </li>
    </ul>

    <ul class="mt-1 flex justify-center gap-6 md:gap-8">
    <li>
        <a
          href="https://github.com/happychuks"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:text-gray-700/75"
        >
          <span class="sr-only">GitHub</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="https://x.com/code_with_Felix"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:text-gray-700/75"
        >
          <span class="sr-only">Twitter</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            />
          </svg>
        </a>
      </li>   
      
      <li>
        <a
          href="https://www.linkedin.com/in/happyfelixchukwuma/"
          rel="noreferrer"
          target="_blank"
          class="text-gray-700 transition hover:text-gray-700/75"
        >
          <span class="sr-only">LinkedIn</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#8bb7f0" d="M1.5 1.5H14.5V14.5H1.5z"></path><path fill="#4e7ab5" d="M14,2v12H2V2H14 M15,1H1v14h14V1L15,1z"></path><path fill="#fff" d="M3 7.036L5.075 7.036 5.075 11.159 5.075 13 3 13zM4.037 6L4.037 6C3.415 6 3 5.559 3 5.015s.415-.959 1.037-.959S5.049 4.47 5.075 5.015C5.075 5.559 4.686 6 4.037 6zM12 13H9.952c0 0 0-3.098 0-3.328S9.926 8.648 9.056 8.648c-.768 0-.896.742-.896 1.024s0 3.328 0 3.328H6.112V7.112H8.16v.794c0 0 .41-.794 1.613-.794 1.229 0 2.227.845 2.227 2.56V13z"></path>
</svg>
        </a>
      </li>   
    </ul>

    
  </div>
  <div className='pb-5'>
  <p style={{ textAlign: 'center' }}>
  Copyright &#169;
  {new Date().getFullYear()}&nbsp; 
  <br />
  All Rights Reserved.
</p></div>
</footer>
  )
}

export default Footer