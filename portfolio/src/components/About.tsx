export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#FFD60A] text-shadow-gold mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-white text-shadow-gold mb-6 leading-relaxed">
                I&apos;m a passionate full-stack developer with great experience
                in creating digital solutions that make a difference. I love
                turning complex problems into simple, beautiful, and intuitive
                designs.
              </p>
              <p className="text-lg text-white text-shadow-gold mb-6 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, learning them, or trying my hand at competitive
                programming.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-[#FFD60A] text-shadow-gold">
                    Experience
                  </h3>
                  <p className="text-white text-shadow-gold">2 Years</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-[#FFD60A] text-shadow-gold">
                    Projects
                  </h3>
                  <p className="text-white text-shadow-gold">10+ Completed</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#FFC300] box-glow rounded-lg p-8 text-[#001D3D]">
                <h3 className="text-2xl font-bold mb-4">My Mission</h3>
                <p className="text-[#001D3D] leading-relaxed">
                  To create innovative web solutions that not only meet business
                  objectives but also provide exceptional user experiences. I
                  believe in the power of clean code, thoughtful design, and
                  continuous learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
