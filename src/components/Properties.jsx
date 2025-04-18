import React from 'react'

function Properties() {
  const properties = [
    {
      id: 1,
      title: 'Modern Glass Villa',
      price: '$1.8M',
      beds: 5,
      baths: 4,
      sqft: 3500,
      tag: 'Luxury',
      image:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Downtown Loft',
      price: '$850k',
      beds: 2,
      baths: 2,
      sqft: 1800,
      tag: 'Urban',
      image:
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Beachfront Estate',
      price: '$3.2M',
      beds: 6,
      baths: 5,
      sqft: 4200,
      tag: 'Waterfront',
      image:
        'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Mountain Cabin',
      price: '$620k',
      beds: 3,
      baths: 2,
      sqft: 2200,
      tag: 'Nature',
      image:
        'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      title: 'Historic Townhouse',
      price: '$1.1M',
      beds: 4,
      baths: 3,
      sqft: 2800,
      tag: 'Heritage',
      image:
        'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      title: 'Suburban Family Home',
      price: '$950k',
      beds: 4,
      baths: 3,
      sqft: 3200,
      tag: 'Family',
      image:
        'https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 7,
      title: 'Suburban Family Home',
      price: '$950k',
      beds: 5,
      baths: 3,
      sqft: 4000,
      tag: 'Family',
      image:
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 8,
      title: 'Suburban Family Home',
      price: '$950k',
      beds: 3,
      baths: 2,
      sqft: 3100,
      tag: 'Family',
      image:
        'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]

  return (
    <section
      className="py-16 bg-white/50 dark:bg-slate-900/80 backdrop-blur-sm"
      id="properties"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4 uppercase">
            Featured Properties
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover our curated selection of premium properties across various
            categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Price Tag */}
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {property.price}
                  </span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                  {property.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 truncate">
                  {property.title}
                </h3>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="flex flex-col items-center p-2 bg-slate-50 dark:bg-slate-700/30 rounded-lg transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-slate-600/50">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Beds
                    </span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {property.beds}
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-slate-50 dark:bg-slate-700/30 rounded-lg transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-slate-600/50">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Baths
                    </span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {property.baths}
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-slate-50 dark:bg-slate-700/30 rounded-lg transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-slate-600/50">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Sqft
                    </span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {property.sqft}
                    </span>
                  </div>
                </div>

                {/* Button with animated arrow */}
                <button className="w-full flex items-center justify-center gap-2 py-3 px-5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg transition-all duration-300 group-hover:shadow-lg">
                  <span>View Details</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Properties
