"use client";
import { useState } from "react";
import { Mail, Send, Check } from "lucide-react";

 

export default function ContactPage() {
    const [sent, setSent] = useState(false);

    return (
        <div className="mx-auto max-w-3xl px-4 py-20">
            <div className="text-center mb-12">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/30 glow-gold">
                    <Mail className="h-7 w-7 text-primary" />
                </div>
                <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold">
                    Let's <span className="text-gradient-gold">talk.</span>
                </h1>
                <p className="mt-4 text-muted-foreground">
                    Bringing Campus Quest to your school, partnering with us, or just curious?
                    Send a note and we'll reply within 48 hours.
                </p>
            </div>

            {sent ? (
                <div className="card-gradient border border-success/40 rounded-2xl p-10 text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-success/20 text-success mb-4">
                        <Check className="h-6 w-6" />
                    </div>
                    <h2 className="font-display text-xl font-bold">Message received</h2>
                    <p className="mt-2 text-muted-foreground">
                        We'll get back to you soon. In the meantime, +50 XP for reaching out.
                    </p>
                </div>
            ) : (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setSent(true);
                    }}
                    className="card-gradient border border-border rounded-2xl p-6 sm:p-8 space-y-5"
                >
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Name</label>
                            <input
                                required
                                type="text"
                                className="w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Email</label>
                            <input
                                required
                                type="email"
                                className="w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">School or organization</label>
                        <input
                            type="text"
                            className="w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">Message</label>
                        <textarea
                            required
                            rows={5}
                            className="w-full rounded-lg bg-input border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-primary resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground glow-gold hover:opacity-90 transition"
                    >
                        Send message <Send className="h-4 w-4" />
                    </button>
                </form>
            )}
        </div>
    );
}
