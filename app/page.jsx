import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { highlights, menuItems } from "@/data/menu";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fffaf4] text-orange-950">
        <section id="home" className="relative px-5 py-20 sm:py-24 lg:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#fed7aa,transparent_35%),radial-gradient(circle_at_bottom_right,#fdba74,transparent_30%)]" />

          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="inline-flex rounded-full border border-orange-950/10 bg-white/60 px-4 py-2 text-sm font-bold text-orange-800 shadow-sm">
                Independent speciality coffee in Brighton
              </p>

              <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight text-orange-950 sm:text-6xl lg:text-7xl">
                Better coffee, slower mornings.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-950/70">
                Speciality coffee, fresh pastries and a calm space to slow down, meet friends or start your day well.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#menu"
                  className="rounded-full bg-orange-950 px-7 py-4 text-center text-sm font-black text-orange-50 shadow-xl shadow-orange-950/20 transition hover:-translate-y-0.5"
                >
                  Explore menu
                </a>
                <a
                  href="#visit"
                  className="rounded-full border border-orange-950/15 bg-white/70 px-7 py-4 text-center text-sm font-black text-orange-950 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Opening times
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-orange-950/10 bg-white/60 p-4 text-sm font-bold shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-orange-300/70 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-yellow-200/80 blur-2xl" />

              <div className="relative rounded-[2.5rem] border border-orange-950/10 bg-white p-4 shadow-2xl shadow-orange-950/20">
                <div className="rounded-[2rem] bg-gradient-to-br from-orange-900 via-orange-700 to-amber-500 p-8 text-orange-50">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
                      Today&apos;s roast
                    </span>
                    <span className="text-4xl">☕</span>
                  </div>

                  <div className="mt-24">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-100/80">
                      Colombia
                    </p>
                    <h2 className="mt-3 text-4xl font-black">
                      Caramel, citrus, cocoa
                    </h2>
                    <p className="mt-4 max-w-sm leading-7 text-orange-50/80">
                      Brewed fresh every morning with a rotating seasonal menu
                      and a calm coastal feel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Menu"
              title="Simple, fresh and built around quality."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {menuItems.map((group) => (
                <article
                  key={group.category}
                  className="rounded-[2rem] border border-orange-950/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-2xl font-black text-orange-950">
                    {group.category}
                  </h3>
                  <div className="mt-6 space-y-6">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="border-b border-orange-950/10 pb-5 last:border-0 last:pb-0"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="font-black">{item.name}</h4>
                          <p className="font-black text-orange-700">
                            {item.price}
                          </p>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-orange-950/65">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="bg-orange-950 px-5 py-20 text-orange-50">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-200">
                Our story
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Designed to feel local, warm and trustworthy.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-orange-50/75">
              <p>
                Harbour Brew was created as a place for good coffee, calm mornings and familiar faces. We serve carefully brewed espresso, seasonal drinks and fresh pastries in a relaxed space designed for everyday visits.
              </p>
              <p>
                Whether you're grabbing a quick coffee before work, meeting a friend, or settling in with your laptop, our goal is simple: make every visit feel welcoming, easy and worthwhile.
              </p>
            </div>
          </div>
        </section>

        <section id="visit" className="px-5 py-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-orange-950/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-700">
                Visit us
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Open daily by the sea.
              </h2>

              <div className="mt-8 space-y-5 text-orange-950/75">
                <p>
                  <span className="font-black text-orange-950">Address:</span>
                  <br />
                  24 Marine Lane, Brighton BN1 1AA
                </p>
                <p>
                  <span className="font-black text-orange-950">Phone:</span>
                  <br />
                  01234 567890
                </p>
                <p>
                  <span className="font-black text-orange-950">Email:</span>
                  <br />
                  hello@harbourbrew.example
                </p>
                <p>
                  <span className="font-black text-orange-950">Hours:</span>
                  <br />
                  Mon–Fri: 7:30am–5pm
                  <br />
                  Sat–Sun: 8am–6pm
                </p>
              </div>
            </div>

            <form className="rounded-[2rem] border border-orange-950/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-700">
                Contact
              </p>
              <h3 className="mt-3 text-3xl font-black">
                Ask about bookings or catering.
              </h3>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-orange-950/10 bg-orange-50 px-4 py-3 outline-none transition focus:border-orange-800"
                  placeholder="Your name"
                />
                <input
                  className="rounded-2xl border border-orange-950/10 bg-orange-50 px-4 py-3 outline-none transition focus:border-orange-800"
                  placeholder="Email address"
                />
                <input
                  className="rounded-2xl border border-orange-950/10 bg-orange-50 px-4 py-3 outline-none transition focus:border-orange-800 sm:col-span-2"
                  placeholder="Subject"
                />
                <textarea
                  className="min-h-36 rounded-2xl border border-orange-950/10 bg-orange-50 px-4 py-3 outline-none transition focus:border-orange-800 sm:col-span-2"
                  placeholder="Message"
                />
              </div>

              <button
                type="button"
                className="mt-6 rounded-full bg-orange-950 px-7 py-4 text-sm font-black text-orange-50 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Send message
              </button>
              <p className="mt-4 text-sm text-orange-950/55">
                For table enquiries, private events or general questions, send us a message and we’ll get back to you soon.
              </p>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
