// import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { useState, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ArrowRight, Check, Clock3, FlaskConical, HeartPulse, Leaf, Mail, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, Stethoscope, Store, X } from 'lucide-react';
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.jpeg";
import img6 from "./images/img6.jpeg";
import img7 from "./images/img7.jpeg";
import img8 from "./images/img8.jpeg";
import img9 from "./images/img9.jpeg";
import img10 from "./images/img10.jpeg";

const queryClient = new QueryClient();
const phone = '7765971510';
const whatsapp = 'https://wa.me/917765971510';
const email = 'ramkrishnahomeo@gmail.com';
const mapsLink = 'https://maps.app.goo.gl/UebZ9TUCkw3Mgd4c6';
const doctorName = 'Dr. Ramkrishna Prasad';
const doctorEducation = 'B.H.M.S ( Reg No. - BR/3447/21 )';


const navItems = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Products', '#products'],
  ['Services', '#services'],
  ['Doctor', '#doctor'],
  ['Contact', '#contact'],
  ['Gallery', '#gallery'],
];

const products = [
  { title: 'Everyday Care', hi: 'दैनिक देखभाल', body: 'Cold, cough, fever and family essentials.', icon: HeartPulse },
  { title: 'Skin & Hair', hi: 'त्वचा और बाल', body: 'Gentle support for your daily skin wellness.', icon: Leaf },
  { title: 'Digestive Wellness', hi: 'पाचन स्वास्थ्य', body: 'Thoughtful options for a lighter, happier gut.', icon: FlaskConical },
  { title: 'Women & Child Care', hi: 'महिला एवं शिशु देखभाल', body: 'Caring solutions for every generation.', icon: ShieldCheck },
];

const services = [
  { title: 'Homeopathic Medicines', body: 'Trusted remedies, carefully selected for your family.', icon: FlaskConical },
  { title: 'Homeopathic Consultation', body: 'Baat karke samjhein — guidance that starts with listening.', icon: Stethoscope },
  { title: 'Availability Check', body: 'Call or WhatsApp before you visit. We will check it for you.', icon: Phone },
  { title: 'Health & Wellness', body: 'Everyday products to help your home feel well cared for.', icon: HeartPulse },
];

const photoSlots = [
  { id: 'shop-front', title: 'Shop front', image: img1 },
  { id: 'medicine-shelf', title: 'Medicine shelves', image: img2 },
  { id: 'consultation', title: 'Consultation space', image: img3 },
  { id: 'wellness-products', title: 'Wellness products', image: img4 },
  { id: 'clinic-interior', title: 'Clinic interior', image: img5 },
  { id: 'homeopathic-medicines', title: 'Homeopathic medicines', image: img6 },
  { id: 'medicine-display', title: 'Medicine display', image: img7 },
  { id: 'clinic-space', title: 'Clinic space', image: img8 },
  { id: 'health-products', title: 'Health and wellness products', image: img9 },
  { id: 'clinic-view', title: 'Ram Krishna Homeo Hall & Clinic', image: img10 },
];

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="Ram Krishna Homeo Hall and Clinic home">
      <span className="brand-mark">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
          <path d="M13 22V7M13 11C9.2 11 6.2 8.5 6.2 5.5C10.4 5.4 13 7.5 13 11ZM13 15C16.7 15 19.7 12.5 19.7 9.5C15.6 9.4 13 11.5 13 15Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 22h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
      <span>
        <span className="brand-name">Ram Krishna<br />Homeo Hall</span>
        <span className="brand-sub">Care, the natural way</span>
      </span>
    </a>
  );
}

function BottleArtwork() {
  return (
    <div className="hero-art" aria-label="Illustration of a homeopathic medicine bottle">
      <div className="art-orbit" />
      <svg className="leaf leaf-one" viewBox="0 0 150 100" fill="none" aria-hidden="true">
        <path d="M12 90C34 49 67 23 134 11C110 64 75 88 12 90Z" fill="currentColor" fillOpacity=".14" stroke="currentColor" strokeWidth="1.3" />
        <path d="M19 84C58 59 88 37 127 16M48 66l-3-19M73 51l1-20M98 36l8-15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <svg className="leaf leaf-two" viewBox="0 0 150 100" fill="none" aria-hidden="true">
        <path d="M12 90C34 49 67 23 134 11C110 64 75 88 12 90Z" fill="currentColor" fillOpacity=".14" stroke="currentColor" strokeWidth="1.3" />
        <path d="M19 84C58 59 88 37 127 16M48 66l-3-19M73 51l1-20M98 36l8-15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <Sparkles className="spark spark-a" size={26} strokeWidth={1.2} />
      <Sparkles className="spark spark-b" size={19} strokeWidth={1.2} />
      <div className="bottle">
        <div className="bottle-cap" />
        <div className="bottle-neck" />
        <div className="bottle-body">
          <div className="bottle-label">
            <div><small>RAM KRISHNA</small><strong>Homeo<br />Hall</strong><small>· MASHRAKH</small></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutIllustration() {
  return (
    <svg viewBox="0 0 430 290" fill="none" aria-hidden="true">
      <path d="M38 225C86 176 101 83 210 63C300 47 329 110 394 83" stroke="hsl(44 89% 58% / .5)" strokeWidth="1" strokeDasharray="4 7" />
      <path d="M107 216C142 171 128 108 191 91C236 79 252 118 289 97" stroke="hsl(45 27% 96% / .32)" strokeWidth="1" />
      <path d="M214 251C219 209 215 172 224 143" stroke="hsl(45 27% 96% / .7)" strokeWidth="2" strokeLinecap="round" />
      <path d="M220 190C186 186 162 164 154 133C188 134 214 151 220 190Z" fill="hsl(44 89% 58% / .7)" />
      <path d="M220 174C250 169 272 149 278 121C249 124 228 142 220 174Z" fill="hsl(45 27% 96% / .55)" />
      <path d="M220 218C190 214 173 199 166 177C194 178 214 191 220 218Z" fill="hsl(45 27% 96% / .32)" />
      <circle cx="224" cy="130" r="12" fill="hsl(45 27% 96% / .1)" stroke="hsl(45 27% 96% / .52)" />
      <circle cx="224" cy="130" r="4" fill="hsl(44 89% 58%)" />
      <path d="M44 226h350" stroke="hsl(45 27% 96% / .2)" />
      <path d="M78 214c-6-45 15-82 52-107M370 217c3-36-14-68-41-89" stroke="hsl(45 27% 96% / .2)" strokeWidth="1" />
    </svg>
  );
}

function AppContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [selectedPhotos, setSelectedPhotos] = useState<Record<string, string>>({});
  const [enquiryLinks, setEnquiryLinks] = useState<{ whatsapp: string; email: string } | null>(null);
  const [appointmentLink, setAppointmentLink] = useState<string | null>(null);

  const closeMenu = () => setMenuOpen(false);
  // const handlePhotoChange = (id: string, event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (!file) return;
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (typeof reader.result === 'string') {
  //       setSelectedPhotos((current) => ({ ...current, [id]: reader.result as string }));
  //     }
  //   };
  //   reader.readAsDataURL(file);
  // };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const contact = String(formData.get('contact') ?? '');
    const message = String(formData.get('message') ?? '');
    const enquiryMessage = `Namaste Ram Krishna Homeo Hall and Clinic,\n\nName: ${name}\nPhone/Email: ${contact}\nEnquiry: ${message}\n\nSent from the website.`;
    const enquiryText = encodeURIComponent(enquiryMessage);
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(enquiryMessage);
    setEnquiryLinks({
      whatsapp: `${whatsapp}?text=${enquiryText}`,
      email: `mailto:${email}?subject=${subject}&body=${body}`,
    });
    event.currentTarget.reset();
  };

  const handleAppointmentSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const age = String(formData.get('age') ?? '');
    const gender = String(formData.get('gender') ?? '');
    const appointmentMessage = `Namaste ${doctorName},\n\nI would like to book an appointment.\n\nName: ${name}\nAge: ${age}\nGender: ${gender}\n\nBooked from the website.`;
    const link = `${whatsapp}?text=${encodeURIComponent(appointmentMessage)}`;
    setAppointmentLink(link);
    window.open(link, '_blank', 'noopener,noreferrer');
    event.currentTarget.reset();
  };

  return (
    <div className="rk-shell">
      <div className="topline">
        <div className="container-rk topline-inner">
          <span>स्थानीय परिवारों की अपनी होम्योपैथिक दुकान · Your neighbourhood care partner</span>
          <div className="topline-right"><span>7 days open</span><span> 08:00 AM–02:00 PM and 3:00 PM-8:00 PM</span></div>
        </div>
      </div>
      <header className="navbar">
        <div className="container-rk" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />
          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          </nav>
          <a className="header-call" href={`tel:${phone}`} aria-label={`Call ${phone}`}><Phone size={16} /><span>Call 7765971510</span></a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container-rk hero-grid">
            <div className="hero-copy">
              <div className="eyebrow reveal">Mashrakh Station Road </div>
              <h1 className="display-title reveal delay-1">
                Homeopathic Care<br />
                <em>in Mashrakh</em><br />
                You Can Trust.
              </h1>
              <p className="reveal delay-2">
                Ram Krishna Homeo Hall & Clinic provides homeopathic medicines,
                consultation, and everyday wellness care on Mashrakh Station Road, Bihar.
                <span lang="hi"> आपके परिवार की सेहत, हमारी ज़िम्मेदारी।</span>
              </p>              <div className="hero-actions reveal delay-3">
                <a className="btn btn-primary" href={`tel:${phone}`}><Phone size={16} /> Call the store</a>
                <a className="btn btn-outline" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp us</a>
              </div>
              <div className="hero-note reveal delay-3"><Check size={16} /><span><strong>Open every day</strong> · 08:00 AM–02:00 PM and 3:00 PM-8:00 PM · Walk in or call ahead</span></div>
            </div>
            <BottleArtwork />
          </div>
        </section>

        <section className="trust-strip">
          <div className="container-rk trust-inner">
            <div className="trust-item"><Store size={22} /><span>Neighbourhood trusted<br />स्थानीय भरोसा</span></div>
            <div className="trust-item"><ShieldCheck size={22} /><span>Carefully sourced remedies<br />सही दवा, सही सलाह</span></div>
            <div className="trust-item"><Clock3 size={22} /><span>Open 7 days a week<br />आपके समय के अनुसार</span></div>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="container-rk about-grid">
            <div className="about-visual reveal"><div className="eyebrow" style={{ color: 'hsl(44 89% 58%)' }}>Our promise / हमारा वादा</div><AboutIllustration /><div className="about-badge"><strong>25+</strong><span>years of local care</span></div></div>
            <div className="about-copy reveal delay-1">
              <div className="eyebrow">About Ram Krishna Homeo Hall and Clinic</div>
              <h2>Homeopathic Care for Families in Mashrakh.</h2>              <p>
                Ram Krishna Homeo Hall and Clinic is a family-run homeopathic medical
                store and clinic on Mashrakh Station Road, Masrakh, Bihar. For more
                than two decades, our approach has stayed simple: listen carefully,
                suggest thoughtfully, and make finding the right medicine less stressful.
              </p>
              <p lang="hi">यहाँ हर परिवार को सम्मान, धैर्य और सच्ची सलाह मिलती है।</p>
              <div className="point-list">
                <div className="point"><Check size={17} /> Genuine homeopathic medicines</div>
                <div className="point"><Check size={17} /> Friendly guidance, without the rush</div>
                <div className="point"><Check size={17} /> Easy availability checks on call</div>
              </div>
              <a className="btn btn-outline" href="#contact">Find us on the road <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="products section-pad" id="products">
          <div className="container-rk product-layout">
            <div className="product-intro reveal">
              <div className="eyebrow">A considered shelf</div>
              <h2 className="section-heading" style={{ marginTop: 15, marginBottom: 0 }}><span style={{ fontFamily: 'var(--app-font-serif)', fontSize: 'clamp(2.3rem,5vw,4.2rem)', lineHeight: 1, letterSpacing: '-.07em' }}>Everyday wellness,<br /><em style={{ color: 'hsl(var(--primary))', fontStyle: 'normal' }}>made personal.</em></span></h2>
              <p>From familiar family remedies to everyday health essentials, browse our categories or ask us what is in stock.</p>
              <div className="category-list"><div>Cold, Cough & Fever <span>01</span></div><div>Skin, Hair & Allergy <span>02</span></div><div>Digestive Care <span>03</span></div><div>Women & Child Care <span>04</span></div></div>
            </div>
            <div className="product-grid">
              {products.map(({ title, hi, body, icon: Icon }, index) => <article className="product-card reveal" style={{ animationDelay: `${index * .1}s` }} key={title}><div className="product-icon"><Icon size={21} /></div><h3>{title}<br /><span lang="hi" style={{ fontSize: '.72em', opacity: .65 }}>{hi}</span></h3><p>{body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="container-rk">
            <div className="section-heading reveal"><div className="eyebrow">How we help</div><h2>More than a medicine counter.</h2><p>Thoda samay, sahi salah, aur aapke liye ek familiar face. That is the Ram Krishna way.</p></div>
            <div className="service-list">
              {services.map(({ title, body, icon: Icon }, index) => <article className="service-item reveal" style={{ animationDelay: `${index * .1}s` }} key={title}><Icon size={25} strokeWidth={1.5} /><h3>{title}</h3><p>{body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="gallery section-pad" id="gallery">
          <div className="container-rk">
            <div className="section-heading reveal">
              <div className="eyebrow">Our Space / हमारी जगह</div>
              <h2>Take a glimpse of where care happens.</h2>
              <p>
                A look inside Ram Krishna Homeo Hall & Clinic —
                <span lang="hi"> आपकी सेहत और भरोसे का अपना स्थान।</span>
              </p>
            </div>            <div className="gallery-grid">
              {photoSlots.map(({ id, title, image }, index) => (
                <div
                  className={`gallery-card photo-card ${index === 0 ? 'large' : ''
                    } reveal ${index > 0 ? `delay-${Math.min(index, 3)}` : ''}`}
                  key={id}
                >
                  <img
                    src={image}
                    alt={`${title} at Ram Krishna Homeo Hall & Clinic, Mashrakh`}
                    loading="lazy"
                  />
                  <div className="photo-caption">{title}</div>
                </div>
              ))}
            </div>
            <br></br>
            <p className="photo-note"><Sparkles size={15} /> A glimpse of Ram Krishna Homeo Hall & Clinic — trusted care, familiar faces, and a place close to home. <strong>🌿</strong>.</p>
          </div>
        </section>

        <section className="doctor section-pad" id="doctor">
          <div className="container-rk contact-grid">
            <div className="contact-card reveal">
              <div className="eyebrow" style={{ color: 'hsl(44 89% 58%)' }}>Meet the doctor</div>
              <h3>{doctorName}</h3>
              <p>{doctorEducation} — homeopathic consultation available at Ram Krishna Homeo Hall and Clinic. Book a slot and we will confirm the timing with you on WhatsApp.</p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`tel:${phone}`}><Phone size={16} /> Call the doctor</a>
                <a className="btn btn-outline" style={{ borderColor: 'hsl(45 27% 96% / .35)', color: 'hsl(45 27% 96%)' }} href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
              </div>
              <div className="contact-details">
                <div className="detail"><Stethoscope size={17} /><span>Homeopathic Physician<br /><small>{doctorEducation}</small></span></div>
                <div className="detail"><Phone size={17} /><span>{phone}</span></div>
              </div>
            </div>
            <form className="contact-form reveal delay-1" onSubmit={handleAppointmentSubmit}>
              <div className="eyebrow">Book an appointment</div>
              <h3>Reserve your visit.<br /><span className="muted">Sent straight to WhatsApp.</span></h3>
              <div className="field"><label htmlFor="apt-name">PATIENT NAME</label><input required id="apt-name" name="name" placeholder="Full name" /></div>
              <div className="field"><label htmlFor="apt-age">AGE</label><input required type="number" min="0" max="120" id="apt-age" name="age" placeholder="Age in years" /></div>
              <div className="field">
                <label htmlFor="apt-gender">GENDER</label>
                <select required id="apt-gender" name="gender" defaultValue="">
                  <option value="" disabled>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button className="btn btn-primary" type="submit"><MessageCircle size={16} /> Book on WhatsApp</button>
              {appointmentLink && (
                <div className="form-success" role="status">
                  <strong>Opening WhatsApp…</strong>
                  <span>If it did not open automatically, tap below to send your appointment request to {doctorName}.</span>
                  <div className="enquiry-actions">
                    <a className="btn btn-primary" href={appointmentLink} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Send on WhatsApp</a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="container-rk contact-grid">
            <div className="contact-card reveal">
              <div className="eyebrow" style={{ color: 'hsl(44 89% 58%)' }}>Come by, call, or message</div>
              <h3>Let’s find what<br />you need.</h3>
              <p>Medicine availability check karni hai? We are only a call away. For urgent concerns, please consult a qualified medical professional.</p>
              <div className="contact-actions"><a className="btn btn-primary" href={`tel:${phone}`}><Phone size={16} /> Call now</a><a className="btn btn-outline" style={{ borderColor: 'hsl(45 27% 96% / .35)', color: 'hsl(45 27% 96%)' }} href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a></div>
              <div className="contact-details">
                <div className="detail">
                  <MapPin size={17} />
                  <span>
                    <a
                      href={mapsLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      Ram Krishna Homeo Hall & Clinic
                    </a>
                    <br />
                    <small>Mashrakh Station Road, Masrakh, Bihar 841417</small>
                  </span>
                </div>                <div className="detail"><Clock3 size={17} /><span>Open all 7 days ·  08:00 AM–02:00 PM and 3:00 PM-8:00 PM</span></div>
                <div className="detail"><Mail size={17} /><span>ramkrishnahomeo@gmail.com</span></div>
              </div>
            </div>
            <form className="contact-form reveal delay-1" onSubmit={handleSubmit}>
              <div className="eyebrow">Send an enquiry</div>
              <h3>Ask us anything.<br /><span className="muted">We’ll get back to you.</span></h3>
              <div className="field"><label htmlFor="name">YOUR NAME</label><input required id="name" name="name" placeholder="How should we call you?" /></div>
              <div className="field"><label htmlFor="contact-detail">PHONE OR EMAIL</label><input required id="contact-detail" name="contact" placeholder="Your preferred contact" /></div>
              <div className="field"><label htmlFor="message">HOW CAN WE HELP?</label><textarea required id="message" name="message" placeholder="Medicine availability, consultation, or a general question..." /></div>
              <button className="btn btn-primary" type="submit">Prepare enquiry <ArrowRight size={16} /></button>
              {enquiryLinks && (
                <div className="form-success" role="status">
                  <strong>Your message is ready.</strong>
                  <span>Choose WhatsApp or email below to send it to Ram Krishna Homeo Hall and Clinic.</span>
                  <div className="enquiry-actions">
                    <a className="btn btn-primary" href={enquiryLinks.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Send on WhatsApp</a>
                    <a className="btn btn-outline" href={enquiryLinks.email}><Mail size={15} /> Send by email</a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container-rk footer-inner"><Logo /><span className="footer-note">© {new Date().getFullYear()} Ram Krishna Homeo Hall and Clinic<br />Made for our local families.</span></div>
      </footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Ram Krishna Homeo Hall and Clinic on WhatsApp"><MessageCircle size={21} /></a>
    </div>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  return <ErrorBoundary resetKey="ram-krishna-homeo-hall">{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RoutedErrorBoundary><AppContent /></RoutedErrorBoundary>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
