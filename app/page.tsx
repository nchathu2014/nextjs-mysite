import { Zap, Heart, Smartphone } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 ">
          Welcome to MySite
        </h1>
        <p className="text-wrap mt-5 text-xl text-gray-600 max-2-2xl mx-auto mb-8">
          This is a simple, clean website built with <Link href={'https://nextjs.org/'} className="text-blue-500 underline">Next.JS</Link> and  <Link href={'https://tailwindcss.com/'} className="text-blue-500 underline">TailwindCSS</Link>. By
          building this beatiful website, I'v gained the following skills.
        </p>
        <div className="text-left bg-amber-200 p-5 rounded-xl shadow-lg w-max m-auto">
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>How static & dynamic routing works</li>
            <li>
              Use of <pre className="inline">&lt;Link/&gt;</pre> component
            </li>
            <li>How shared layout works</li>
            <li>Use of File colocation</li>
            <li>
              <Link href={'https://lucide.dev/'} className="text-blue-500 underline">How to use Lucide React Icons</Link>
            </li>
        
            <li>Using TailwindCSS</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <button className="bg-blue-600 px-3 py-3 text-white rounded-lg transition-colors hover:bg-blue-800 hover: cursor-pointer">
          Get Started
        </button>
        <button className="border border-gray-300 px-3 py-3  rounded-lg hover:bg-gray-100 hover: cursor-pointer">
          Learn More
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16 mt-10">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-200 rounded-lg flex justify-center items-center  mx-auto mb-4">
            <Zap />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast</h3>
          <p className="italic text-gray-600">
            Built with Modern Tech for Optimal Performance
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-green-200 rounded-lg flex justify-center items-center  mx-auto mb-4">
            <Heart />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Simple</h3>
          <p className="italic text-gray-600">Clean & Easy to Understand</p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-purple-200 rounded-lg flex justify-center items-center  mx-auto mb-4">
            <Smartphone />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Responsive
          </h3>
          <p className="italic text-gray-600">
            Work Perfectly on all devices and screen sizes
          </p>
        </div>
      </div>
    </div>
  );
}
