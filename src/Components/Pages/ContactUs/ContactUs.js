import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="mx-auto px-2 sm:px-6 lg:px-44 py-16">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="col-span-1 w-full mx-auto  bg-white p-8 text-gray-700 ">
          <h1 className="text-[#1F1F52] mb-5 text-3xl font-bold uppercase">
            Get In Touch
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod magni
            accusantium id fugit odit? Laborum velit voluptas fugiat cupiditate
            itaque perferendis ullam, excepturi ut tenetur. Ea voluptate maiores
            natus et unde.
          </p>
          <div>
            <div className="flex pt-8 items-center">
              <span className="min-w-[40px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-[#1F1F52]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <h5>Dhaka, Bangladesh</h5>
            </div>
            <div className="flex pt-5 items-center">
              <span className="min-w-[40px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-[#1F1F52]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <h5>+082394234230</h5>
            </div>
            <div className="flex pt-5 items-center">
              <span className="min-w-[40px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-[#1F1F52]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <h5>+082394234230</h5>
            </div>
            <div className="flex pt-5 items-center">
              <span className="min-w-[40px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-[#1F1F52]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <a href="#" target="_blank">
                diucsealumni@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <form
            id="contact-me"
            class="w-full mx-auto  bg-white p-8 text-gray-900 "
          >
            <div class="flex flex-wrap mb-6">
              <div class="relative w-full appearance-none label-floating">
                <input
                  class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-100 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
                <label
                  for="name"
                  class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                >
                  Your name
                </label>
              </div>
            </div>
            <div class="flex flex-wrap mb-6">
              <div class="relative w-full appearance-none label-floating">
                <input
                  class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-100 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  placeholder="Your email"
                  required
                />
                <label
                  for="name"
                  class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                >
                  Your email
                </label>
              </div>
            </div>
            <div class="flex flex-wrap mb-6">
              <div class="relative w-full appearance-none label-floating">
                <textarea
                  class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full min-h-[150px] bg-gray-100 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  type="text"
                  placeholder="Message..."
                ></textarea>
                <label
                  for="message"
                  class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                >
                  Message...
                </label>
              </div>
            </div>

            <div class="">
              <button
                class="w-full shadow bg-[#1F1F52] hover:bg-[#202064] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
