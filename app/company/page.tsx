"use client";
import { motion } from "motion/react";
import { Crown } from "lucide-react";

 

export default function CompanyPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/30 glow-gold">
                    <Crown className="h-8 w-8 text-primary" />
                </div>
                <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold">
                    Philosopher King <span className="text-gradient-gold">Innovations Inc.</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Software for learners who refuse to be bored.
                </p>
            </motion.div>

            <div className="mt-16 space-y-10 text-foreground/90">
                <section>
                    <h2 className="font-display text-2xl font-bold mb-3 text-gradient-level">Our thesis</h2>
                    <p className="leading-relaxed text-muted-foreground">
                        Plato imagined a leader who was equal parts thinker and doer. We took the same
                        idea and pointed it at software: tools should make people wiser <em>and</em> more
                        alive while using them. Most education tech does neither. We're here to fix that.
                    </p>
                </section>

                <section>
                    <h2 className="font-display text-2xl font-bold mb-3 text-gradient-level">Why Campus Quest first</h2>
                    <p className="leading-relaxed text-muted-foreground">
                        Higher education is the longest, most expensive, and most consequential game most
                        people will ever play — and it has no scoreboard, no progression, no party
                        system. Campus Quest is our answer. It's a social network where the act of
                        learning is the gameplay loop, and where a student's profile becomes a record of
                        who they're becoming, not just where they've been.
                    </p>
                </section>

                <section>
                    <h2 className="font-display text-2xl font-bold mb-3 text-gradient-level">What's next</h2>
                    <p className="leading-relaxed text-muted-foreground">
                        After Campus Quest, we're exploring tools for early-career professionals,
                        independent researchers, and lifelong learners. The through-line is always the
                        same: play and wisdom, in the same product.
                    </p>
                </section>
            </div>
        </div>
    );
}
