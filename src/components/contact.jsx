function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}
          <div className="lg:pr-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#34d399]">
              Get In Touch
            </p>

            <h2 className="max-w-lg text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's Start a
              <br />
              Conversation
              <span className="text-[#34d399]">.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-gray-400">
              Have a question, an idea, or an opportunity to discuss?
              I'd love to hear from you. Send a message and let's connect.
            </p>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Have something to share?
              </p>

              <p className="mt-2 text-xl font-medium text-white">
                Reach Out <span className="text-[#34d399]">↗</span>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-2xl border border-white/10 bg-[#2a323e] p-6 sm:p-8 lg:p-9">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been submitted.");
              }}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#232a34] px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition focus:border-[#34d399] focus:ring-1 focus:ring-[#34d399]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#232a34] px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition focus:border-[#34d399] focus:ring-1 focus:ring-[#34d399]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#232a34] px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition focus:border-[#34d399] focus:ring-1 focus:ring-[#34d399]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#34d399] px-6 py-4 font-semibold text-[#232a34] transition duration-300 hover:bg-white"
              >
                Send Message
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;