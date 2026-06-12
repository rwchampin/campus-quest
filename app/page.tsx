"use client";
import { ArrowRight, Sparkles, Zap, Target, Users, Trophy } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import heroImg from "@/public/hero.jpg";  
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-bg">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              A product of Philosopher King Innovations Inc.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]"
            >
              College, but it{" "}
              <span className="text-gradient-gold">plays like a game.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-xl text-lg text-muted-foreground"
            >
              Campus Quest is the social network built for college and grad students.
              Earn XP for what you actually do, level up real subjects, and turn your
              academic journey into a portfolio recruiters can't ignore.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground glow-gold hover:opacity-90 transition"
              >
                Request a campus demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted transition"
              >
                See how it works
              </Link>
            </motion.div>

            {/* mock XP bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 max-w-md card-gradient border border-border rounded-xl p-4"
            >
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span className="font-display font-semibold text-primary">LEVEL 18</span>
                <span>890 / 1000 XP</span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden relative">
                <div className="h-full w-[89%] xp-bar relative">
                  <div className="absolute inset-0 animate-shimmer" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-secondary/20 blur-3xl rounded-full" />
            <Image
              src={heroImg}
              alt="Campus Quest hero — glowing XP bar over a campus skyline"
              width={1600}
              height={900}
              className="relative rounded-2xl border border-border shadow-2xl glow-purple"
            />
          </motion.div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-12">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-accent">
            Why Campus Quest
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            A profile that <span className="text-gradient-level">actually shows growth.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            LinkedIn was built for people who already have jobs. Campus Quest is built
            for students who are still becoming who they'll be.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: "Earn XP for real effort",
              desc: "Every quiz, project, study session, and club activity is worth points. No bots, no fluff.",
              color: "text-primary",
            },
            {
              icon: Target,
              title: "Level up by subject",
              desc: "Show recruiters you're a Level 22 in CS or a Level 18 in American History — not just a GPA.",
              color: "text-accent",
            },
            {
              icon: Users,
              title: "Build your guild",
              desc: "Form study groups, run clubs, mentor underclassmen — and get credit for all of it.",
              color: "text-secondary",
            },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-gradient border border-border rounded-2xl p-6 hover:border-primary/40 transition"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border mb-4 ${f.color}`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4">
          <div className="card-gradient border border-border rounded-2xl p-10 grid md:grid-cols-4 gap-8 text-center">
            {[
              { k: "1M+", v: "XP earned by beta students" },
              { k: "120+", v: "Achievements to unlock" },
              { k: "40+", v: "Subject proficiency tracks" },
              { k: "8", v: "Campus pilots launching" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold">{s.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center">
        <Trophy className="mx-auto h-12 w-12 text-primary animate-float" />
        <h2 className="mt-6 font-display text-3xl sm:text-4xl font-bold">
          Ready to bring Campus Quest to your school?
        </h2>
        <p className="mt-4 text-muted-foreground">
          We're working with select universities for our 2026 cohort. Tell us about
          your campus and we'll get back to you within 48 hours.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground glow-gold hover:opacity-90 transition"
        >
          Request a demo <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
