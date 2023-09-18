import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const MenuItems = ["Choose Plan", "Manage Billing"];

type AppHeaderProps = {
  selectedMenuItem: string;
  onMenuItemSelected: (menuItem: string) => void;
};

export default function AppHeader({
  selectedMenuItem,
  onMenuItemSelected,
}: AppHeaderProps) {
    console.log(`AppHeader: selectedMenuItem: ${selectedMenuItem}`);
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://i.imgur.com/RDAiCIs.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    onClick={() => onMenuItemSelected(MenuItems[0])}
                    className={`inline-flex border-b-2 cursor-pointer items-center px-1 pt-1 text-sm font-medium ${
                      selectedMenuItem === MenuItems[0]
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    {MenuItems[0]}
                  </a>
                  <a
                    onClick={() => onMenuItemSelected(MenuItems[1])}
                    className={`inline-flex cursor-pointer items-center border-b-2  border-transparent px-1 pt-1 text-sm font-medium ${
                      selectedMenuItem === MenuItems[1]
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    {MenuItems[1]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
