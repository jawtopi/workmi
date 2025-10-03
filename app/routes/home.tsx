import { useEffect } from "react";
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
    { title: "Your workmi" },
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
      "It manages the back-and-forth until the invoice is closed.",
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

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-4 z-50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
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
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#3A3EBE] to-[#F044A0] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
              href="#waitlist"
            >
              Join waitlist
              <span aria-hidden className="text-base">→</span>
            </a>
          </div>
        </div>
        </div>
      </header>

      <main className="pb-24">
        {/* Hero Section */}
        <section id="hero" className="mx-auto mt-8 max-w-7xl px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-8 shadow-xl sm:p-12">
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
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3A3EBE] to-[#F044A0] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:shadow-md"
                    href="#waitlist"
                  >
                    Join waitlist
                    <span aria-hidden>→</span>
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
                  className="absolute left-0 top-1/2 w-[320px] -translate-y-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-transform hover:shadow-xl"
                  style={{ zIndex: 1 }}
                >
                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-display text-sm font-semibold text-slate-900">AI Communication</h3>
                      <span className="rounded-full bg-gradient-to-r from-[#3A3EBE]/10 to-[#F044A0]/10 px-2.5 py-1 text-[10px] font-semibold text-slate-700">Live</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="rounded-2xl rounded-tl-sm bg-slate-50 px-4 py-2.5 text-left">
                          <p className="text-sm leading-relaxed text-slate-700">
                            Can we get an update on the proposal?
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex-1 rounded-2xl rounded-br-sm bg-gradient-to-br from-[#3A3EBE]/5 to-[#F044A0]/5 px-4 py-2.5">
                          <p className="text-sm leading-relaxed text-slate-700">
                            Absolutely! Per our call on Friday, we're finalizing the pricing structure...
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="flex gap-0.5">
                          <span className="inline-block size-1.5 animate-pulse rounded-full bg-gradient-to-r from-[#3A3EBE] to-[#F044A0]" style={{ animationDelay: "0ms" }} />
                          <span className="inline-block size-1.5 animate-pulse rounded-full bg-gradient-to-r from-[#3A3EBE] to-[#F044A0]" style={{ animationDelay: "150ms" }} />
                          <span className="inline-block size-1.5 animate-pulse rounded-full bg-gradient-to-r from-[#3A3EBE] to-[#F044A0]" style={{ animationDelay: "300ms" }} />
                        </div>
                        <span>Drafting...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Calendar Orchestration - Top Right */}
                <div
                  className="absolute left-[200px] top-6 w-[280px] rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-transform hover:shadow-xl"
                  style={{ zIndex: 2 }}
                >
                  <div className="relative">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-display text-sm font-semibold text-slate-900">Calendar</h3>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">Syncing</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Finding mutual availability with Maria
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#3A3EBE]/5 to-[#98CEFB]/5 px-3 py-2">
                        <span className="text-xs font-medium text-slate-900">Tue 2:00 PM</span>
                        <span className="ml-auto text-[10px] text-emerald-600">✓ Both free</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 opacity-50">
                        <span className="text-xs text-slate-700">Wed 10:00 AM</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 opacity-50">
                        <span className="text-xs text-slate-700">Thu 3:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Proactive Actions - Bottom Right */}
                <div
                  className="absolute bottom-6 left-[220px] w-[290px] rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-transform hover:shadow-xl"
                  style={{ zIndex: 2 }}
                >
                  <div className="relative">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-display text-sm font-semibold text-slate-900">Tasks</h3>
                      <span className="rounded-full bg-gradient-to-r from-[#9B2389]/10 to-[#DC765C]/10 px-2.5 py-1 text-[10px] font-semibold text-slate-700">Completed</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      5 actions completed automatically
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 rounded-lg bg-emerald-50/50 px-3 py-2 text-left">
                        <span className="text-xs text-emerald-700">✓</span>
                        <p className="text-xs text-slate-900">Updated CRM records</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-emerald-50/50 px-3 py-2 text-left">
                        <span className="text-xs text-emerald-700">✓</span>
                        <p className="text-xs text-slate-900">Sent 3 follow-ups</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-left opacity-60">
                        <span className="text-xs text-slate-500">○</span>
                        <p className="text-xs text-slate-600">Invoice check (9 AM)</p>
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
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              See how Workmi runs a play
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Five simple steps to move work forward exactly the way you would - without touching your inbox.
            </p>
          </div>

          <div className="mt-16 space-y-14">
            {workflowSteps.map((step, index) => {
              const isWide = step.mediaVariant === "wide";
              const reverse = !isWide && index % 2 === 1;
              const mediaSize = step.mediaSize ?? "md";
              const phoneWidth = step.phoneWidth ?? 260;
              const mediaWrapperClasses = (() => {
                if (isWide) {
                  return "w-full";
                }
                if (mediaSize === "lg") {
                  return "md:w-[45%] lg:w-[42%]";
                }
                if (mediaSize === "md") {
                  return "md:w-[38%] lg:w-[36%]";
                }
                if (mediaSize === "sm") {
                  return "md:w-[30%] lg:w-[28%]";
                }
                if (mediaSize === "xs") {
                  return "md:w-[48%] lg:w-[44%]";
                }
                return "md:w-[38%] lg:w-[36%]";
              })();
              const mediaOuterClasses = (() => {
                if (isWide) {
                  if (mediaSize === "xs") {
                    return "overflow-hidden rounded-[30px] max-w-[600px] mx-auto";
                  }
                  if (mediaSize === "sm") {
                    return "overflow-hidden rounded-[30px] border border-slate-200/70 shadow-lg max-w-[720px] mx-auto";
                  }
                  if (mediaSize === "lg") {
                    return "overflow-hidden rounded-[30px] border border-slate-200/70 shadow-lg max-w-[880px] mx-auto";
                  }
                  return "overflow-hidden rounded-[30px] border border-slate-200/70 shadow-lg max-w-[820px] mx-auto";
                }
                if (mediaSize === "lg") {
                  return "overflow-hidden rounded-[32px] border border-slate-200/70 shadow-lg";
                }
                if (mediaSize === "sm") {
                  return "overflow-hidden rounded-3xl border border-slate-200/70 shadow-lg";
                }
                return "overflow-hidden rounded-3xl border border-slate-200/70 shadow-lg";
              })();
              const mediaInnerWrapper = (() => {
                if (isWide) return "";
                if (mediaSize === "lg") return "mx-auto";
                if (mediaSize === "sm") return "mx-auto max-w-[210px]";
                if (mediaSize === "xs") return "mx-auto max-w-[420px]";
                return "mx-auto max-w-[240px]";
              })();
              const phoneMaxWidthStyle = !isWide && mediaSize === "lg" ? { maxWidth: `${phoneWidth}px` } : undefined;
              const containerLayout = isWide
                ? ""
                : reverse
                  ? "md:flex-row md:flex-row-reverse"
                  : "md:flex-row";
              const textColumnClasses = isWide
                ? "relative z-10 w-full md:mx-auto md:max-w-3xl"
                : `relative z-10 flex-1 md:flex md:flex-col md:justify-center ${reverse ? "md:ml-6 md:text-right md:items-end" : "md:mr-6"}`;

              return (
                <div
                  key={step.step}
                  className={`scroll-animate relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white ${step.step === "04" ? "p-8 shadow-xl sm:p-12" : "p-6 shadow-xl sm:p-8"} ${containerLayout}`}
                >
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className={`absolute -top-24 h-64 w-64 rounded-full blur-3xl opacity-40 ${
                        isWide ? "left-1/2 -translate-x-1/2" : ""
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${step.accent.from}, ${step.accent.to})`,
                        left: isWide ? undefined : reverse ? "auto" : "18%",
                        right: isWide ? undefined : reverse ? "15%" : "auto",
                      }}
                    />
                    <div
                      className="absolute bottom-[-30%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-[120px] opacity-30"
                      style={{ background: step.accent.to }}
                    />
                  </div>

                  <div className={textColumnClasses}>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-sm">
                      <span
                        className="size-2.5 rounded-full"
                        style={{ backgroundImage: `linear-gradient(90deg, ${step.accent.from}, ${step.accent.to})` }}
                      />
                      Step {step.step}
                    </span>
                    <h3 className="mt-4 font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                      {step.description}
                    </p>
                    {step.bullets && (
                      <ul className={`mt-4 space-y-2.5 text-base text-slate-600 sm:text-lg ${reverse ? "md:ml-auto" : ""}`}>
                        {step.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className={`flex items-start gap-3 leading-relaxed ${reverse ? "flex-row-reverse text-right" : ""}`}
                          >
                            <span
                              className="mt-1.5 size-2.5 min-h-2.5 min-w-2.5 rounded-full"
                              style={{
                                backgroundImage: `linear-gradient(120deg, ${step.accent.from}, ${step.accent.to})`,
                              }}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div
                    className={`relative z-10 mt-10 ${isWide ? "md:mt-12" : "md:mt-0"} ${
                      isWide ? "w-full" : mediaWrapperClasses
                    } ${
                      reverse && !isWide ? "md:mr-auto" : !isWide ? "md:ml-auto" : ""
                    }`}
                  >
                    <div
                      className={`${mediaOuterClasses} ${mediaInnerWrapper}`}
                      style={phoneMaxWidthStyle}
                    >
                      <img src={step.media} alt={step.mediaAlt} className="h-auto w-full" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="waitlist"
          className="mx-auto mt-28 max-w-7xl px-6 sm:px-8"
        >
          <div className="scroll-animate overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-xl sm:px-12">
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
                className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#3A3EBE] to-[#F044A0] px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:shadow-md sm:w-auto"
              >
                Join waitlist
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
  );
}
