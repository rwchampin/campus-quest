import Link from "next/link";
import { Trophy } from "lucide-react";

export function Footer() {
    return (
        <footer className="mt-24 border-t border-border bg-card/40">
            <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-4">
                <div className="md:col-span-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
                            <Trophy className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-display text-lg font-bold">
                            Campus<span className="text-gradient-gold">Quest</span>
                        </span>
                    </Link>
                    <p className="mt-4 max-w-md text-sm text-muted-foreground">
                        Campus Quest is a product of{" "}
                        <span className="font-semibold text-foreground">
                            Philosopher King Innovations Inc.
                        </span>{" "}
                        — building software that turns learning into a game worth playing.
                    </p>
                </div>
                <div>
                    <h4 className="font-display text-sm font-semibold mb-3">Product</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/features" className="hover:text-foreground">Features</Link></li>
                        <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
                        <li><Link href="/contact" className="hover:text-foreground">Request demo</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-display text-sm font-semibold mb-3">Company</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/company" className="hover:text-foreground">About</Link></li>
                        <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} Philosopher King Innovations Inc. All rights reserved.
            </div>
        </footer>
    );
}
