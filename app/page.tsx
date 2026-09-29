'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const sectionIds = ['top', 'journey', 'workshop', 'beyond', 'contact'];

const milestones = [
  ['2026 — now', 'MSc Motorsport Engineering', 'Oxford Brookes University', 'Deepening my focus on vehicle performance, thermal management, powertrain, and drivetrain systems.', 'yellow'],
  ['Jan — Jul 2026', 'Project Intern', 'Greaves Electric Mobility', 'Used CFD to improve two-wheeler airflow and designed a thermoelectric cooling system for the battery and MCU.', 'blue'],
  ['2023 — 2025', 'PowerTrain Head & Racer', 'Team Karting Manipal', 'Led engine, cooling, and drivetrain work from design through manufacture, assembly, testing, and race-day feedback.', 'red'],
  ['2022 — 2026', 'B.Tech Mechatronics Engineering', 'Manipal Institute of Technology', 'Built a multidisciplinary base across mechanics, electronics, controls, CAD, and analysis.', 'cream'],
] as const;

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
        {([['top', 'Start'], ['journey', 'Journey'], ['workshop', 'Workshop'], ['beyond', 'Beyond']] as const).map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
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
          <p className="hero-intro">MSc Motorsport Engineering student at Oxford Brookes University, passionate about powertrains, CFD, and turning analysis into real-world performance.</p>
        </div>
        <div className="hero-visual" aria-label="Priyanka in the Team Karting Manipal go-kart">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="photo-frame">
            <Image src="/images/priyanka-kart.jpg" alt="Priyanka smiling from the driver’s seat of her team’s go-kart" fill preload sizes="(max-width: 800px) 76vw, 34vw" className="hero-photo" />
          </div>
          <div className="race-badge"><strong>01</strong><span>Engineer<br />&amp; racer</span></div>
        </div>
        <a className="scroll-cue" href="#journey"><span>Scroll to start</span><b aria-hidden="true">↓</b></a>
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

      <section className="workshop snap-section" id="workshop">
        <div className="workshop-copy">
          <p className="eyebrow inverse">Where ideas meet steel</p>
          <h2>Hands on.<br /><em>Always.</em></h2>
          <p>For me, engineering does not stop at the CAD screen. I want to understand how a component is cut, fitted, assembled, tested, and improved in the real world.</p>
          <span className="workshop-index">03 / MAKE IT REAL</span>
        </div>
        <div className="fabrication-photo">
          <Image src="/images/fabrication.jpg" alt="Priyanka using an angle grinder in the fabrication workshop" fill sizes="(max-width: 900px) 92vw, 58vw" />
          <span>Fabrication / Manipal</span>
        </div>
        <div className="fkdc-poster">
          <Image src="/images/powertrain-ceri-24.jpg" alt="Priyanka wearing her Powertrain Ceri 24 team shirt" fill sizes="(max-width: 900px) 42vw, 19vw" />
        </div>
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
