import { useEffect, useState } from "react";
import type { Route } from "./+types/home";

type WorkflowStep = {
  step: string;
  title: string;
  description: string;
  bullets?: string[];
  media: string;
  mediaAlt: string;
  mediaVariant: "phone" | "wide";
  mediaSize?: "xs" | "sm" | "md" | "lg";
  phoneWidth?: number;
  accent: {
    from: string;
    to: string;
  };
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "workmi: your ai work clone" },
    {
      name: "description",
      content:
        "Meet your next and best team member - an intelligent, proactive, always-on digital clone that communicates and delivers",
    },
  ];
}

const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Your Workmi checks in",
    description:
      "Your Workmi proactively spots John's unpaid invoice and pings you before it slips.",
    bullets: [
      "Because it's tied into your inbox and payment system, it knows exactly when to give you the heads-up.",
    ],
    media: "/assets/step1.svg",
    mediaAlt: "Mobile notification from Workmi about an unpaid invoice",
    mediaVariant: "phone",
    mediaSize: "lg",
    phoneWidth: 290,
    accent: { from: "#3A3EBE", to: "#F044A0" },
  },
  {
    step: "02",
    title: "You give the nod",
    description:
      "You reply yes and hand it off.",
    bullets: [
      "Text it like a teammate and Workmi understands exactly what you need.",
    ],
    media: "/assets/step2.svg",
    mediaAlt: "Approval interface showing Workmi play options",
    mediaVariant: "phone",
    mediaSize: "lg",
    phoneWidth: 290,
    accent: { from: "#F044A0", to: "#DC765C" },
  },
  {
    step: "03",
    title: "Workmi follows up",
    description:
      "It drafts the reminder in your voice, sends it on your behalf, and includes the payment link for John.",
    bullets: [
      "Handles the tone, attachments, and payment link without another handoff.",
    ],
    media: "/assets/step3.svg",
    mediaAlt: "Laptop screen showing a Workmi drafted response",
    mediaVariant: "wide",
    mediaSize: "xs",
    accent: { from: "#3A3EBE", to: "#98CEFB" },
  },
  {
    step: "04",
    title: "Workmi handles the thread",
    description:
      "It manages the back-and-forth until the invoice is closed. Loops you back in only if something needs your decision.",
    bullets: [
      "Loops you back in only if something needs your decision.",
    ],
    media: "/assets/step4.png",
    mediaAlt: "Dashboard view of Workmi coordinating multiple tools",
    mediaVariant: "wide",
    mediaSize: "lg",
    accent: { from: "#265F77", to: "#9B2389" },
  },
  {
    step: "05",
    title: "Workmi closes the loop",
    description:
      "As soon as payment clears, Workmi sends you a receipt and files the outcome.",
    bullets: [
      "Simple text: payment received, invoice closed, you're done.",
    ],
    media: "/assets/step5.svg",
    mediaAlt: "Confirmation notification from Workmi that payment was received",
    mediaVariant: "phone",
    mediaSize: "lg",
    phoneWidth: 290,
    accent: { from: "#834561", to: "#3A3EBE" },
  },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typingMessage, setTypingMessage] = useState("");
  const [completedTasks, setCompletedTasks] = useState(0);
  const fullMessage = "Absolutely! Per our call on Friday, we're finalizing the pricing structure...";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;
    let startDelay: NodeJS.Timeout;

    const startTyping = () => {
      currentIndex = 0;
      setTypingMessage("");

      startDelay = setTimeout(() => {
        typingInterval = setInterval(() => {
          if (currentIndex < fullMessage.length) {
            currentIndex++;
            setTypingMessage(fullMessage.slice(0, currentIndex));
          } else {
            clearInterval(typingInterval);
            resetTimeout = setTimeout(() => {
              startTyping(); // Restart the animation
            }, 2000);
          }
        }, 50);
      }, 500);
    };

    startTyping();

    return () => {
      clearTimeout(startDelay);
      clearTimeout(resetTimeout);
      if (typingInterval) clearInterval(typingInterval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedTasks((prev) => {
        if (prev >= 3) {
          return 0; // Reset to start
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const navbarHeight = 100; // Account for sticky navbar + spacing
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/50 via-white to-pink-100/50 text-slate-900">
      {/* Animated Gradient Mesh Background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <div className="animate-mesh-shift absolute left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-400/40 via-pink-400/40 to-orange-400/40 blur-[100px]" />
        <div className="animate-mesh-shift absolute right-[5%] top-[30%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400/40 via-purple-400/40 to-pink-400/40 blur-[100px]" style={{ animationDelay: '-10s' }} />
        <div className="animate-mesh-shift absolute bottom-[10%] left-[30%] h-[550px] w-[550px] rounded-full bg-gradient-to-br from-pink-400/40 via-orange-400/40 to-yellow-400/40 blur-[100px]" style={{ animationDelay: '-20s' }} />
      </div>

      {/* Interactive Mouse Gradient */}
      <div
        className="pointer-events-none fixed z-0 h-96 w-96 rounded-full bg-gradient-to-r from-purple-300/20 to-pink-300/20 blur-3xl transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      />

      {/* Subtle Grid Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10">
      <header className="sticky top-4 z-50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="glass overflow-hidden rounded-3xl border border-white/60 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-3 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3A3EBE] via-[#F044A0] to-[#DC765C] text-white">
                <span className="font-display text-lg">W</span>
              </div>
              <span className="font-display text-2xl tracking-tight text-slate-900">workmi</span>
            </div>
            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
              <a className="transition-colors hover:text-slate-900" href="#hero">
                Product
              </a>
              <a className="transition-colors hover:text-slate-900" href="#how-it-works">
                How it works
              </a>
            </nav>
            <a
              className="magnetic-btn group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#3A3EBE] to-[#F044A0] px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              href="#waitlist"
            >
              Join waitlist
              <span aria-hidden className="text-base transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
        </div>
      </header>

      <main className="pb-24">
        {/* Hero Section */}
        <section id="hero" className="mx-auto mt-8 max-w-7xl px-6 sm:px-8">
          <div className="glass relative overflow-hidden rounded-3xl border border-white/60 p-8 shadow-2xl sm:p-12">
            {/* Subtle background gradient */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute -top-24 left-[20%] h-64 w-64 rounded-full opacity-20 blur-3xl"
                style={{ background: "linear-gradient(135deg, #3A3EBE, #F044A0)" }}
              />
              <div
                className="absolute bottom-[-30%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
                style={{ background: "#98CEFB" }}
              />
            </div>

            {/* Content Grid */}
            <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              {/* Left: Headline */}
              <div className="flex flex-col items-start">
                <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                  Meet Your{" "}
                  <span className="animate-gradient-text bg-[linear-gradient(90deg,#3A3EBE_0%,#F044A0_50%,#DC765C_100%)] bg-clip-text text-transparent">
                    workmi
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                  Your fully autonomous AI work clone that anticipates, communicates, and executes across every workflow -{" "}
                  <span className="font-semibold text-slate-900">while you stay focused on the next move.</span>
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <a
                    className="magnetic-btn group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3A3EBE] to-[#F044A0] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    href="#waitlist"
                  >
                    Join waitlist
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
                    href="#how-it-works"
                  >
                    See how it works
                  </a>
                </div>
              </div>

              {/* Right: Demo Cards */}
              <div className="relative lg:pl-4">
                <div className="relative h-[480px] w-full">

                {/* Card 1: Text Communication - Large Left Card */}
                <div
                  className="glass hover-lift animate-card-entrance absolute left-0 top-1/2 w-[320px] -translate-y-1/2 rounded-2xl border border-white/60 p-6 shadow-xl"
                  style={{ zIndex: 1, animationDelay: '0.1s' }}
                >
                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-display text-sm font-semibold text-slate-900">AI Communication</h3>
                      <span className="rounded-full bg-gradient-to-r from-[#3A3EBE]/10 to-[#F044A0]/10 px-2.5 py-1 text-[10px] font-semibold text-slate-700">
                        <span className="relative flex h-2 w-2 items-center justify-center">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3A3EBE] opacity-75"></span>
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#3A3EBE]"></span>
                        </span>
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="animate-slide-in-left flex gap-2" style={{ animationDelay: '0.3s' }}>
                        <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2.5 text-left shadow-sm">
                          <p className="text-sm leading-relaxed text-slate-700">
                            Can we get an update on the proposal?
                          </p>
                        </div>
                      </div>
                      <div className="animate-slide-in-right flex items-start gap-2" style={{ animationDelay: '0.6s' }}>
                        <div className="flex-1 rounded-2xl rounded-br-sm bg-gradient-to-br from-[#3A3EBE]/10 to-[#F044A0]/10 px-4 py-2.5 shadow-sm">
                          <p className="text-sm leading-relaxed text-slate-700">
                            {typingMessage}
                            <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-slate-700"></span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="flex gap-1">
                          <span className="animate-typing-dots inline-block size-1.5 rounded-full bg-gradient-to-r from-[#3A3EBE] to-[#F044A0]" />
                          <span className="animate-typing-dots inline-block size-1.5 rounded-full bg-gradient-to-r from-[#3A3EBE] to-[#F044A0]" style={{ animationDelay: "0.2s" }} />
                          <span className="animate-typing-dots inline-block size-1.5 rounded-full bg-gradient-to-r from-[#3A3EBE] to-[#F044A0]" style={{ animationDelay: "0.4s" }} />
                        </div>
                        <span>AI responding...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Calendar Orchestration - Top Right */}
                <div
                  className="glass hover-lift animate-card-entrance absolute left-[200px] top-6 w-[280px] rounded-2xl border border-white/60 p-5 shadow-xl"
                  style={{ zIndex: 2, animationDelay: '0.3s' }}
                >
                  <div className="relative">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-display text-sm font-semibold text-slate-900">Calendar</h3>
                      <span className="relative flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        </span>
                        Syncing
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Finding mutual availability with Maria
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#3A3EBE]/5 to-[#98CEFB]/5 px-3 py-2 transition-all duration-500">
                        <span className="text-xs font-medium text-slate-900">Tue 2:00 PM</span>
                        <span className="ml-auto text-[10px] text-emerald-600 animate-pulse">✓ Both free</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 opacity-50 animate-pulse" style={{ animationDelay: '0.3s' }}>
                        <span className="text-xs text-slate-700">Wed 10:00 AM</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 opacity-50 animate-pulse" style={{ animationDelay: '0.6s' }}>
                        <span className="text-xs text-slate-700">Thu 3:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Proactive Actions - Bottom Right */}
                <div
                  className="glass hover-lift animate-card-entrance absolute bottom-6 left-[220px] w-[290px] rounded-2xl border border-white/60 p-5 shadow-xl"
                  style={{ zIndex: 2, animationDelay: '0.5s' }}
                >
                  <div className="relative">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-display text-sm font-semibold text-slate-900">Tasks</h3>
                      <span className="rounded-full bg-gradient-to-r from-[#9B2389]/10 to-[#DC765C]/10 px-2.5 py-1 text-[10px] font-semibold text-slate-700">
                        {completedTasks === 3 ? "Completed" : "Running"}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {completedTasks}/3 actions completed
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left transition-all duration-500 ${completedTasks >= 1 ? 'bg-emerald-50/50' : 'bg-slate-50 opacity-60'}`}>
                        <span className={`text-xs transition-all duration-500 ${completedTasks >= 1 ? 'text-emerald-700' : 'text-slate-500'}`}>
                          {completedTasks >= 1 ? '✓' : '○'}
                        </span>
                        <p className={`text-xs transition-all duration-500 ${completedTasks >= 1 ? 'text-slate-900' : 'text-slate-600'}`}>Updated CRM records</p>
                      </div>
                      <div className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left transition-all duration-500 ${completedTasks >= 2 ? 'bg-emerald-50/50' : 'bg-slate-50 opacity-60'}`}>
                        <span className={`text-xs transition-all duration-500 ${completedTasks >= 2 ? 'text-emerald-700' : 'text-slate-500'}`}>
                          {completedTasks >= 2 ? '✓' : '○'}
                        </span>
                        <p className={`text-xs transition-all duration-500 ${completedTasks >= 2 ? 'text-slate-900' : 'text-slate-600'}`}>Sent 3 follow-ups</p>
                      </div>
                      <div className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left transition-all duration-500 ${completedTasks >= 3 ? 'bg-emerald-50/50' : 'bg-slate-50 opacity-60'}`}>
                        <span className={`text-xs transition-all duration-500 ${completedTasks >= 3 ? 'text-emerald-700' : 'text-slate-500'}`}>
                          {completedTasks >= 3 ? '✓' : '○'}
                        </span>
                        <p className={`text-xs transition-all duration-500 ${completedTasks >= 3 ? 'text-slate-900' : 'text-slate-600'}`}>Invoice check (9 AM)</p>
                      </div>
                    </div>
                  </div>
                </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto mt-28 max-w-7xl px-6 sm:px-8">
          <div className="scroll-animate text-center">
            <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              See how it works
            </h2>
            <p className="mt-6 text-xl text-slate-600">
              Watch Workmi chase down an unpaid invoice - from first ping to payment received.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
            {workflowSteps.map((step, index) => {
              // Bento grid layout based on actual image dimensions
              // Step 1,2: vertical phones | Step 3: SQUARE needs width! | Step 4: wide dashboard | Step 5: vertical phone beside step 4
              const bentoLayouts = {
                "01": "lg:col-span-6",  // Vertical phone - half width
                "02": "lg:col-span-6",  // Vertical phone - half width
                "03": "lg:col-span-12", // Square laptop - FULL WIDTH so it's readable!
                "04": "lg:col-span-8",  // Wide dashboard - 8 columns
                "05": "lg:col-span-4"   // Vertical phone - 4 columns beside step 4
              };

              const isWideImage = step.step === "04"; // Step 4 has wide horizontal dashboard
              const isSquare = step.step === "03";
              return (
                <div
                  key={step.step}
                  className={`glass scroll-animate group relative overflow-hidden rounded-3xl border border-white/60 p-8 shadow-2xl transition-all duration-300 hover:shadow-xl ${bentoLayouts[step.step as keyof typeof bentoLayouts]}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Background on Hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        background: `linear-gradient(135deg, ${step.accent.from}, ${step.accent.to})`,
                      }}
                    />
                  </div>

                  {/* Content - Adaptive layout based on image type */}
                  <div className={`relative z-10 flex h-full flex-col`}>
                    <div className={`flex flex-col`}>
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600">
                          <span
                            className="size-2 rounded-full"
                            style={{ backgroundImage: `linear-gradient(90deg, ${step.accent.from}, ${step.accent.to})` }}
                          />
                          {step.step}
                        </span>
                      </div>

                      <h3 className={`font-display font-semibold tracking-tight text-slate-900 ${isSquare || isWideImage ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}>
                        {step.title}
                      </h3>

                      <p className={`leading-relaxed text-slate-600 ${isSquare || isWideImage ? 'mt-3 text-base lg:text-lg' : 'mt-2 text-sm lg:text-base'}`}>
                        {step.description}
                      </p>
                    </div>

                    {/* Media */}
                    <div className={`mt-auto pt-6 flex items-center justify-center`}>
                      <div className={`overflow-hidden rounded-2xl ${isWideImage ? 'w-full border border-slate-200/50' : isSquare ? 'w-full max-w-[600px] border border-slate-200/50' : 'max-w-full'}`}>
                        <img
                          src={step.media}
                          alt={step.mediaAlt}
                          className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="mx-auto mt-28 max-w-7xl px-6 sm:px-8">
          <div className="glass scroll-animate overflow-hidden rounded-3xl border border-white/60 p-12 shadow-2xl sm:p-16">
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Plugs into everything you use
              </h2>
              <p className="mt-4 text-lg text-slate-600 lg:text-xl">
                Connect once. Full context everywhere.
              </p>
            </div>

            {/* Integrations Image */}
            <div className="mt-12 flex items-center justify-center">
              <img
                src="/assets/integrations.svg"
                alt="Workmi integrates with Slack, Google, Calendar, QuickBooks, Stripe, and iMessage"
                className="h-auto w-full max-w-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section
          id="waitlist"
          className="mx-auto mt-28 max-w-7xl px-6 sm:px-8"
        >
          <div className="glass scroll-animate overflow-hidden rounded-3xl border border-white/60 px-6 py-16 text-center shadow-2xl sm:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-[40px]">
              Ready to get your Workmi?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Join the teams saving 10+ hours a week with their AI clone. We launch limited cohorts every month.
            </p>
            <form className="mt-10 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-full border border-slate-200/70 bg-white px-5 py-3 text-base text-slate-700 shadow-sm outline-none transition focus:border-[#3A3EBE] focus:ring-2 focus:ring-[#3A3EBE]/30"
              />
              <button
                type="submit"
                className="magnetic-btn group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#3A3EBE] to-[#F044A0] px-7 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:w-auto"
              >
                Join waitlist
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
            <p className="mt-4 text-sm text-slate-500">
              <span className="font-medium text-slate-600">3,284</span> operators already in line.
            </p>
          </div>
          </div>
        </section>
      </main>
      </div>
    </div>
  );
}
