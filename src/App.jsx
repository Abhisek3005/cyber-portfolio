import React, { useEffect, useMemo, useRef, useState } from "react";

const profile = {
  name: "Abhisek Das",
  role: "Technical Support Engineer | Aspiring Penetration Tester",
  currentRole: "Technical Support Engineer",
  location: "Bhubaneswar, India",
  email: "abhisekdas100304@gmail.com",
  github: "https://github.com/Abhisek3005",
  linkedin: "https://www.linkedin.com/in/abhisek-das-0052a5277",
  summary:
    "Technical Support Engineer transitioning into penetration testing and ethical hacking. Hands-on experience with web application security labs, OWASP testing, Linux fundamentals, reconnaissance, vulnerability assessment, and cybersecurity reporting through practical learning environments including Defronix DCJSP and DEHE labs.",
};

<section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
  <Reveal>
    <p className="section-kicker">Training & Labs</p>
    <h2 className="mb-8 mt-2 text-3xl font-black md:text-5xl">
      Cybersecurity learning journey
    </h2>
  </Reveal>

  <div className="grid gap-6 md:grid-cols-2">
    {training.map((item, index) => (
      <Reveal key={item.title} delay={index * 100}>
        <TiltCard>
          <Card className="project-card rounded-[1.5rem] border-emerald-300/10 bg-slate-900/70 backdrop-blur-xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-black text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </TiltCard>
      </Reveal>
    ))}
  </div>
</section>

const projects = [
  {
    title: "Phishing Attack Simulation & 2FA Bypass",
    description:
      "Built and deployed an educational phishing simulation environment using AWS EC2, PHP, Evilginx, and FileZilla to demonstrate credential capture risks and session-based 2FA bypass techniques in authorized lab environments.",
    tags: ["AWS", "PHP", "Evilginx", "Security Awareness"],
    link: "#",
  },
  {
    title: "Web Application Pentesting Lab",
    description:
      "Performed hands-on OWASP Top 10 practice including SQL Injection, authentication testing, XSS basics, request manipulation, and vulnerability validation using Burp Suite in legal lab environments.",
    tags: ["OWASP", "Burp Suite", "Web Security"],
    link: "#",
  },
  {
    title: "Network Reconnaissance Lab",
    description:
      "Practiced port scanning, service enumeration, DNS analysis, HTTP fingerprinting, and safe reconnaissance workflows using Nmap and Linux tools in controlled lab environments.",
    tags: ["Nmap", "Networking", "Linux"],
    link: "#",
  },
  {
    title: "Linux Privilege Escalation Fundamentals",
    description:
      "Explored Linux permissions, cron jobs, users, groups, SUID concepts, service enumeration, logging, and common privilege escalation fundamentals through beginner-friendly security labs.",
    tags: ["Linux", "Privilege Escalation", "Security"],
    link: "#",
  },
];

const skills = [
  "Linux",
  "Networking",
  "Nmap",
  "Burp Suite",
  "OWASP Top 10",
  "Web Application Testing",
  "Reconnaissance",
  "SQL Injection Basics",
  "XSS Basics",
  "Privilege Escalation Basics",
  "Security Reporting",
  "AWS EC2",
  "Kali Linux",
  "Log Analysis",
];
const training = [
  {
    title: "Defronix DCJSP",
    description:
      "Completed practical cybersecurity training focused on penetration testing fundamentals, networking, Linux, reconnaissance, web application testing, and reporting.",
  },
  {
    title: "Defronix DEHE Labs",
    description:
      "Hands-on ethical hacking lab practice covering scanning, enumeration, OWASP testing, Burp Suite basics, Linux fundamentals, and vulnerability assessment workflows.",
  },
];
const learningPath = [
  "Networking",
  "Linux",
  "Web Application Security",
  "OWASP Top 10",
  "Burp Suite",
  "Reconnaissance",
  "Privilege Escalation",
  "Pentest Reporting",
];

const stats = [
  { value: "Tech", label: "Support Background" },
  { value: "Labs", label: "Security Practice" },
  { value: "Junior", label: "Pentest Target Role" },
];

const terminalLines = [
  "booting portfolio_shell...",
  "loading authorized_lab_profile",
  "checking network fundamentals: OK",
  "mounting linux_notes: OK",
  "opening burp_practice.log",
  "building clean_report.md",
  "status: ready_for_junior_security_role",
];

const animationFeatures = [
  "full-page-3d-perspective",
  "glitch-title",
  "matrix-rain-layers",
  "floating-hacker-terminal",
  "hologram-security-shield",
  "rotating-terminal-cube",
  "network-node-graph",
  "vulnerability-radar",
  "3d-skill-tiles",
  "3d-project-cards",
  "3d-learning-rail",
  "cursor-glow",
  "reduced-motion-support",
];

function runPortfolioDataTests() {
  const failures = [];

  if (!profile.role.toLowerCase().includes("penetration tester")) {
    failures.push("Profile role should target penetration testing.");
  }

  if (!profile.currentRole.toLowerCase().includes("support")) {
    failures.push("Profile should mention current technical support background.");
  }

  if (!Array.isArray(projects) || projects.length < 4) {
    failures.push("Expected at least four pentesting-related portfolio projects.");
  }

  if (!Array.isArray(skills) || skills.length < 8) {
    failures.push("Expected at least eight relevant security/support skills.");
  }

  if (!Array.isArray(learningPath) || learningPath.length < 5) {
    failures.push("Expected a visible junior pentester learning path.");
  }

  [
    "full-page-3d-perspective",
    "glitch-title",
    "matrix-rain-layers",
    "floating-hacker-terminal",
    "hologram-security-shield",
    "rotating-terminal-cube",
    "network-node-graph",
    "vulnerability-radar",
    "3d-skill-tiles",
    "3d-project-cards",
    "3d-learning-rail",
    "cursor-glow",
    "reduced-motion-support",
  ].forEach((feature) => {
    if (!animationFeatures.includes(feature)) {
      failures.push(`Missing animation feature: ${feature}`);
    }
  });

  if (new Set(animationFeatures).size !== animationFeatures.length) {
    failures.push("Animation feature names should be unique.");
  }

  projects.forEach((project, index) => {
    if (!project.title || typeof project.title !== "string") {
      failures.push(`Project ${index + 1} is missing a title.`);
    }

    if (!project.description || project.description.length < 35) {
      failures.push(`Project ${project.title || index + 1} needs a fuller description.`);
    }

    if (!Array.isArray(project.tags) || project.tags.length < 2) {
      failures.push(`Project ${project.title || index + 1} needs at least two tags.`);
    }
  });

  return failures;
}

const portfolioDataTestFailures = runPortfolioDataTests();
if (portfolioDataTestFailures.length > 0 && typeof console !== "undefined") {
  console.warn("Portfolio data checks failed:", portfolioDataTestFailures);
}

function useCursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handlePointerMove(event) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return position;
}

function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Icon({ name, className = "", size = 18 }) {
  const baseProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  const icons = {
    mail: (
      <svg {...baseProps}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
    github: (
      <svg {...baseProps}>
        <path d="M15 22v-3.8a3.7 3.7 0 0 0-1-2.7c3.2-.4 6.5-1.6 6.5-7.1A5.5 5.5 0 0 0 19 3.6 5 5 0 0 0 18.9.2s-1.2-.4-3.9 1.5a13.5 13.5 0 0 0-7 0C5.3-.2 4.1.2 4.1.2A5 5 0 0 0 4 3.6a5.5 5.5 0 0 0-1.5 3.8c0 5.5 3.3 6.7 6.5 7.1a3.7 3.7 0 0 0-1 2.7V22" />
        <path d="M9 18c-4.5 1.8-4.5-2-6-2" />
      </svg>
    ),
    linkedin: (
      <svg {...baseProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    external: (
      <svg {...baseProps}>
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    ),
    location: (
      <svg {...baseProps}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    download: (
      <svg {...baseProps}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M7 10l5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
    ),
    shield: (
      <svg {...baseProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
    terminal: (
      <svg {...baseProps}>
        <path d="m4 17 6-6-6-6" />
        <path d="M12 19h8" />
      </svg>
    ),
  };

  return icons[name] || null;
}

function Button({ children, variant = "solid", className = "", href, ...rest }) {
  const variantClasses =
    variant === "outline"
      ? "border border-emerald-300/25 bg-emerald-300/5 text-emerald-50 hover:border-emerald-200/60 hover:bg-emerald-300/10"
      : "bg-emerald-300 text-slate-950 hover:bg-emerald-200";

  const classes = `button-3d button-shine inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-black tracking-wide transition ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        <span className="relative z-10 inline-flex items-center">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      <span className="relative z-10 inline-flex items-center">{children}</span>
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`card-3d rounded-3xl border shadow-2xl ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function TiltCard({ children, className = "", intensity = 14 }) {
  const [style, setStyle] = useState({});

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -intensity;
    const rotateY = ((x / rect.width) - 0.5) * intensity;

    setStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) translateZ(18px)`,
      "--spot-x": `${x}px`,
      "--spot-y": `${y}px`,
    });
  }

  function handleMouseLeave() {
    setStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px)",
      "--spot-x": "50%",
      "--spot-y": "50%",
    });
  }

  return (
    <div
      className={`tilt-card ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

function GlitchTitle({ text }) {
  return (
    <h1 className="glitch-title max-w-4xl text-5xl font-black uppercase leading-none tracking-tight md:text-7xl xl:text-8xl" data-text={text}>
      {text.split(" ").map((word, index) => (
        <span className="word-reveal inline-block overflow-hidden pr-4" key={`${word}-${index}`}>
          <span className="inline-block" style={{ "--delay": `${180 + index * 75}ms` }}>
            {word}
          </span>
        </span>
      ))}
    </h1>
  );
}

function MatrixColumns() {
  const columns = useMemo(() => {
    const glyphs = "01_$#{}[]<>/\\|rootnmapburphttpdnslogs";
    return Array.from({ length: 44 }, (_, columnIndex) => ({
      id: columnIndex,
      left: `${(columnIndex / 44) * 100}%`,
      delay: `${-(columnIndex % 12) * 0.7}s`,
      duration: `${9 + (columnIndex % 7)}s`,
      text: Array.from({ length: 32 }, (_, glyphIndex) => glyphs[(glyphIndex + columnIndex * 3) % glyphs.length]).join(""),
    }));
  }, []);

  return (
    <div className="matrix-columns" aria-hidden="true">
      {columns.map((column) => (
        <span
          key={column.id}
          className="matrix-column"
          style={{ left: column.left, animationDelay: column.delay, animationDuration: column.duration }}
        >
          {column.text}
        </span>
      ))}
    </div>
  );
}

function HackerTerminal() {
  return (
    <div className="hacker-terminal">
      <div className="terminal-topbar">
        <span />
        <span />
        <span />
        <strong>root@portfolio:~</strong>
      </div>
      <div className="terminal-body">
        {terminalLines.map((line, index) => (
          <p key={line} style={{ "--delay": `${index * 320}ms` }}>
            <span className="prompt">$</span> {line}
          </p>
        ))}
        <p className="terminal-cursor-line">
          <span className="prompt">$</span> <span className="typing-command">scan --career junior-pentest</span><span className="cursor-block" />
        </p>
      </div>
    </div>
  );
}

function Cyber3DLab() {
  const [sceneStyle, setSceneStyle] = useState({ "--scene-rx": "0deg", "--scene-ry": "0deg" });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setSceneStyle({
      "--scene-rx": `${y * -20}deg`,
      "--scene-ry": `${x * 26}deg`,
      "--scene-x": `${x * 34}px`,
      "--scene-y": `${y * 34}px`,
    });
  }

  function handleMouseLeave() {
    setSceneStyle({
      "--scene-rx": "0deg",
      "--scene-ry": "0deg",
      "--scene-x": "0px",
      "--scene-y": "0px",
    });
  }

  return (
    <div className="cyber-lab" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={sceneStyle}>
      <div className="lab-scanline" />
      <div className="lab-grid-floor" />
      <div className="lab-depth-ring ring-a" />
      <div className="lab-depth-ring ring-b" />
      <div className="lab-depth-ring ring-c" />

      <div className="lab-scene">
        <div className="holo-platform platform-main" />
        <div className="holo-platform platform-small" />

        <div className="shield-stage">
          <div className="shield-3d">
            <div className="shield-face shield-front">
              <Icon name="shield" size={58} />
              <span>SEC</span>
            </div>
            <div className="shield-face shield-back">AUTH</div>
            <div className="shield-edge edge-one" />
            <div className="shield-edge edge-two" />
          </div>
        </div>

        <div className="terminal-cube-stage">
          <div className="terminal-cube">
            <div className="terminal-face term-front">$ whoami</div>
            <div className="terminal-face term-back">support_to_pentest</div>
            <div className="terminal-face term-right">nmap basics</div>
            <div className="terminal-face term-left">burp practice</div>
            <div className="terminal-face term-top">linux</div>
            <div className="terminal-face term-bottom">reports</div>
          </div>
        </div>

        <div className="radar-3d">
          <div className="radar-ring radar-ring-one" />
          <div className="radar-ring radar-ring-two" />
          <div className="radar-ring radar-ring-three" />
          <div className="radar-sweep" />
          <span className="radar-dot dot-one" />
          <span className="radar-dot dot-two" />
          <span className="radar-dot dot-three" />
        </div>

        <div className="network-map">
          <span className="node node-a">DNS</span>
          <span className="node node-b">HTTP</span>
          <span className="node node-c">SSH</span>
          <span className="node node-d">LOG</span>
          <span className="link link-ab" />
          <span className="link link-bc" />
          <span className="link link-cd" />
        </div>

        <div className="binary-panel panel-one">010010 AUTHORIZED ONLY</div>
        <div className="binary-panel panel-two">PORTS • LOGS • EVIDENCE</div>
        <div className="binary-panel panel-three">RISK → REPORT → FIX</div>

        <div className="cmd-chip chip-one">authorized labs only</div>
        <div className="cmd-chip chip-two">report findings clearly</div>
        <div className="cmd-chip chip-three">learn • practice • document</div>
        <div className="cmd-chip chip-four">support mindset + security</div>
      </div>
    </div>
  );
}

function MarqueeStrip() {
const items = [
  "Pentesting",
  "OWASP",
  "Burp Suite",
  "Linux",
  "Nmap",
  "Reconnaissance",
  "Ethical Hacking",
  "AWS",
];
  return (
    <div className="marquee mt-16 border-y border-emerald-300/10 py-4 text-sm uppercase tracking-[0.35em] text-emerald-100/70">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="mx-6 inline-flex items-center gap-6">
            {item} <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/60 shadow-[0_0_18px_rgba(52,211,153,.9)]" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioStarter() {
  const cursor = useCursorGlow();

  return (
    <main
      className="scene-root relative min-h-screen overflow-hidden bg-slate-950 text-white"
      style={{ "--cursor-x": `${cursor.x}px`, "--cursor-y": `${cursor.y}px` }}
    >
      <div className="pointer-glow" />
      <div className="cyber-bg" />
      <MatrixColumns />
      <div className="grid-overlay" />
      <div className="scan-vignette" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 md:px-10">
        <nav className="glass-nav sticky top-4 z-20 flex items-center justify-between rounded-3xl px-5 py-4">
          <div className="flex items-center gap-3 text-lg font-black tracking-tight">
            <span className="nav-badge"><Icon name="shield" size={16} /></span>
            <span className="nav-name" data-text={profile.name}>{profile.name}</span>
          </div>
          <div className="hidden gap-6 text-sm font-bold uppercase tracking-[0.2em] text-emerald-100/75 md:flex">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="hero-copy-wrap">
            <p className="hero-pill mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/5 px-4 py-2 text-sm font-bold text-emerald-100 backdrop-blur">
              <Icon name="location" size={16} /> {profile.currentRole} · Learning Pentesting
            </p>
            <GlitchTitle text="Aspiring Junior Penetration Tester" />
            <p className="hero-copy mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {profile.summary} My focus is legal, authorized testing, clean documentation, and building a strong foundation before moving into a junior pentester role.
            </p>
            <div className="hero-actions mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`}>
                <Icon name="mail" className="mr-2" size={18} /> Contact Me
              </Button>
              <Button variant="outline" href="#projects">
                <Icon name="terminal" className="mr-2" size={18} /> View Security Labs
              </Button>
              <Button variant="outline" href="#">
                <Icon name="download" className="mr-2" size={18} /> Resume
              </Button>
            </div>

            <div className="hero-stats mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <TiltCard key={stat.label} intensity={10}>
                  <div className="stat-card" style={{ "--delay": `${1000 + index * 120}ms` }}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </TiltCard>
              ))}
            </div>

            <div className="mt-8 max-w-xl">
              <HackerTerminal />
            </div>
          </div>

          <div className="hero-card-wrap">
            <Cyber3DLab />
          </div>
        </div>

        <MarqueeStrip />
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="section-plate">
              <p className="section-kicker">Profile</p>
              <h2 className="mt-2 text-3xl font-black md:text-5xl">Support engineer moving into security.</h2>
            </div>
            <TiltCard intensity={8}>
              <div className="holo-text-card space-y-5 text-lg leading-8 text-slate-300">
                <p>
                  I currently work in technical support, where I troubleshoot real user issues, analyze symptoms, communicate clearly, and document fixes. That background helps me think like a practical security tester: understand impact, verify evidence, and explain risk in simple language.
                </p>
                <p>
  I completed Defronix DCJSP training and practical DEHE ethical hacking labs focused on reconnaissance, Linux, web application security, OWASP testing, enumeration, vulnerability assessment, and penetration testing fundamentals. My current focus is building strong real-world cybersecurity foundations through legal and authorized practice environments.
</p>
                <p className="rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-5 text-emerald-50 shadow-[0_24px_80px_rgba(0,0,0,.25)]">
                  Career goal: junior penetration tester / security analyst role where I can combine support experience, strong troubleshooting, and growing offensive-security fundamentals.
                </p>
              </div>
            </TiltCard>
          </div>
        </Reveal>
      </section>

      <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-10">
        <Reveal>
          <p className="section-kicker">Skill Stack</p>
          <h2 className="mb-8 mt-2 text-3xl font-black md:text-5xl">Junior pentester foundation</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Reveal key={skill} delay={index * 70}>
              <TiltCard>
                <Card className="skill-card border-emerald-300/10 bg-slate-900/70 backdrop-blur">
                  <CardContent className="relative z-10 flex items-center justify-between gap-4 p-5 text-slate-100">
                    <span className="font-bold">{skill}</span>
                    <span className="skill-cube-mini">{String(index + 1).padStart(2, "0")}</span>
                  </CardContent>
                </Card>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Reveal>
          <p className="section-kicker">Learning Roadmap</p>
          <h2 className="mb-8 mt-2 text-3xl font-black md:text-5xl">What I am building now</h2>
        </Reveal>
        <div className="learning-rail">
          {learningPath.map((item, index) => (
            <Reveal key={item} delay={index * 90}>
              <TiltCard intensity={9}>
                <div className="learning-step">
                  <div className="learning-orb">{index + 1}</div>
                  <div>
                    <h3>{item}</h3>
                    <p>Practicing fundamentals, writing notes, and converting learning into portfolio-ready evidence.</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker">Security Labs</p>
              <h2 className="mt-2 text-3xl font-black md:text-5xl">Pentesting portfolio projects</h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 110}>
              <TiltCard>
                <Card className="project-card rounded-[1.5rem] border-emerald-300/10 bg-slate-900/70 backdrop-blur-xl">
                  <CardContent className="relative z-10 flex h-full flex-col p-6">
                    <div className="project-cube-badge mb-6">0{index + 1}</div>
                    <h3 className="text-xl font-black text-white">{project.title}</h3>
                    <p className="mt-3 flex-1 leading-7 text-slate-300">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-chip rounded-full px-3 py-1 text-xs font-bold text-emerald-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="group mt-6 inline-flex items-center text-sm font-black text-emerald-100">
                      View write-up
                      <span className="ml-2 transition group-hover:translate-x-1">
                        <Icon name="external" size={16} />
                      </span>
                    </a>
                  </CardContent>
                </Card>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <Reveal>
          <TiltCard intensity={7}>
            <Card className="contact-card rounded-[2rem] border-emerald-300/25 bg-emerald-50 text-slate-950">
              <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:p-10">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-600">Contact</p>
                  <h2 className="mt-3 text-3xl font-black md:text-5xl">Open to junior security roles.</h2>
                  <p className="mt-4 max-w-2xl text-slate-700">
                    Looking for junior penetration testing, security analyst, SOC trainee, or security support opportunities where I can grow under experienced security teams.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 md:justify-end">
                  <Button className="bg-slate-950 text-white hover:bg-slate-800" href={`mailto:${profile.email}`}>
                    <Icon name="mail" className="mr-2" size={18} /> {profile.email}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-950 hover:bg-slate-100"
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="github" className="mr-2" size={18} /> GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-950 hover:bg-slate-100"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="linkedin" className="mr-2" size={18} /> LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TiltCard>
        </Reveal>
      </section>

      <style>{`
        html { scroll-behavior: smooth; }

        .scene-root {
          perspective: 1400px;
          transform-style: preserve-3d;
          isolation: isolate;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .cyber-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(circle at 15% 20%, rgba(16, 185, 129, 0.28), transparent 28%),
            radial-gradient(circle at 85% 10%, rgba(34, 211, 238, 0.18), transparent 30%),
            radial-gradient(circle at 50% 85%, rgba(132, 204, 22, 0.14), transparent 32%),
            linear-gradient(135deg, #020617 0%, #01040f 46%, #02160f 100%);
          filter: blur(1px);
          animation: cyberShift 14s ease-in-out infinite alternate;
        }

        .matrix-columns {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          opacity: 0.18;
          pointer-events: none;
          mask-image: linear-gradient(to bottom, transparent, black 16%, black 72%, transparent);
        }

        .matrix-column {
          position: absolute;
          top: -70vh;
          width: 1ch;
          color: rgb(110, 231, 183);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.78rem;
          line-height: 1.12;
          text-shadow: 0 0 12px rgba(52,211,153,.8);
          word-break: break-all;
          animation-name: matrixFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .grid-overlay {
          position: fixed;
          inset: 0;
          z-index: 0;
          opacity: 0.22;
          background-image:
            linear-gradient(rgba(16, 185, 129, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.14) 1px, transparent 1px);
          background-size: 64px 64px;
          transform: rotateX(60deg) translateY(-16%) scale(1.45);
          transform-origin: top;
          mask-image: linear-gradient(to bottom, black, transparent 84%);
        }

        .scan-vignette {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px),
            radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.58));
          background-size: 100% 4px, 100% 100%;
          mix-blend-mode: screen;
          opacity: 0.42;
        }

        .pointer-glow {
          position: fixed;
          left: var(--cursor-x);
          top: var(--cursor-y);
          z-index: 1;
          width: 520px;
          height: 520px;
          pointer-events: none;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.18), transparent 62%);
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
        }

        .orb {
          position: fixed;
          z-index: 0;
          border-radius: 999px;
          filter: blur(24px);
          opacity: 0.38;
          pointer-events: none;
        }

        .orb-one {
          width: 220px;
          height: 220px;
          left: 8%;
          top: 28%;
          background: rgba(52, 211, 153, 0.35);
          animation: floatOne 9s ease-in-out infinite;
        }

        .orb-two {
          width: 260px;
          height: 260px;
          right: 8%;
          top: 16%;
          background: rgba(34, 211, 238, 0.22);
          animation: floatTwo 11s ease-in-out infinite;
        }

        .orb-three {
          width: 180px;
          height: 180px;
          right: 18%;
          bottom: 10%;
          background: rgba(132, 204, 22, 0.22);
          animation: floatThree 10s ease-in-out infinite;
        }

        .glass-nav {
          border: 1px solid rgba(52, 211, 153, 0.18);
          background: rgba(2, 6, 23, 0.68);
          backdrop-filter: blur(18px);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.08);
          animation: navDrop 800ms ease both;
          transform-style: preserve-3d;
        }

        .glass-nav::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(120deg, transparent, rgba(52,211,153,.16), transparent);
          transform: translateZ(20px);
        }

        .nav-badge {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 12px;
          background: rgba(52, 211, 153, 0.12);
          color: rgb(167, 243, 208);
          box-shadow: inset 0 0 18px rgba(52,211,153,0.16), 0 12px 34px rgba(0,0,0,.35);
          transform: rotateX(12deg) rotateY(-14deg) translateZ(18px);
        }

        .nav-name {
          position: relative;
          color: white;
          text-shadow: 0 0 18px rgba(52,211,153,.55);
        }

        .nav-name::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          color: rgb(52,211,153);
          transform: translate(1px, 0);
          opacity: .45;
          clip-path: inset(0 0 54% 0);
        }

        .nav-link {
          position: relative;
          transition: color 180ms ease, transform 180ms ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 1px;
          background: currentColor;
          box-shadow: 0 0 16px currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 220ms ease;
        }

        .nav-link:hover { color: rgb(167, 243, 208); transform: translateY(-2px) translateZ(12px); }
        .nav-link:hover::after { transform: scaleX(1); transform-origin: left; }

        .section-kicker {
          color: rgb(110 231 183);
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          text-shadow: 0 0 18px rgba(52,211,153,.6);
        }

        .section-plate {
          transform: rotateY(7deg) translateZ(22px);
          transform-style: preserve-3d;
        }

        .hero-copy-wrap { transform-style: preserve-3d; }
        .hero-pill { animation: fadeInUp 650ms ease 120ms both; box-shadow: 0 18px 60px rgba(0,0,0,.28); transform: translateZ(34px); }

        .glitch-title {
          position: relative;
          color: white;
          text-shadow:
            0 0 18px rgba(52,211,153,.55),
            0 0 44px rgba(34,211,238,.22);
          transform: rotateY(-7deg) translateZ(44px);
          transform-style: preserve-3d;
        }

        .glitch-title::before,
        .glitch-title::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .5;
          mix-blend-mode: screen;
        }

        .glitch-title::before {
          color: rgb(34, 211, 238);
          transform: translate3d(3px, -2px, -10px);
          animation: glitchSlice 2.7s infinite linear alternate-reverse;
        }

        .glitch-title::after {
          color: rgb(52, 211, 153);
          transform: translate3d(-3px, 2px, -18px);
          animation: glitchSlice 3.2s infinite linear alternate;
        }

        .word-reveal > span {
          transform: translateY(110%) rotate(4deg);
          animation: wordUp 850ms cubic-bezier(0.19, 1, 0.22, 1) var(--delay) both;
        }

        .hero-copy { animation: fadeInUp 800ms ease 750ms both; transform: translateZ(26px); }
        .hero-actions { animation: fadeInUp 800ms ease 930ms both; transform: translateZ(36px); }
        .hero-stats { perspective: 900px; transform-style: preserve-3d; }

        .stat-card {
          border: 1px solid rgba(52,211,153,0.2);
          border-radius: 1.25rem;
          background: linear-gradient(145deg, rgba(52,211,153,0.1), rgba(15,23,42,.7));
          padding: 1rem;
          backdrop-filter: blur(14px);
          animation: statRise 800ms cubic-bezier(0.19, 1, 0.22, 1) var(--delay) both;
          transform-style: preserve-3d;
          box-shadow: 0 22px 60px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.08);
        }

        .stat-card strong { display: block; font-size: 1.25rem; line-height: 1; color: rgb(167, 243, 208); transform: translateZ(20px); }
        .stat-card span { margin-top: 0.4rem; display: block; color: rgb(203 213 225); font-size: 0.78rem; transform: translateZ(16px); }
        .hero-card-wrap { animation: cardEnter 950ms cubic-bezier(0.19, 1, 0.22, 1) 520ms both; transform-style: preserve-3d; }

        .hacker-terminal {
          border: 1px solid rgba(52,211,153,.2);
          border-radius: 1.35rem;
          overflow: hidden;
          background: rgba(2,6,23,.75);
          box-shadow: 0 28px 80px rgba(0,0,0,.38), inset 0 0 44px rgba(52,211,153,.06);
          backdrop-filter: blur(16px);
          transform: rotateX(7deg) rotateY(-8deg) translateZ(26px);
          transform-style: preserve-3d;
        }

        .terminal-topbar {
          display: flex;
          align-items: center;
          gap: .45rem;
          border-bottom: 1px solid rgba(52,211,153,.14);
          background: rgba(15,23,42,.82);
          padding: .75rem .9rem;
        }

        .terminal-topbar span {
          width: .7rem;
          height: .7rem;
          border-radius: 999px;
          background: rgba(52,211,153,.65);
          box-shadow: 0 0 14px rgba(52,211,153,.8);
        }

        .terminal-topbar span:nth-child(2) { background: rgba(34,211,238,.62); }
        .terminal-topbar span:nth-child(3) { background: rgba(132,204,22,.62); }
        .terminal-topbar strong { margin-left: .5rem; color: rgb(167,243,208); font-size: .78rem; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }

        .terminal-body {
          padding: 1rem;
          color: rgb(187,247,208);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: .83rem;
          line-height: 1.8;
        }

        .terminal-body p {
          opacity: 0;
          transform: translateX(-8px);
          animation: terminalLine .55s ease var(--delay) both;
        }

        .prompt { color: rgb(34,211,238); }
        .cursor-block { display: inline-block; width: .62em; height: 1em; margin-left: .2rem; background: rgb(52,211,153); box-shadow: 0 0 16px rgba(52,211,153,.9); animation: blink 1s steps(2, start) infinite; vertical-align: text-bottom; }

        .cyber-lab {
          position: relative;
          min-height: 710px;
          border: 1px solid rgba(52, 211, 153, 0.22);
          border-radius: 2.5rem;
          overflow: hidden;
          background:
            linear-gradient(145deg, rgba(2, 6, 23, 0.9), rgba(6, 78, 59, 0.2)),
            radial-gradient(circle at 30% 20%, rgba(52,211,153,0.22), transparent 20%),
            radial-gradient(circle at 78% 70%, rgba(34,211,238,0.16), transparent 24%);
          box-shadow: 0 36px 140px rgba(0,0,0,0.54), inset 0 1px 0 rgba(255,255,255,0.1);
          perspective: 1700px;
          transform-style: preserve-3d;
        }

        .cyber-lab::before {
          content: "";
          position: absolute;
          inset: -30%;
          background: conic-gradient(from 180deg, transparent, rgba(52,211,153,0.16), transparent, rgba(34,211,238,0.14), transparent);
          animation: rotateGlow 14s linear infinite;
        }

        .cyber-lab::after {
          content: "ACCESS_GRANTED";
          position: absolute;
          right: 2rem;
          bottom: 1.5rem;
          z-index: 6;
          color: rgba(167,243,208,.24);
          font-size: .82rem;
          font-weight: 900;
          letter-spacing: .38em;
          transform: translateZ(80px);
        }

        .lab-scanline {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          background: linear-gradient(to bottom, transparent, rgba(52,211,153,0.15), transparent);
          height: 34%;
          animation: scanLine 4.5s ease-in-out infinite;
          opacity: 0.62;
        }

        .lab-grid-floor {
          position: absolute;
          left: 8%;
          right: 8%;
          bottom: -10%;
          height: 48%;
          transform: rotateX(68deg) translateZ(-130px);
          transform-origin: bottom;
          background-image:
            linear-gradient(rgba(52,211,153,0.26) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52,211,153,0.26) 1px, transparent 1px);
          background-size: 34px 34px;
          opacity: 0.5;
        }

        .lab-scene {
          position: absolute;
          inset: 0;
          z-index: 2;
          transform-style: preserve-3d;
          transform: rotateX(var(--scene-rx, 0deg)) rotateY(var(--scene-ry, 0deg));
          transition: transform 180ms ease;
        }

        .lab-depth-ring {
          position: absolute;
          inset: 14%;
          border: 1px solid rgba(52,211,153,0.16);
          border-radius: 50%;
          transform-style: preserve-3d;
          pointer-events: none;
          box-shadow: 0 0 42px rgba(52,211,153,.08);
        }

        .ring-a { transform: translate3d(calc(var(--scene-x, 0px) * -0.4), calc(var(--scene-y, 0px) * -0.4), -120px) rotateX(68deg); }
        .ring-b { inset: 24%; transform: translate3d(calc(var(--scene-x, 0px) * 0.35), calc(var(--scene-y, 0px) * 0.35), -220px) rotateX(58deg) rotateZ(20deg); }
        .ring-c { inset: 34%; transform: translate3d(calc(var(--scene-x, 0px) * -0.2), calc(var(--scene-y, 0px) * 0.2), -300px) rotateX(72deg) rotateZ(-18deg); }

        .holo-platform {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(52,211,153,.22);
          background: radial-gradient(circle, rgba(52,211,153,.16), transparent 66%);
          transform-style: preserve-3d;
          animation: platformPulse 3.8s ease-in-out infinite;
        }

        .platform-main { left: 28%; top: 50%; width: 280px; height: 100px; transform: rotateX(72deg) translateZ(40px); }
        .platform-small { right: 13%; top: 26%; width: 170px; height: 70px; transform: rotateX(72deg) translateZ(110px); animation-delay: .8s; }

        .shield-stage {
          position: absolute;
          left: 50%;
          top: 46%;
          width: 178px;
          height: 220px;
          transform: translate3d(-50%, -50%, 230px);
          transform-style: preserve-3d;
        }

        .shield-3d {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: shieldRotate 7s ease-in-out infinite;
        }

        .shield-face {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          clip-path: polygon(50% 0, 92% 16%, 82% 72%, 50% 100%, 18% 72%, 8% 16%);
          border: 1px solid rgba(167,243,208,0.32);
          background: linear-gradient(145deg, rgba(52,211,153,0.36), rgba(2,6,23,0.82));
          color: rgb(209,250,229);
          font-weight: 900;
          letter-spacing: 0.18em;
          box-shadow: inset 0 0 58px rgba(52,211,153,0.16), 0 32px 90px rgba(0,0,0,0.46);
          backdrop-filter: blur(14px);
        }

        .shield-front { transform: translateZ(22px); }
        .shield-back { transform: rotateY(180deg) translateZ(22px); }
        .shield-edge { position: absolute; inset: 8%; border: 1px solid rgba(52,211,153,.18); clip-path: polygon(50% 0, 92% 16%, 82% 72%, 50% 100%, 18% 72%, 8% 16%); }
        .edge-one { transform: translateZ(8px); }
        .edge-two { transform: translateZ(-8px); }
        .shield-face span { margin-top: 3.8rem; font-size: 1.1rem; }

        .terminal-cube-stage {
          position: absolute;
          right: 12%;
          top: 12%;
          width: 150px;
          height: 150px;
          transform: translate3d(calc(var(--scene-x, 0px) * -0.6), calc(var(--scene-y, 0px) * 0.4), 170px);
          transform-style: preserve-3d;
        }

        .terminal-cube {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: terminalSpin 10s linear infinite;
        }

        .terminal-face {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          border: 1px solid rgba(52,211,153,0.32);
          background: rgba(2, 6, 23, 0.82);
          color: rgb(110, 231, 183);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.78rem;
          text-align: center;
          padding: 0.8rem;
          box-shadow: inset 0 0 38px rgba(52,211,153,0.13), 0 0 24px rgba(52,211,153,.08);
          text-shadow: 0 0 12px rgba(52,211,153,.8);
        }

        .term-front { transform: translateZ(75px); }
        .term-back { transform: rotateY(180deg) translateZ(75px); }
        .term-right { transform: rotateY(90deg) translateZ(75px); }
        .term-left { transform: rotateY(-90deg) translateZ(75px); }
        .term-top { transform: rotateX(90deg) translateZ(75px); }
        .term-bottom { transform: rotateX(-90deg) translateZ(75px); }

        .radar-3d {
          position: absolute;
          left: 9%;
          top: 13%;
          width: 210px;
          height: 210px;
          border-radius: 50%;
          transform: translate3d(calc(var(--scene-x, 0px) * 0.55), calc(var(--scene-y, 0px) * 0.45), 145px) rotateX(56deg);
          transform-style: preserve-3d;
          border: 1px solid rgba(52,211,153,0.28);
          background: radial-gradient(circle, rgba(52,211,153,0.14), transparent 60%);
        }

        .radar-ring {
          position: absolute;
          border: 1px solid rgba(52,211,153,0.28);
          border-radius: 50%;
        }

        .radar-ring-one { inset: 18%; }
        .radar-ring-two { inset: 34%; }
        .radar-ring-three { inset: 48%; }

        .radar-sweep {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 50%;
          height: 2px;
          background: linear-gradient(90deg, rgb(52,211,153), transparent);
          transform-origin: left center;
          animation: radarSweep 3s linear infinite;
        }

        .radar-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgb(52,211,153);
          box-shadow: 0 0 20px rgba(52,211,153,0.9);
        }

        .dot-one { left: 32%; top: 30%; animation: ping 1.8s infinite; }
        .dot-two { left: 62%; top: 48%; animation: ping 2.2s infinite; }
        .dot-three { left: 45%; top: 68%; animation: ping 2.6s infinite; }

        .network-map {
          position: absolute;
          right: 7%;
          bottom: 14%;
          width: 260px;
          height: 220px;
          transform: translate3d(calc(var(--scene-x, 0px) * -0.5), calc(var(--scene-y, 0px) * -0.45), 190px) rotateY(-10deg);
          transform-style: preserve-3d;
        }

        .node {
          position: absolute;
          z-index: 2;
          display: grid;
          place-items: center;
          width: 64px;
          height: 64px;
          border-radius: 20px;
          border: 1px solid rgba(52,211,153,0.28);
          background: rgba(2,6,23,0.84);
          color: rgb(167,243,208);
          font-size: 0.75rem;
          font-weight: 900;
          box-shadow: 0 22px 58px rgba(0,0,0,0.42), inset 0 0 20px rgba(52,211,153,0.12);
          animation: nodeFloat 4s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .node-a { left: 0; top: 20px; }
        .node-b { left: 92px; top: 82px; animation-delay: 0.3s; }
        .node-c { right: 0; top: 28px; animation-delay: 0.6s; }
        .node-d { right: 38px; bottom: 0; animation-delay: 0.9s; }

        .link {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(52,211,153,0.82), transparent);
          transform-origin: left center;
          animation: linkPulse 2.8s ease-in-out infinite;
          box-shadow: 0 0 12px rgba(52,211,153,.65);
        }

        .link-ab { left: 48px; top: 82px; width: 95px; transform: rotate(32deg); }
        .link-bc { left: 146px; top: 106px; width: 90px; transform: rotate(-32deg); }
        .link-cd { left: 206px; top: 86px; width: 86px; transform: rotate(82deg); }

        .binary-panel,
        .cmd-chip {
          position: absolute;
          border: 1px solid rgba(52,211,153,0.2);
          background: rgba(2,6,23,0.76);
          color: rgb(209,250,229);
          backdrop-filter: blur(14px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), inset 0 0 22px rgba(52,211,153,.06);
          font-weight: 900;
          text-transform: uppercase;
        }

        .binary-panel {
          border-radius: 1rem;
          padding: .75rem 1rem;
          font-size: .72rem;
          letter-spacing: .18em;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .panel-one { left: 12%; top: 47%; transform: translate3d(calc(var(--scene-x, 0px) * .5), calc(var(--scene-y, 0px) * .3), 210px) rotateY(18deg); }
        .panel-two { right: 13%; top: 36%; transform: translate3d(calc(var(--scene-x, 0px) * -.5), calc(var(--scene-y, 0px) * .25), 220px) rotateY(-18deg); }
        .panel-three { left: 37%; bottom: 19%; transform: translate3d(calc(var(--scene-x, 0px) * .35), calc(var(--scene-y, 0px) * -.35), 230px) rotateX(12deg); }

        .cmd-chip {
          border-radius: 999px;
          padding: 0.55rem 0.85rem;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
        }

        .chip-one { left: 10%; bottom: 18%; transform: translate3d(calc(var(--scene-x, 0px) * 0.65), calc(var(--scene-y, 0px) * -0.55), 240px); animation: chipFloat 5s ease-in-out infinite; }
        .chip-two { right: 14%; top: 44%; transform: translate3d(calc(var(--scene-x, 0px) * -0.55), calc(var(--scene-y, 0px) * 0.5), 250px); animation: chipFloat 5.4s ease-in-out 0.3s infinite; }
        .chip-three { left: 28%; top: 10%; transform: translate3d(calc(var(--scene-x, 0px) * 0.45), calc(var(--scene-y, 0px) * 0.45), 230px); animation: chipFloat 5.8s ease-in-out 0.6s infinite; }
        .chip-four { left: 30%; bottom: 8%; transform: translate3d(calc(var(--scene-x, 0px) * -0.45), calc(var(--scene-y, 0px) * -0.45), 210px); animation: chipFloat 6.2s ease-in-out 0.9s infinite; }

        .card-3d,
        .skill-card,
        .project-card,
        .contact-card,
        .holo-text-card {
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .holo-text-card {
          border: 1px solid rgba(52,211,153,.16);
          border-radius: 2rem;
          background: rgba(15,23,42,.68);
          padding: 1.5rem;
          box-shadow: 0 28px 90px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.06);
          backdrop-filter: blur(18px);
        }

        .card-3d::before,
        .holo-text-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(52,211,153,0.28), transparent 36%);
          opacity: 0;
          transition: opacity 220ms ease;
        }

        .tilt-card:hover .card-3d::before,
        .tilt-card:hover .holo-text-card::before { opacity: 1; }

        .skill-cube-mini,
        .project-cube-badge {
          display: grid;
          place-items: center;
          transform-style: preserve-3d;
          background: rgb(167, 243, 208);
          color: rgb(2, 6, 23);
          font-weight: 900;
          box-shadow: 8px 8px 0 rgba(52,211,153,0.18), 0 18px 42px rgba(0,0,0,0.34);
        }

        .skill-cube-mini {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          transform: rotateX(18deg) rotateY(-22deg) translateZ(22px);
        }

        .project-cube-badge {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          transform: rotateX(18deg) rotateY(-24deg) translateZ(32px);
        }

        .button-3d {
          transform: translateZ(26px);
          transform-style: preserve-3d;
          box-shadow: 0 16px 0 rgba(0,0,0,.18), 0 22px 48px rgba(0, 0, 0, 0.28);
        }

        .button-3d:hover { transform: translateY(-5px) translateZ(34px) rotateX(5deg); }

        .button-shine {
          position: relative;
          overflow: hidden;
        }

        .button-shine::before {
          content: "";
          position: absolute;
          inset: -120% auto -120% -40%;
          width: 42%;
          transform: rotate(18deg);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.58), transparent);
          transition: transform 650ms ease;
        }

        .button-shine:hover::before { transform: translateX(360%) rotate(18deg); }

        .tilt-card {
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 240ms ease, filter 240ms ease;
          will-change: transform;
        }

        .tilt-card:hover { filter: saturate(1.2); }

        .project-card {
          height: 100%;
          transition: border-color 220ms ease, box-shadow 220ms ease;
        }

        .project-card:hover {
          border-color: rgba(52,211,153,0.38);
          box-shadow: 0 30px 90px rgba(0,0,0,0.48);
        }

        .skill-card::after,
        .project-card::after,
        .holo-text-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(52,211,153,0.48), transparent 30%, rgba(34,211,238,0.22));
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          pointer-events: none;
        }

        .tag-chip {
          background: rgba(52,211,153,.1);
          border: 1px solid rgba(52,211,153,.18);
          box-shadow: inset 0 0 14px rgba(52,211,153,.08);
        }

        .learning-rail {
          display: grid;
          gap: 1rem;
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        .learning-step {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1rem;
          align-items: center;
          border: 1px solid rgba(52,211,153,0.16);
          border-radius: 1.5rem;
          background: rgba(15,23,42,0.7);
          padding: 1rem;
          transform-style: preserve-3d;
          transition: transform 240ms ease, border-color 240ms ease, box-shadow 240ms ease;
          backdrop-filter: blur(14px);
          box-shadow: 0 20px 70px rgba(0,0,0,.28);
        }

        .learning-step:hover {
          transform: rotateX(6deg) rotateY(-7deg) translateZ(28px);
          border-color: rgba(52,211,153,0.38);
          box-shadow: 0 30px 90px rgba(0,0,0,.42);
        }

        .learning-orb {
          display: grid;
          place-items: center;
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: rgba(52,211,153,0.12);
          color: rgb(167,243,208);
          font-weight: 900;
          box-shadow: inset 0 0 22px rgba(52,211,153,0.18), 0 16px 44px rgba(0,0,0,.3);
          transform: rotateX(18deg) rotateY(-18deg) translateZ(24px);
        }

        .learning-step h3 {
          color: white;
          font-size: 1.1rem;
          font-weight: 900;
        }

        .learning-step p {
          color: rgb(203,213,225);
          margin-top: 0.25rem;
        }

        .contact-card {
          box-shadow: 0 34px 110px rgba(0,0,0,.45), 12px 12px 0 rgba(52,211,153,.13);
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px) scale(0.98) rotateX(8deg);
          filter: blur(8px);
          transition:
            opacity 760ms ease var(--delay),
            transform 760ms cubic-bezier(0.19, 1, 0.22, 1) var(--delay),
            filter 760ms ease var(--delay);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1) rotateX(0deg);
          filter: blur(0);
        }

        .marquee {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 14%, black 86%, transparent);
        }

        .marquee-track {
          display: inline-block;
          min-width: 200%;
          white-space: nowrap;
          animation: marquee 24s linear infinite;
        }

        @keyframes cyberShift {
          from { transform: translate3d(-2%, -1%, 0) scale(1); }
          to { transform: translate3d(2%, 2%, 0) scale(1.08); }
        }

        @keyframes matrixFall {
          from { transform: translateY(-20vh); }
          to { transform: translateY(180vh); }
        }

        @keyframes glitchSlice {
          0% { clip-path: inset(8% 0 84% 0); }
          18% { clip-path: inset(48% 0 40% 0); }
          36% { clip-path: inset(24% 0 66% 0); }
          54% { clip-path: inset(72% 0 14% 0); }
          72% { clip-path: inset(34% 0 52% 0); }
          100% { clip-path: inset(12% 0 78% 0); }
        }

        @keyframes floatOne {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(30px, -40px, 0) scale(1.08); }
        }

        @keyframes floatTwo {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-35px, 35px, 0) scale(0.95); }
        }

        @keyframes floatThree {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(22px, -28px, 0) scale(1.12); }
        }

        @keyframes navDrop {
          from { opacity: 0; transform: translateY(-18px) rotateX(14deg); }
          to { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes statRise {
          from { opacity: 0; transform: rotateX(32deg) rotateY(-8deg) translateY(26px) scale(0.94); }
          to { opacity: 1; transform: rotateX(0deg) rotateY(0deg) translateY(0) scale(1); }
        }

        @keyframes wordUp {
          to { transform: translateY(0) rotate(0deg); }
        }

        @keyframes terminalLine {
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(34px) rotateX(13deg) rotateY(-16deg) scale(0.94);
            filter: blur(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) rotateY(0deg) scale(1);
            filter: blur(0);
          }
        }

        @keyframes rotateGlow { to { transform: rotate(360deg); } }

        @keyframes scanLine {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(260%); }
        }

        @keyframes platformPulse {
          0%, 100% { opacity: .44; filter: blur(0); }
          50% { opacity: .9; filter: blur(1px); }
        }

        @keyframes shieldRotate {
          0%, 100% { transform: rotateY(-20deg) rotateX(7deg); }
          50% { transform: rotateY(200deg) rotateX(-9deg); }
        }

        @keyframes terminalSpin {
          from { transform: rotateX(-18deg) rotateY(0deg) rotateZ(0deg); }
          to { transform: rotateX(-18deg) rotateY(360deg) rotateZ(360deg); }
        }

        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ping {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.8); opacity: 0.45; }
        }

        @keyframes nodeFloat {
          0%, 100% { transform: translateY(0) translateZ(0) rotateX(0deg); }
          50% { transform: translateY(-10px) translateZ(22px) rotateX(9deg); }
        }

        @keyframes linkPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes chipFloat {
          0%, 100% { margin-top: 0; }
          50% { margin-top: -14px; }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }

        @media (max-width: 900px) {
          .cyber-lab { min-height: 580px; }
          .terminal-cube-stage { right: 8%; top: 10%; width: 116px; height: 116px; }
          .term-front { transform: translateZ(58px); }
          .term-back { transform: rotateY(180deg) translateZ(58px); }
          .term-right { transform: rotateY(90deg) translateZ(58px); }
          .term-left { transform: rotateY(-90deg) translateZ(58px); }
          .term-top { transform: rotateX(90deg) translateZ(58px); }
          .term-bottom { transform: rotateX(-90deg) translateZ(58px); }
          .network-map { display: none; }
          .radar-3d { width: 160px; height: 160px; }
          .chip-two, .chip-four, .binary-panel { display: none; }
          .glitch-title { transform: translateZ(20px); }
          .hacker-terminal { transform: translateZ(12px); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 1ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 1ms !important;
          }

          .pointer-glow, .cyber-bg, .matrix-columns, .orb { display: none; }
        }
      `}</style>
    </main>
  );
}
