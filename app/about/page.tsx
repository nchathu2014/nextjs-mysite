export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AboutPage</h1>
        <p className="text-4xl text-gray-600">
          Learn more about my story and what drives me forward
        </p>

        <div className="prose prose-lg mx-auto mt-5">
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8 border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              My Story
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              perferendis aperiam aliquid dolor nisi. Culpa numquam, est,
              aperiam dolores voluptas quod praesentium expedita consequatur
              quidem totam incidunt saepe, commodi doloribus alias possimus.
              Optio assumenda quaerat obcaecati veniam esse culpa, vitae labore
              aspernatur. Aspernatur, quibusdam consequatur doloremque rerum a
              vel. Minima!
            </p>
            <p className="text-gray-600 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              similique odio beatae, nostrum praesentium cupiditate veniam alias
              aut ipsa nemo totam et quae soluta quisquam maxime provident
              assumenda perferendis ea illo, dolorum quidem qui pariatur
              laborum? Sed alias repellat minus!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-400 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">My Mission</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minima corporis doloremque cum incidunt adipisci provident ullam, eius eaque aliquam?
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-400 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">My Vision</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minima corporis doloremque cum incidunt adipisci provident ullam, eius eaque aliquam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
