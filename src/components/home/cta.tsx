export default function CtaSection() {
    return (
        <section className="py-20 bg-black">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                    Ready to Transform Your Business Operations?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                    Join companies saving hundreds of thousands annually with our offshore solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Start Hiring Now
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </section>
    )
}