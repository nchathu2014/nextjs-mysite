import Link from "next/link";

function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href={"/"} className="text-xl font-bold text-gray-600">
              Nuwan Thuduwage
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden md:block">
            <div className="ml-10 flec items-baseline space-x-8">
              <Link
                href={"/"}
                className="px-3 py-2 text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className="px-3 py-2 text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href={"/contact"}
                className="px-3 py-2 text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Navigation Links for Medium Devices */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 p-2 hover:cursor-pointer">
              <svg
                className="h6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center-safe">
            <Link
              href={"/"}
              className="px-3 py-2 text-base font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-amber-300 hover: rounded-sm"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="px-3 py-2 text-base font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-amber-300 hover: rounded-sm"
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className="px-3 py-2 text-base font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-amber-300 hover: rounded-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
