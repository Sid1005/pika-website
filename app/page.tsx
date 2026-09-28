'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const sectionIds = ['top', 'story', 'journey', 'projects', 'beyond', 'contact'];

const milestones = [
  ['2026 — now', 'MSc Motorsport Engineering', 'Oxford Brookes University', 'Deepening my focus on vehicle performance, thermal management, powertrain, and drivetrain systems.', 'yellow'],
  ['Jan — Jul 2026', 'Project Intern', 'Greaves Electric Mobility', 'Used CFD to improve two-wheeler airflow and designed a thermoelectric cooling system for the battery and MCU.', 'blue'],
  ['2023 — 2025', 'PowerTrain Head & Racer', 'Team Karting Manipal', 'Led engine, cooling, and drivetrain work from design through manufacture, assembly, testing, and race-day feedback.', 'red'],
  ['2022 — 2026', 'B.Tech Mechatronics Engineering', 'Manipal Institute of Technology', 'Built a multidisciplinary base across mechanics, electronics, controls, CAD, and analysis.', 'cream'],
] as const;

const projects = [
  ['01', 'Go-kart sprockets', 'Built to last', 'Designed and manufactured custom sprockets to improve durability and performance — work that developed into a patent application.'],
  ['02', 'Quickshifter & autoblipper', 'Shift, quicker', 'Developed a system for sharper go-kart gear transitions, combining mechanical understanding with race-focused performance thinking.'],
  ['03', 'Thermal management', 'Air is a tool', 'Modelled airflow around electric two-wheelers and optimised thermoelectric cooling for the battery and motor control unit.'],
];

export default function Home() {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { threshold: [0.35, 0.55, 0.75] });
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Priyanka Yohanna Ceri, home">PYC<span>°</span></a>
        <p className="header-note">Motorsport engineer / Oxford, UK</p>
        <a className="contact-pill" href="mailto:priyanka.ceri@gmail.com">Say hello <span aria-hidden="true">↗</span></a>
      </header>

      <nav className="dock" aria-label="Page sections">
        {([['top', 'Start'], ['journey', 'Journey'], ['projects', 'Builds'], ['beyond', 'Beyond']] as const).map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id || (id === 'top' && active === 'story') ? 'active' : ''}>{label}</a>
        ))}
      </nav>

      <aside className="section-rail" aria-label="Scroll progress">
        {sectionIds.map((id, index) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-label={`Go to section ${index + 1}`}>
            <span>{String(index + 1).padStart(2, '0')}</span>
          </a>
        ))}
      </aside>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Mechatronics × Motorsport</p>
          <h1>I build things <span>that move.</span></h1>
          <p className="hero-intro">I’m Priyanka — a powertrain engineer, CFD enthusiast, and go-kart racer turning ambitious ideas into machines you can feel.</p>
        </div>
        <div className="hero-visual" aria-label="Priyanka in the Team Karting Manipal go-kart">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="photo-frame">
            <Image src="/images/priyanka-kart.jpg" alt="Priyanka smiling from the driver’s seat of her team’s go-kart" fill preload sizes="(max-width: 800px) 76vw, 34vw" className="hero-photo" />
          </div>
          <div className="race-badge"><strong>01</strong><span>Engineer<br />&amp; racer</span></div>
        </div>
        <a className="scroll-cue" href="#story"><span>Scroll to start</span><b aria-hidden="true">↓</b></a>
      </section>

      <section className="manifesto snap-section" id="story">
        <div className="manifesto-kicker">My favourite question is</div>
        <h2>“How can we make it <em>better?</em>”</h2>
        <div className="manifesto-grid">
          <p>I like the whole journey: understanding the problem, sketching the system, modelling it, making it, and learning from what happens on the track.</p>
          <div className="mini-stats" aria-label="Highlights">
            <div><strong>3</strong><span>patent applications</span></div>
            <div><strong>1st</strong><span>EV business plan</span></div>
            <div><strong>4th</strong><span>overall, EV category</span></div>
          </div>
        </div>
      </section>

      <section className="journey snap-section" id="journey">
        <div className="section-heading"><p className="eyebrow inverse">The route so far</p><h2>Learning by<br /><em>doing.</em></h2></div>
        <div className="timeline">
          {milestones.map(([years, role, place, note, color], index) => (
            <article className={`milestone ${color}`} key={role}>
              <span className="milestone-index">0{index + 1}</span><p className="milestone-years">{years}</p>
              <h3>{role}</h3><h4>{place}</h4><p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team-story snap-section">
        <div className="team-photo image-card">
          <Image src="/images/team-karting.jpg" alt="Priyanka with Team Karting Manipal around their go-kart" fill sizes="(max-width: 900px) 92vw, 62vw" />
          <span>Team Karting Manipal</span>
        </div>
        <div className="team-copy">
          <p className="eyebrow">The people part</p><h2>Engineering is a team sport.</h2>
          <p>As PowerTrain Head, I coordinated manufacturing and testing while working across disciplines to deliver a complete kart. As the team’s racer, I could turn what I felt behind the wheel into practical engineering feedback.</p>
          <blockquote>Design it. Build it. Test it. Listen. Repeat.</blockquote>
        </div>
      </section>

      <section className="projects snap-section" id="projects">
        <div className="projects-title"><p className="eyebrow inverse">Selected engineering</p><h2>Ideas with<br /><em>traction.</em></h2></div>
        <div className="project-stack">
          {projects.map(([number, label, title, copy]) => (
            <article className="project-card" key={number}>
              <span>{number}</span><div><p>{label}</p><h3>{title}</h3></div><p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="project-gallery" aria-label="Inside the engineering and racing process">
          <div className="gallery-shot gallery-wide">
            <Image src="/images/race-wide.jpg" alt="A go-kart accelerating across the circuit" fill sizes="(max-width: 800px) 92vw, 55vw" />
          </div>
          <div className="gallery-shot gallery-detail">
            <Image src="/images/gearbox.jpg" alt="Close-up of the kart gearbox and clutch mechanism" fill sizes="(max-width: 800px) 44vw, 25vw" />
          </div>
          <div className="gallery-shot gallery-grid">
            <Image src="/images/race-grid.jpg" alt="Go-karts and drivers lined up in the pit lane" fill sizes="(max-width: 800px) 44vw, 20vw" />
          </div>
        </div>
        <div className="tools-loop" aria-label="Software tools"><div>SolidWorks ✦ ANSYS Fluent ✦ Siemens NX ✦ CATIA ✦ STAR-CCM+ ✦ Fusion 360 ✦ HyperMesh CFD ✦</div></div>
      </section>

      <section className="beyond snap-section" id="beyond">
        <div className="beyond-copy">
          <p className="eyebrow">Beyond the CAD screen</p><h2>I don’t just calculate performance. <em>I feel it.</em></h2>
          <p>At the Formula Karting Design Challenge, I became the competition’s first and only female go-kart driver. Racing taught me to stay calm, notice the small signals, and make decisions at speed — habits I carry into every engineering problem.</p>
        </div>
        <div className="track-photo image-card">
          <Image src="/images/track-day.jpg" alt="Priyanka and her team preparing their kart on the track" fill sizes="(max-width: 900px) 92vw, 48vw" />
          <span>Race day / Formula Karting Design Challenge</span>
        </div>
        <div className="beyond-note">Curious mind.<br />Steady hands.<br />Fast laps.</div>
      </section>

      <section className="contact snap-section" id="contact">
        <p className="eyebrow">Let’s make something move</p><h2>Have a problem<br />worth <em>solving?</em></h2>
        <p className="contact-copy">I’m building my future in motorsport, powertrain, drivetrain, CFD, and vehicle performance. If that overlaps with your world, I’d love to hear from you.</p>
        <div className="contact-actions">
          <a href="mailto:priyanka.ceri@gmail.com">Email me <span>↗</span></a>
          <a href="/Priyanka-Yohanna-Ceri-CV.pdf" download>Download CV <span>↓</span></a>
        </div>
        <Image className="signature" src="/images/signature.jpg" alt="Priyanka’s signature" width={500} height={376} />
        <footer><span>Priyanka Yohanna Ceri</span><span>Oxford, UK · 2026</span></footer>
      </section>
    </main>
  );
}
