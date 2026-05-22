export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-5 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4 tracking-tight">Welcome to KRIST</h1>
      <p className="text-gray-500 text-lg max-w-xl mx-auto">
        Discover the latest trends in fashion. Explore our collections for Men, Women,
        Kids and more.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button className="bg-black text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-900 transition-colors">
          Shop Now
        </button>
        <button className="border border-black text-black px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
          View Lookbook
        </button>
      </div>

      {/* Placeholder grid */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Men', 'Women', 'Kids', 'Footwear'].map((cat) => (
          <div
            key={cat}
            className="aspect-[3/4] bg-gray-100 rounded-xl flex items-end p-4 cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <span className="font-semibold text-sm">{cat}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
