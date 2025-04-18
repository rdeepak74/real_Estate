import React from 'react'

function About() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://picsum.photos/600/400?real-estate"
              alt="About Us"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6  mt-4">
              About Our Company
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              With over a decade of experience in real estate, we've helped
              thousands of clients find their perfect homes. Our team of
              dedicated professionals combines market expertise with
              personalized service to deliver exceptional results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="text-blue-600 text-2xl font-bold mb-2">10K+</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Properties Sold
                </p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="text-blue-600 text-2xl font-bold mb-2">15+</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Years Experience
                </p>
              </div>
            </div>
            <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
