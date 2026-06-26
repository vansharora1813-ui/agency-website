import { Coffee, Clock, MapPin, Phone, Star, MessageCircle, Heart } from 'lucide-react';

export default function CafeDemo() {
  const whatsappNum = "919999999999";
  const agencyMessage = "Hi! I saw the Cafe Demo website and I want a similar website for my cafe.";
  const encodedAgencyMsg = encodeURIComponent(agencyMessage);
  const agencyUrl = `https://wa.me/${whatsappNum}?text=${encodedAgencyMsg}`;

  const cafeMessage = "Hi Brew & Crumb! I want to check availability for a table or place a takeaway order.";
  const encodedCafeMsg = encodeURIComponent(cafeMessage);
  const cafeUrl = `https://wa.me/${whatsappNum}?text=${encodedCafeMsg}`;

  const menuItems = {
    coffee: [
      { name: "Specialty Espresso", desc: "Double shot of single-origin organic arabica.", price: "₹140" },
      { name: "Vanilla Bean Latte", desc: "Espresso with steamed milk and organic Madagascar vanilla.", price: "₹180" },
      { name: "Cold Brew Tonic", desc: "18-hour steep cold brew topped with tonic water and orange peel.", price: "₹190" },
      { name: "Caramel Macchiato", desc: "Espresso layered with steamed milk and house-made salted caramel syrup.", price: "₹195" },
    ],
    bakes: [
      { name: "Butter Croissant", desc: "Flaky, multi-layered French pastry baked fresh daily.", price: "₹150" },
      { name: "Cinnamon Roll", desc: "Warm cinnamon pastry topped with cream cheese glaze.", price: "₹170" },
      { name: "Sourdough Avocado Toast", desc: "Fresh sourdough toast with smashed avocado, cherry tomatoes, and seeds.", price: "₹240" },
      { name: "Chocolate Fudge Brownie", desc: "Decadent dark chocolate brownie with a gooey center.", price: "₹160" }
    ]
  };

  return (
    <div className="bg-amber-950/20 text-slate-150 font-sans min-h-screen relative pb-20">
      {/* Sticky Top Agency Promo Line */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary py-2 text-center text-xs font-bold text-white relative z-50">
        Demo Mode: This is a premium website layout we can build for you.
      </div>

      {/* Cafe Header */}
      <header className="border-b border-amber-900/35 bg-stone-900/85 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coffee className="w-5.5 h-5.5 text-amber-500 animate-spin-slow" />
            <span className="text-xl font-bold font-serif tracking-wide text-amber-100">Brew & Crumb</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-amber-200/60">
            <a href="#about" className="hover:text-amber-100 transition-colors font-serif">Our Story</a>
            <a href="#menu" className="hover:text-amber-100 transition-colors font-serif">Menu</a>
            <a href="#testimonials" className="hover:text-amber-100 transition-colors font-serif">Reviews</a>
            <a href="#hours" className="hover:text-amber-100 transition-colors font-serif">Hours</a>
          </nav>
          <a
            href={cafeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-stone-950 hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-600/10"
          >
            Order Now
          </a>
        </div>
      </header>

      {/* Cafe Hero */}
      <section className="relative py-24 md:py-32 bg-stone-950 overflow-hidden text-center">
        {/* Cozy glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase font-sans">SPECIALTY COFFEE & ARTISANAL BAKERY</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif tracking-wide leading-tight text-amber-55">
            Where every cup <br />
            tells a story.
          </h1>
          <p className="text-amber-100/60 text-base max-w-lg mx-auto font-sans leading-relaxed">
            Roasting organic fair-trade coffee beans in-house daily. Paired with butter-rich pastries straight from our morning ovens.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a
              href="#menu"
              className="px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-stone-950 font-bold text-sm uppercase transition-all"
            >
              View Menu
            </a>
            <a
              href={cafeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-amber-800/40 hover:border-amber-700/60 text-amber-100/80 font-bold text-sm uppercase transition-all"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>

      {/* Cafe Features */}
      <section id="about" className="py-16 bg-stone-950 border-t border-b border-amber-950/20 text-center">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: Coffee, title: "100% Arabica Beans", desc: "Directly sourced from organic estate farmers in Coorg." },
            { icon: Heart, title: "Baked with Love", desc: "Fresh flour, double butter, and natural wild yeasts only." },
            { icon: Clock, title: "Cozy Workspace", desc: "Free high-speed WiFi, silent corners, and plenty of power outlets." }
          ].map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="flex flex-col items-center space-y-3 p-4 text-center">
                <div className="p-3 bg-amber-900/10 rounded-full text-amber-500">
                  <Icon className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-base font-serif font-bold text-amber-100">{feat.title}</h3>
                <p className="text-amber-100/50 text-xs leading-relaxed max-w-[240px] font-sans">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Menu Grid */}
      <section id="menu" className="py-20 bg-stone-900/40">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest font-sans">THE BILL OF FARE</span>
            <h2 className="text-3xl font-serif text-amber-100">Explore Our Menu</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Coffee column */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-semibold text-amber-200 border-b border-amber-900/20 pb-3 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-amber-500" /> Specialty Coffee
              </h3>
              <div className="space-y-6">
                {menuItems.coffee.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-bold text-amber-50 font-sans group-hover:text-amber-500 transition-colors">
                        {item.name}
                      </h4>
                      <span className="w-4 border-b border-dotted border-amber-900/30 flex-grow mx-2" />
                      <span className="text-sm font-bold text-amber-100 font-sans">{item.price}</span>
                    </div>
                    <p className="text-amber-100/50 text-xs mt-1 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bakes column */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-semibold text-amber-200 border-b border-amber-900/20 pb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-amber-500" /> Artisanal Bakery
              </h3>
              <div className="space-y-6">
                {menuItems.bakes.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-bold text-amber-50 font-sans group-hover:text-amber-500 transition-colors">
                        {item.name}
                      </h4>
                      <span className="w-4 border-b border-dotted border-amber-900/30 flex-grow mx-2" />
                      <span className="text-sm font-bold text-amber-100 font-sans">{item.price}</span>
                    </div>
                    <p className="text-amber-100/50 text-xs mt-1 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-stone-950 border-t border-b border-amber-950/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest font-sans">COMMUNITY LOVE</span>
            <h2 className="text-3xl font-serif text-amber-100">Patron Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              { name: "Kabir Dev", quote: "The avocado toast is exceptional, and their espresso pull is very consistent. This has become my favorite place to work from on weekends.", rating: 5 },
              { name: "Meera Sen", quote: "We ordered cinnamon rolls for our office party, and everyone fell in love. Flaky, perfectly sweet, and still warm when delivered.", rating: 5 }
            ].map((test, i) => (
              <div key={i} className="p-6 bg-stone-900/40 border border-amber-900/10 rounded-xl space-y-3 font-sans">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-amber-100/60 text-xs italic leading-relaxed">"{test.quote}"</p>
                <p className="text-amber-100 font-bold text-xs">- {test.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and Hours */}
      <section id="hours" className="py-20 bg-stone-900/10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-amber-100">Brew & Crumb Cozy Corner</h3>
            <p className="text-amber-100/50 text-xs leading-relaxed">
              Drop by for a warm cup, hot pastries, or just to sit and write your next chapter. We'd love to have you.
            </p>
            <div className="space-y-2 text-xs font-sans text-amber-150">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Shop 12, Block C, Dwarka Sector 11, New Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>+91 99999 99999</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-stone-950 rounded-2xl border border-amber-900/10 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-amber-500">STORE HOURS</h4>
            <div className="space-y-2 text-xs text-amber-100/75">
              <div className="flex justify-between border-b border-amber-900/10 pb-1.5">
                <span>Monday – Friday</span>
                <span className="font-semibold text-white">08:00 AM – 09:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-amber-900/10 pb-1.5">
                <span>Saturday</span>
                <span className="font-semibold text-white">09:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-white">09:00 AM – 09:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persistent Call-to-action to buy this layout (Agency Conversion) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-stone-950/90 backdrop-blur-md border-t border-amber-900/40 py-3 shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-amber-100 text-xs sm:text-sm font-semibold">
            👉 Want a professional website like <strong className="text-white">Brew & Crumb</strong> for your cafe?
          </p>
          <a
            href={agencyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-slate-950 hover:text-white font-bold text-xs uppercase transition-all shadow shadow-brand-whatsapp/20"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Get this Site in 5 Days</span>
          </a>
        </div>
      </div>
    </div>
  );
}
