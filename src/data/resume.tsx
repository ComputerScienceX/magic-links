import { LucideIcons, SocialIcons, SocialIconsFa } from "@/components/icons";

export type BoxLink = {
  label: string;
  href: string;
  // Optional transparent logo from /public (example: "/logos/youtube.png")
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
};

export type TopButtonLink = {
  label: string;
  href: string;
  // Transparent logo from /public (example: "/logos/onlyfans.png")
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
};

const topButtonLink: TopButtonLink = {
  label: "OnlyFans",
  href: "https://onlyfans.com",
  logoUrl: "/of-transparent.png",
  logoAlt: "OnlyFans symbol",
  logoWidth: 40,
  logoHeight: 29,
};

const boxLinks: BoxLink[] = [
  {
    label: "youtube",
    href: "https://youtube.com",
  },
  {
    label: "ComputerScienceX.com",
    href: "https://computersciencex.com",
          logoUrl: "/AVRedLogo.png",

  },
  {
    label: "X",
    href: "https://dub.sh/dillion-twitter",
          logoUrl: "/AVRedLogo.png",

  },
  {
    label: "Youtube",
    href: "https://dub.sh/dillion-youtube",
      logoUrl: "/AVRedLogo.png",

  },
];

export const DATA = {
  name: "Dillion Verma",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  avatarUrl: "/me.png",
  navbar: [{ href: "/", icon: LucideIcons.HomeIcon, label: "Home" }],
  topButtonLink,
  boxLinks,
  contact: {
    email: "hello@example.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: SocialIcons.SiGithub,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: SocialIcons.SiLinkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: SocialIconsFa.FaXTwitter,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://instagram.com",
        icon: SocialIconsFa.FaInstagram,
        navbar: true,
      },
    },
  },
};
