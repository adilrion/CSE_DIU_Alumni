/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../Images/diuLogo.png";
import facebook from "../../Images/Logo/facebook.png";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "home", current: true },
  { name: "Committee", href: "committee", current: true },
  { name: "Gallery", href: "gallery", current: true },
  { name: "Notice Board", href: "notice-board", current: true },
  { name: "About Us", href: "about-us", current: true },
  { name: "Contact Us", href: "contact-us", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = () => {
  return (
    <Disclosure as="nav" className="bg-[#1F1F52]">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-44">
            <div className="relative flex items-center justify-center md:justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-12 w-auto"
                  src={logo}
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-12 w-auto"
                  src={logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      to={item.href}
                      className="text-white font-[500] text-[18px] p-4"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="">
                  <span className="sr-only">View notifications</span>
                  <img src={facebook} alt="Facebook logo" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
              {navigation.map((item) => (
                <Link
                  to={item.href}
                  className="text-white font-[500] text-[18px] p-4"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
