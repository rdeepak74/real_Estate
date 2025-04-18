import React from 'react'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: 'Excellent service and professional team!',
      author: 'John D.',
      location: 'New York',
    },
    {
      id: 2,
      text: 'Found my dream home in just 2 weeks!',
      author: 'Sarah M.',
      location: 'Los Angeles',
    },
    {
      id: 3,
      text: 'Best real estate experience ever.',
      author: 'Mike R.',
      location: 'Chicago',
    },
  ]

  return (
    <section
      className="py-16 bg-white/50 dark:bg-slate-800/80 backdrop-blur-sm"
      id="testimonials"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center  mt-4">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg"
            >
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-slate-800 dark:text-white">
                {testimonial.author}
              </p>
              <p className="text-slate-500 dark:text-slate-400">
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
