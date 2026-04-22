export default function ContactPage() {
  return (
    <div className="ax-width-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          explicabo dolor obcaecati nobis qui veniam cumque nulla sunt,
          veritatis ut et temporibus architecto cum aperiam earum quam odio
          pariatur illo, enim voluptatem.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-md border-gray-300 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send Me a Message
          </h2>
          <form action="" className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you.email@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your inquiry..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors hover:bg-blue-700 hover:cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md border-gray-300 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>

          <div>
            <label className="block text-lg mt-4 mb-3  text-gray-700 font-normal">
              <span className="font-semibold">Email:</span>{" "}
              nuwan.thuduwage@gmail.com
            </label>

            <label className="block text-lg mt-4 mb-3  text-gray-700 font-normal">
              <span className="font-semibold">Web:</span>{" "}
              https://www.nuwan.me
            </label>

             <label className="block text-lg mt-4 mb-3  text-gray-700 font-normal">
              <span className="font-semibold">Mobile:</span>{" "}
              +1 226-606-5163
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
