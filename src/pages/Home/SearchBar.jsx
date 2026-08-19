function SearchBar() {
  return (
    <section className="relative z-20 -mt-8 px-6">
      <div className="mx-auto max-w-[1340px] rounded-2xl bg-white p-5 shadow-xl">

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

          {/* Service */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#14213d]">
              What service do you need?
            </label>

            <input
              type="text"
              placeholder="e.g. Electrician, Painter, HVAC..."
              className="h-14 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#14213d]">
              Where do you need it?
            </label>

            <input
              type="text"
              placeholder="City or ZIP Code"
              className="h-14 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Distance */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#14213d]">
              Distance
            </label>

            <select className="h-14 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-blue-500">
              <option>10 Miles</option>
              <option>25 Miles</option>
              <option>50 Miles</option>
              <option>100 Miles</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="h-14 w-full rounded-lg bg-blue-600 px-6 text-sm font-bold text-white transition hover:bg-blue-700">
              🔍 Search Professionals
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SearchBar;