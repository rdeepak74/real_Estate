import React from 'react'

function Faq() {
  const faqs = [
    {
      question: 'How do I schedule a viewing?',
      answer: 'Contact us through our form or call us directly.',
    },
    {
      question: 'What areas do you cover?',
      answer: 'We operate nationwide with local experts in every region.',
    },
    {
      question: 'What are your fees?',
      answer: 'No hidden fees. We charge a standard 2% commission.',
    },
  ]

  return (
    <section className="py-16" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
