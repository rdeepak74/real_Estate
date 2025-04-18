import React from 'react'

function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-12 overflow-hidden min-h-[600px]"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://videos.pexels.com/video-files/4770380/4770380-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className=" inset-0 bg-gradient-to-r from-slate-900/40 to-slate-900/60 dark:from-slate-900/70 dark:to-slate-900/90 z-10" />
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="text-5xl font-bold text-white dark:text-white mb-6">
          Find Your Perfect Home
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Discover premium properties tailored to your lifestyle
        </p>
        <button className="bg-blue-500 dark:bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition">
          Explore Properties
        </button>
      </div>
    </section>
  )
}

export default Hero
