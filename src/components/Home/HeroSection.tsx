export default function HeroSection() {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-medium text-white">Welcome to Shivam blog</h1>
        <p className="mt-6 text-white">
          A simple, fast, and modern web framework for building web
          applications.
        </p>
        <div className="mt-8 flex">
          <a
            href="/docs"
            className="rounded-md bg-white px-6 py-2 text-lg font-medium text-gray-800"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
