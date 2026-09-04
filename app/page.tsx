import {
  ArrowLeft,
  ArrowUpLeft,
  Battery,
  CarFront,
  Check,
  CircleGauge,
  Clock3,
  Disc3,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
  Youtube,
  type LucideIcon,
} from "lucide-react";

const services = [
  { title: "عیب‌یابی خودرو", desc: "عیب‌یابی با دستگاه‌های پیشرفته", icon: CircleGauge },
  { title: "تعمیر موتور", desc: "تعمیر تخصصی و اصولی موتور", icon: Wrench },
  { title: "جلوبندی و تعلیق", desc: "تنظیم و تعمیر دقیق سیستم خودرو", icon: CarFront },
  { title: "سیستم ترمز", desc: "تعمیر و سرویس انواع سیستم ترمز", icon: Disc3 },
  { title: "تعویض روغن و سرویس", desc: "تعویض روغن، فیلتر و سرویس دوره‌ای", icon: Sparkles },
  { title: "اگزوز", desc: "تعمیر و سرویس اگزوز و کاتالیزور", icon: ArrowLeft },
  { title: "برق و باتری", desc: "عیب‌یابی برق و شارژ و باتری", icon: Battery },
  { title: "سیستم فرمان", desc: "تعمیر و تنظیم فرمان و جعبه فرمان", icon: Target },
];

const brands = ["PEUGEOT", "IKCO", "SAIPA", "MVM", "CHERY", "KIA", "HYUNDAI"];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">
          <span className="brandMark"><Wrench size={20}/></span>
          <span>تعمیرگاه خودرو امین</span>
        </a>
        <nav>
          <a className="active" href="#top">صفحه اصلی</a>
          <a href="#services">خدمات</a>
          <a href="#about">درباره ما</a>
          <a href="#work">نمونه کارها</a>
          <a href="#contact">تماس با ما</a>
        </nav>
        <a className="navPhone" href="tel:09155209693"><Phone size={14}/> ۰۹۱۵ ۵۲۰ ۹۶۹۳</a>
        <button className="mobileMenu" aria-label="منو"><Menu/></button>
      </header>

      <section id="top" className="hero">
        <div className="heroOverlay"/>
        <div className="heroContent">
          <div className="eyebrow"><span/> تعمیرگاه تخصصی خودرو در مشهد</div>
          <h1>تعمیر درست،<br/><em>نه تعویض بی‌دلیل.</em></h1>
          <p>تخصص در عیب‌یابی، تعمیر و سرویس خودروهای ایرانی، چینی و خارجی با دستگاه‌های پیشرفته و تکنسین‌های مجرب.</p>
          <div className="actions">
            <a className="btn primary" href="tel:09155209693">تماس با تعمیرگاه <Phone size={18}/></a>
            <a className="btn ghost" href="https://maps.google.com/?q=Mashhad,+SeyedRezi,+No.200" target="_blank">مسیریابی <MapPin size={18}/></a>
          </div>
        </div>
        <div className="heroBadge"><span>+۲۰</span><small>سال تجربه</small></div>
      </section>

      <section className="trustStrip">

  {[
    {
      num: "۰۱",
      title: "عیب‌یابی دقیق",
      desc: "با دستگاه‌های تخصصی روز دنیا",
      Icon: Target,
    },
    {
      num: "۰۲",
      title: "تعمیر تخصصی",
      desc: "توسط تکنسین‌های با تجربه",
      Icon: Wrench,
    },
    {
      num: "۰۳",
      title: "قیمت منصفانه",
      desc: "شفافیت در هزینه و کیفیت خدمات",
      Icon: ShieldCheck,
    },
    {
      num: "۰۴",
      title: "تجربه و اعتماد",
      desc: "رضایت مشتریان اولویت ماست",
      Icon: Check,
    },
  ].map(({ num, title, desc, Icon }: {
    num: string;
    title: string;
    desc: string;
    Icon: LucideIcon;
  }) => {

    return (
      <div className="trustItem" key={num}>
        <b>{num}</b>
        <Icon />
        <div>
          <strong>{title}</strong>
          <small>{desc}</small>
        </div>
      </div>
    );

  })}

</section>

      <section id="services" className="section">
        <div className="sectionHead">
          <span className="orangeLabel">خدمات ما</span>
          <h2>ما چه خدماتی ارائه می‌دهیم؟</h2>
          <span className="line"/>
        </div>
        <div className="serviceGrid">
          {services.map((s, i) => {
            const Icon = s.icon;
            return <article className="serviceCard" key={s.title}>
              <div className={`serviceVisual v${i+1}`}><Icon size={34}/></div>
              <div className="serviceText"><h3>{s.title}</h3><p>{s.desc}</p></div>
              <ArrowUpLeft className="cardArrow" size={18}/>
            </article>
          })}
        </div>
      </section>

      <section id="work" className="beforeAfter section">
        <div className="baCopy">
          <span className="orangeLabel">قبل و بعد</span>
          <h2>مشکل خودرو را پیدا می‌کنیم،<br/><em>نه اینکه حدس بزنیم.</em></h2>
          <p>تعمیر دقیق با قطعات اصلی و رعایت استانداردهای فنی؛ هدف ما تعمیر اصولی و ماندگار است.</p>
          <a className="btn ghost small" href="#contact">مشاهده بیشتر <ArrowLeft size={17}/></a>
        </div>
        <div className="comparison">
          <div className="compareImg before"><span>قبل از تعمیر</span></div>
          <div className="compareImg after"><span>بعد از تعمیر</span></div>
          <div className="compareDivider"><i/></div>
        </div>
      </section>

      <section className="brands section">
        <div className="sectionHead">
          <span className="orangeLabel">برندهای تحت پوشش</span>
          <h2>تعمیر انواع خودروهای ایرانی، چینی و خارجی</h2>
        </div>
        <div className="brandGrid">{brands.map(b => <div className="brandBox" key={b}>{b}</div>)}</div>
      </section>

      <section id="about" className="about section">
        <div className="workshopImage"><span>+۵۰۰۰</span><small>مشتری راضی</small></div>
        <div className="aboutCopy">
          <span className="orangeLabel">چرا تعمیرگاه امین؟</span>
          <h2>کیفیت، اعتماد، تخصص</h2>
          <ul>
            {["استفاده از قطعات اصلی و باکیفیت","تکنسین‌های مجرب و دانش فنی","دستگاه‌های عیب‌یابی پیشرفته","شفافیت خدمات و پشتیبانی","توجه به موقع و قیمت منصفانه"].map(x => <li key={x}><Check size={15}/>{x}</li>)}
          </ul>
        </div>
        <div className="stats">
          <div><strong>5000+</strong><span>مشتری راضی</span></div>
          <div><strong>10+</strong><span>سال تجربه کاری</span></div>
          <div><strong>100%</strong><span>رضایت خدمات</span></div>
          <div><strong>98%</strong><span>کیفیت خدمات</span></div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="map">
          <div className="mapGrid"/><MapPin className="pin" size={44}/>
        </div>
        <div className="contactCopy">
          <span className="orangeLabel">موقعیت تعمیرگاه</span>
          <h2>تعمیرگاه خودرو امین</h2>
          <div className="contactLine"><MapPin/><span>مشهد، بلوار سیدرضی، پلاک ۲۰۰</span></div>
          <div className="contactLine"><Phone/><a href="tel:09155209693">۰۹۱۵ ۵۲۰ ۹۶۹۳</a></div>
          <div className="contactLine"><Clock3/><span>همه‌روزه ۸:۰۰ – ۲۰:۰۰</span></div>
          <div className="actions">
            <a className="btn primary" href="tel:09155209693">تماس فوری <Phone size={17}/></a>
            <a className="btn ghost" href="https://maps.google.com/?q=Mashhad,+SeyedRezi,+No.200" target="_blank">مسیریابی <MapPin size={17}/></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="socials"><Instagram/><Facebook/><Youtube/></div>
        <span>© تمامی حقوق این سایت متعلق به تعمیرگاه خودرو امین است.</span>
        <span>طراحی و توسعه وب</span>
      </footer>
    </main>
  );
}
