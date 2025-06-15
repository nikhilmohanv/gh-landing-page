export default function CtaSection() {
    return (
        <section className="py-20 bg-black dark:bg-gray-950">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                    Ready to Transform Your Business Operations?
                </h2>
                <p className="text-xl text-gray-300 dark:text-gray-400 mb-8">
                    Join companies saving hundreds of thousands annually with our offshore solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white dark:bg-gray-100 text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors">
                        Start Hiring Now
                    </button>
                    <button className="border-2 border-white dark:border-gray-400 text-white dark:text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-white dark:hover:bg-gray-100 hover:text-black transition-colors">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </section>
    )
}