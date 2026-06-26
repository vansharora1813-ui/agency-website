import { Stethoscope, Calendar, Phone, MapPin, Star, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export default function ClinicDemo() {
  const whatsappNum = "919999999999";
  const agencyMessage = "Hi! I saw the Clinic Demo website and I want a similar website for my clinic.";
  const encodedAgencyMsg = encodeURIComponent(agencyMessage);
  const agencyUrl = `https://wa.me/${whatsappNum}?text=${encodedAgencyMsg}`;

  const clinicMessage = "Hi CarePlus Clinic! I want to request an appointment schedule.";
  const encodedClinicMsg = encodeURIComponent(clinicMessage);
  const clinicUrl = `https://wa.me/${whatsappNum}?text=${encodedClinicMsg}`;

  return (
    <div className="bg-slate-900 text-slate-100 font-sans min-h-screen relative pb-20">
      {/* Sticky Top Agency Promo Line */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary py-2 text-center text-xs font-bold text-white relative z-50">
        Demo Mode: This is a premium website layout we can build for you.
      </div>

      {/* Clinic Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded bg-sky-500/10 text-sky-400">
              <Stethoscope className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">CarePlus Clinic</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-semibold text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">Our Approach</a>
            <a href="#services" className="hover:text-white transition-colors">Treatments</a>
            <a href="#doctors" className="hover:text-white transition-colors">Our Team</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <a
            href={clinicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-sky-505 hover:bg-sky-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-sky-500/10"
          >
            Book Slot
          </a>
        </div>
      </header>

      {/* Clinic Hero */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
        {/* Medical blue glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>WHO Cleanliness Certified Clinic</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Compassionate <br />
              <span className="text-sky-400">Medical Care</span> <br />
              for Your Family.
            </h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              Experienced specialist doctors providing patient-focused diagnosis, general therapeutics, and dental care in DW Dwarka.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={clinicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-sky-450 hover:bg-sky-500 text-slate-950 font-bold text-sm uppercase transition-all shadow-lg shadow-sky-400/15"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl border border-slate-800 hover:border-slate-700 text-slate-350 font-bold text-sm uppercase transition-all"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Side card containing schedule */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl border border-slate-800 bg-slate-950/60 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-sky-400 tracking-wider">APPOINTMENTS</p>
                  <h3 className="text-lg font-bold">Book Slots Instantly</h3>
                </div>
                <Calendar className="w-5 h-5 text-sky-400" />
              </div>

              <div className="space-y-3.5">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-850 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <span className="text-slate-400 font-medium">Availability Today</span>
                  </div>
                  <span className="font-bold text-emerald-400">3 Slots Left</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2.5 bg-slate-900 rounded border border-slate-850">
                    <p className="font-bold text-white">05:30 PM</p>
                    <p className="text-[9px] text-slate-500">Dr. Rajesh</p>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded border border-slate-850">
                    <p className="font-bold text-white">07:00 PM</p>
                    <p className="text-[9px] text-slate-500">Dr. Sunita (Dental)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">TREATMENTS & CARE</span>
            <h2 className="text-3xl font-extrabold text-white">Our Healthcare Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "General Medicine", desc: "Consultations, health checkups, and prescription diagnostic services.", rate: "₹400 Consultation" },
              { title: "Specialist Dental", desc: "Root canals, scaling, orthodontic braces, and cosmetic dentistry.", rate: "Varies by treatment" },
              { title: "Pediatric Consultation", desc: "Child vaccination, developmental checks, and infant growth charts.", rate: "₹500 Consultation" },
              { title: "Preventive Lab Panels", desc: "Complete blood count, cholesterol, thyroid, and vitamin markers.", rate: "Packages from ₹1,200" }
            ].map((srv, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-slate-850 rounded-xl hover:border-sky-500/20 transition-all flex flex-col justify-between h-52">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">{srv.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{srv.desc}</p>
                </div>
                <div className="text-[10px] text-slate-500 border-t border-slate-850 pt-3 flex items-center justify-between font-bold">
                  <span>Charge</span>
                  <span className="text-sky-400 uppercase">{srv.rate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Team */}
      <section id="doctors" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">EXPERT MEDICAL STAFF</span>
            <h2 className="text-3xl font-extrabold text-white">Meet Our Specialist Doctors</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            {[
              { name: "Dr. Rajesh Kumar", spec: "Senior General Physician", edu: "MBBS, MD (Medicine) - 15+ Yrs Exp", detail: "Expert in lifestyle diseases, hypertension, and family health management." },
              { name: "Dr. Sunita Rao", spec: "Cosmetic Dentist", edu: "BDS, MDS (Orthodontics) - 10+ Yrs Exp", detail: "Specializes in pain-free root canals and modern braces treatments." },
              { name: "Dr. Manoj Sharma", spec: "Consultant Pediatrician", edu: "MBBS, DCH (Pediatrics) - 12+ Yrs Exp", detail: "Experienced in newborn health screening and childhood immunity panels." }
            ].map((doc, i) => (
              <div key={i} className="p-6 bg-slate-950 border border-slate-850 rounded-xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-white">{doc.name}</h3>
                    <p className="text-sky-400 text-xs font-semibold">{doc.spec}</p>
                  </div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase">{doc.edu}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{doc.detail}</p>
                </div>
                <div className="border-t border-slate-850 pt-3 mt-4 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Status: Available Today
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-20 bg-slate-950 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">PATIENT STORIES</span>
            <h2 className="text-3xl font-extrabold text-white">What Our Patients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {[
              { name: "Ramesh Nair", quote: "Dr. Rajesh is extremely patient. He explained the diagnosis in simple terms and didn't prescribe unnecessary antibiotics. Strongly recommended physician in Dwarka.", rating: 5 },
              { name: "Pooja Malhotra", quote: "Got my root canal done by Dr. Sunita. I was terrified of dental drills, but she made it completely painless and comfortable. Excellent infrastructure.", rating: 5 }
            ].map((test, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-slate-850 rounded-xl space-y-3">
                <div className="flex gap-1 text-sky-455">
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-350 text-xs italic leading-relaxed">"{test.quote}"</p>
                <p className="text-white font-bold text-xs">- {test.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Contact */}
      <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4 text-left">
            <h3 className="text-xl font-bold text-white">CarePlus Dwarka Clinic</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              We provide clean outpatient rooms, immediate emergency first-aid, and standard pharmacy pick-ups.
            </p>
            <div className="space-y-2 text-xs text-slate-350">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Sector 12, Main Market Road, Dwarka, New Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>+91 99999 99999</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-850 space-y-4 text-left">
            <h4 className="text-sm font-bold tracking-wider uppercase text-sky-400">CLINIC HOURS</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex justify-between border-b border-slate-850 pb-1.5">
                <span>Mon – Sat (Morning)</span>
                <span className="font-semibold text-white">09:00 AM – 01:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-850 pb-1.5">
                <span>Mon – Sat (Evening)</span>
                <span className="font-semibold text-white">05:00 PM – 08:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-red-400">Emergency Call Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persistent Call-to-action to buy this layout (Agency Conversion) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-t border-sky-500/40 py-3 shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-slate-300 text-xs sm:text-sm font-semibold">
            👉 Want a professional website like <strong className="text-white">CarePlus Clinic</strong> for your clinic?
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
