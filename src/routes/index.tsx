import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import {
  ArrowRight,
  Car,
  Clock,
  Route as RouteIcon,
  UserCog,
  MapPin,
  FileCheck,
  GraduationCap,
  Timer,
  ShieldCheck,
  Star,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  { icon: MapPin, title: "Trainer at your door", body: "Pick-up and drop-off included. You just show up." },
  { icon: Clock, title: "Slots 5 AM – 11 PM", body: "Largest trainer fleet in your city. Book anytime." },
  { icon: RouteIcon, title: "Structured curriculum", body: "Basics to advanced — with room to experiment." },
  { icon: UserCog, title: "Trainer switching", body: "Emergency? We swap. No day skipped, no extra fee." },
  { icon: Car, title: "On-road from day one", body: "Real roads. No boring practice tracks." },
  { icon: FileCheck, title: "License, handled", body: "Learner's and permanent license, end-to-end." },
  { icon: GraduationCap, title: "RTO exam prep", body: "Near-zero fail rate across cohorts." },
  { icon: Timer, title: "On-time, always", body: "Guardian updates, leaves respected, no waiting." },
  { icon: ShieldCheck, title: "Safe & maintained", body: "Cars serviced weekly, safety systems on." },
];

const steps = [
  { n: "01", t: "Download the App", b: "Available on iOS and Android." },
  { n: "02", t: "Customise your journey", b: "Pick your slot, plan, car and pickup." },
  { n: "03", t: "Add-ons, sorted", b: "We handle your learner's & permanent license." },
  { n: "04", t: "Drive", b: "Instructor picks you up. Progress tracked in-app." },
];

const testimonials = [
  { name: "Shivanand", loc: "Sector 79, Gurgaon", rating: "4.9", head: "Cut-throat simplicity", quote: "Traditional trainers ghosted my brush-up sessions. Drizzy aligned a trainer within minutes." },
  { name: "Hema", loc: "Dwarka, Delhi", rating: "4.8", head: "Switched trainers instantly", quote: "My trainer had a family emergency on session 10. Drizzy sent a replacement the next day." },
  { name: "Srijeeta", loc: "C.R. Park, Delhi", rating: "5.0", head: "Practical from day one", quote: "Well-maintained car, focused trainer, sessions paced to my speed. Room for experimentation." },
  { name: "Dr. Sneha Singh", loc: "Indirapuram", rating: "5.0", head: "Curated & managed", quote: "My sister referred me. Now I know why. Handled my hectic hospital shifts effortlessly." },
  { name: "Shree", loc: "South Extension, Delhi", rating: "4.5", head: "Learned in my own car", quote: "I wanted to learn in the car I drive daily. Drizzy stood by me through every challenge." },
  { name: "Ranjeet Singh", loc: "Tagore Garden, Delhi", rating: "4.9", head: "Leaves approved", quote: "Office got hectic. Drizzy handled leave requests and gave alternate slots easily." },
  { name: "Sehaj Preet", loc: "Sector 100, Noida", rating: "4.8", head: "Passed first try", quote: "Smooth booking, patient instructor. Cleared my test on the first attempt." },
  { name: "Aditya Kumar", loc: "Kalkaji, Delhi", rating: "4.9", head: "Flexible schedule", quote: "Busy student life. Reminders and progress tracking were exactly what I needed." },
];

const learnItems = [
  "Rollback + brake control",
  "Advanced clutch operations",
  "Reverse driving",
  "Parallel parking",
  "Night, smog & rain driving",
  "45°, 60° & 90° parkings",
  "Basement & high-rise parking",
  "Market congestion",
  "Lane change",
  "Highway driving",
  "Emergency braking",
  "U-turn handling",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-[1280px] px-6 py-2 text-center caption">
          Limited time offer — Flat 30% off · Grab now
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-background border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 h-[72px]">
          <a href="/" className="font-display text-xl font-bold tracking-tight">Drizzy</a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#why" className="hover:text-accent transition-colors">Why Us</a>
            <a href="#curriculum" className="hover:text-accent transition-colors">Services</a>
            <a href="#how" className="hover:text-accent transition-colors">How it Works</a>
            <a href="#stories" className="hover:text-accent transition-colors">Testimonials</a>
            <a href="#app" className="hover:text-accent transition-colors">Download App</a>
          </nav>
          <a href="#book" className="btn-solid btn-solid-hover h-11 px-5 text-sm">Book Now</a>
        </div>
      </header>

      <section className="border-b border-ink">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="caption text-muted-foreground mb-6">Driving School · Delhi NCR</div>
            <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] tracking-[-0.03em]">
              Learn to drive.<br />Confidently.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Certified instructors at your door. Book a lesson faster than you make Maggi.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#book" className="btn-solid btn-solid-hover">
                Book Now <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#app" className="btn-outline btn-outline-hover">Download App</a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <span className="flex items-center gap-2"><Star className="w-4 h-4 fill-accent text-accent" /> 4.9 rating</span>
              <span className="w-px h-4 bg-border hidden sm:block" />
              <span>10,000+ learners</span>
              <span className="w-px h-4 bg-border hidden sm:block" />
              <span>200+ trainers</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative border border-ink">
              <img src={heroImg} alt="Driving instructor and learner" width={1024} height={1024} className="w-full h-auto block" />
              <div className="absolute -bottom-4 -left-4 bg-accent px-4 py-2 caption border border-ink">
                Flat 30% off
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="border-b border-ink">
        <div className="mx-auto max-w-[1280px] px-6 py-24">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <div className="caption text-muted-foreground mb-4">Why Drizzy</div>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-[1.05]">
                Different in our DNA.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-muted-foreground text-lg">
                A structured training system built around your time, your car, and your confidence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-ink">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="border-r border-b border-ink p-8 md:p-10 bg-background hover:bg-surface transition-colors">
                  <Icon className="w-6 h-6 mb-8" strokeWidth={1.5} />
                  <h3 className="font-display font-bold text-xl mb-3">{f.title}</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="curriculum" className="border-b border-ink bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 py-24">
          <div className="mb-16">
            <div className="caption text-muted-foreground mb-4">Curriculum</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-[1.05] max-w-2xl">
              What's in the palette.
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <div className="caption mb-6">Vehicle Type</div>
              <div className="grid grid-cols-2 border-l border-t border-ink">
                {["Hatchback", "Sedan", "SUV", "Your Own Car"].map((v) => (
                  <div key={v} className="border-r border-b border-ink p-6 bg-background">
                    <Car className="w-5 h-5 mb-6" strokeWidth={1.5} />
                    <div className="font-display font-bold">{v}</div>
                    <div className="text-xs text-muted-foreground mt-1">Manual / Automatic</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="caption mb-6">Plans</div>
              <div className="flex flex-wrap border-l border-t border-ink">
                {["7 Days", "10 Days", "15 Days", "21 Days", "28 Days", "Mini Day", "Half Day", "Full Day"].map((p, i) => (
                  <div
                    key={p}
                    className={`border-r border-b border-ink px-6 py-5 min-w-[140px] flex-1 ${
                      i === 2 ? "bg-ink text-ink-foreground" : "bg-background"
                    }`}
                  >
                    <div className="font-display font-bold text-lg">{p}</div>
                  </div>
                ))}
              </div>

              <div className="caption mt-10 mb-6">What You Learn</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-ink">
                {learnItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-ink py-3 px-1 text-sm">
                    <span className="w-2 h-2 bg-ink shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="border-b border-ink">
        <div className="mx-auto max-w-[1280px] px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <div className="caption text-muted-foreground mb-4">How it works</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-[1.05]">
              Legos of your journey. In under 2 minutes.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-ink">
            {steps.map((s) => (
              <div key={s.n} className="border-r border-b border-ink p-8 md:p-10">
                <div className="font-display text-6xl font-bold text-muted mb-8">{s.n}</div>
                <h3 className="font-display font-bold text-xl mb-3">{s.t}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="border-b border-ink bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 py-24">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-6">
              <div className="caption text-muted-foreground mb-4">Testimonials</div>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-[1.05]">
                Our cult.<br />Their stories.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex items-end">
              <p className="text-muted-foreground text-lg">
                Thousands of learners. Real reviews. Zero filters.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-ink">
            {testimonials.map((t) => (
              <div key={t.name} className="border-r border-b border-ink p-7 bg-background flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <h3 className="font-display font-bold text-lg leading-tight max-w-[70%]">{t.head}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                    <span className="font-medium">{t.rating}</span>
                  </div>
                </div>
                <p className="text-[15px] text-muted-foreground leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <div className="w-10 h-10 bg-ink text-ink-foreground flex items-center justify-center font-display font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="bg-ink text-ink-foreground border-b border-ink">
        <div className="mx-auto max-w-[1280px] px-6 py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-[1.05]">
              Ready to drive?
            </h2>
            <p className="mt-4 text-lg opacity-70 max-w-lg">
              Book your first lesson today. Flat 30% off for a limited time.
            </p>
          </div>
          <div id="app" className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
            <a href="#" className="inline-flex items-center justify-center h-12 px-6 bg-accent text-accent-foreground font-medium text-sm border border-accent hover:bg-background hover:text-foreground transition-colors">
              Book Now <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="#" className="inline-flex items-center justify-center h-12 px-6 bg-transparent text-ink-foreground font-medium text-sm border border-ink-foreground hover:bg-ink-foreground hover:text-ink transition-colors">
              Download App
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-[1280px] px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-2xl font-bold">Drizzy</div>
            <p className="mt-3 text-sm opacity-60 max-w-xs">
              Learn to drive with certified instructors at your door.
            </p>
          </div>
          <div>
            <div className="caption opacity-60 mb-4">Product</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#why" className="hover:text-accent">Why Us</a></li>
              <li><a href="#curriculum" className="hover:text-accent">Services</a></li>
              <li><a href="#how" className="hover:text-accent">How it Works</a></li>
              <li><a href="#stories" className="hover:text-accent">Reviews</a></li>
            </ul>
          </div>
          <div>
            <div className="caption opacity-60 mb-4">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent">About</a></li>
              <li><a href="#" className="hover:text-accent">Careers</a></li>
              <li><a href="#" className="hover:text-accent">Contact</a></li>
              <li><a href="#" className="hover:text-accent">Blog</a></li>
            </ul>
          </div>
          <div>
            <div className="caption opacity-60 mb-4">Get the app</div>
            <div className="flex flex-col gap-2">
              <a href="#" className="inline-flex items-center justify-center h-11 px-4 border border-ink-foreground text-sm font-medium hover:bg-ink-foreground hover:text-ink transition-colors">App Store</a>
              <a href="#" className="inline-flex items-center justify-center h-11 px-4 border border-ink-foreground text-sm font-medium hover:bg-ink-foreground hover:text-ink transition-colors">Google Play</a>
            </div>
          </div>
        </div>
        <div className="border-t border-ink-foreground/20">
          <div className="mx-auto max-w-[1280px] px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
            <div>© 2026 Drizzy. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100">Privacy</a>
              <a href="#" className="hover:opacity-100">Terms</a>
              <a href="#" className="hover:opacity-100">Refunds</a>
            </div>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="YouTube"><Youtube className="w-4 h-4" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
