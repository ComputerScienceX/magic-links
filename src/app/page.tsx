import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

const BLUR_FADE_DELAY = 0.04;
const EMAIL_CTA_DELAY = 0.55;

const configuredLinks = DATA.boxLinks;
const topButtonLink = DATA.topButtonLink;

export default function Page() {
  const isTopButtonExternal = topButtonLink.href.startsWith("http");
  const topButtonLogoSrc = topButtonLink.logoUrl ?? "/of-transparent.png";
  const topButtonLogoAlt = topButtonLink.logoAlt ?? `${topButtonLink.label} symbol`;

  return (
    <main className="flex min-h-[calc(100dvh-3rem)] items-center justify-center">
      <section className="w-full max-w-md space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 px-6 py-8 shadow-xl backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-primary/20 to-transparent" />
            <div className="relative flex flex-col items-center gap-3 text-center">
              <Avatar className="size-24 border border-border/50 shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
              <BlurFadeText
                delay={BLUR_FADE_DELAY + 0.04}
                className="text-3xl font-semibold tracking-tighter"
                text={DATA.name}
              />
              <p className="text-sm text-muted-foreground">{DATA.description}</p>
              <Link
                href={DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/90 px-3 py-1 text-xs text-muted-foreground"
              >
                <MapPin className="size-3.5" />
                {DATA.location}
              </Link>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY}>
          <Link
            href={topButtonLink.href}
            target={isTopButtonExternal ? "_blank" : undefined}
            rel={isTopButtonExternal ? "noopener noreferrer" : undefined}
            className="block"
          >
            <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
              <span
                className={cn(
                  "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                )}
                style={{
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "subtract",
                  WebkitClipPath: "padding-box",
                }}
              />
              <Image
                src={topButtonLogoSrc}
                alt={topButtonLogoAlt}
                width={topButtonLink.logoWidth ?? 40}
                height={topButtonLink.logoHeight ?? 29}
                className="h-8 w-auto shrink-0"
              />
              <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
              <AnimatedGradientText className="text-lg font-medium">
                {topButtonLink.label}
              </AnimatedGradientText>
              <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </div>
          </Link>
        </BlurFade>

        <div className="space-y-3">
          {configuredLinks.map((link, index) => {
            const isExternal = link.href.startsWith("http");
            return (
              <BlurFade
                key={`${link.label}-${link.href}`}
                delay={BLUR_FADE_DELAY + (index + 2) * 0.05}
              >
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="h-12 w-full justify-between rounded-2xl px-4"
                >
                  <Link
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <span className="flex items-center gap-3 text-base font-medium">
                      {link.logoUrl ? (
                        <Image
                          src={link.logoUrl}
                          alt={link.logoAlt ?? `${link.label} logo`}
                          width={link.logoWidth ?? 40}
                          height={link.logoHeight ?? 40}
                          className="h-10 w-auto shrink-0 object-contain"
                        />
                      ) : null}
                      <span>{link.label}</span>
                    </span>
                    <ArrowUpRight className="size-4 opacity-60" />
                  </Link>
                </Button>
              </BlurFade>
            );
          })}
        </div>

        {DATA.contact.email && (
          <BlurFade delay={EMAIL_CTA_DELAY}>
            <Button asChild variant="outline" size="lg" className="h-12 w-full rounded-2xl">
              <Link href={`mailto:${DATA.contact.email}`}>Email me directly</Link>
            </Button>
          </BlurFade>
        )}

        <BlurFade delay={EMAIL_CTA_DELAY + 0.05}>
          <p className="text-center text-xs text-muted-foreground">
            Pick any link above to connect.
          </p>
        </BlurFade>
      </section>
    </main>
  );
}
