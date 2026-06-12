"use client";
import { motion } from "motion/react";
import { Award, BarChart3, BookOpen, Sparkles, Users, Shield } from "lucide-react";


const features = [
    {
        icon: BarChart3,
        title: "XP & Levels",
        desc: "Every meaningful action — completing assignments, joining clubs, presenting — earns XP and pushes you toward the next level.",
    },
    {
        icon: BookOpen,
        title: "Subject Proficiencies",
        desc: "Granular skill bars for each course you take. Show that you're not just a 3.8 GPA — you're a Level 22 in Computer Science.",
    },
    {
        icon: Award,
        title: "Achievements & Ribbons",
        desc: "Team Leader, Math Mind, Word Smith, Study Champion — collectible ribbons that prove what you bring to a team.",
    },
    {
        icon: Sparkles,
        title: "AI-Generated Avatars",
        desc: "Generate a full-body portrait of your academic self. Customize it as you grow.",
    },
    {
        icon: Users,
        title: "Study Guilds",
        desc: "Form groups around courses, clubs, or career goals. Earn shared XP for collective wins.",
    },
    {
        icon: Shield,
        title: "Student-First Privacy",
        desc: "No selling student data. Visible only to peers, mentors, and recruiters you opt into.",
    },
];

export default function FeaturesPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="text-center mb-16">
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-accent">
                    Features
                </p>
                <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
                    Built for how students <span className="text-gradient-gold">actually grow.</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Six core systems that turn the chaos of student life into a clear,
                    shareable, gameable progression.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f, i) => (
                    <motion.div
                        key={f.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="card-gradient border border-border rounded-2xl p-6 hover:border-primary/40 transition group"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 mb-4 text-primary group-hover:glow-gold transition-shadow">
                            <f.icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
                        <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
