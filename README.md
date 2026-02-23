# Link Homepage

Minimal Next.js link homepage

## Stack

- Next.js
- React + TypeScript
- Tailwind CSS
- shadcn/ui primitives

## Run locally

## NOTE: this project is configured to use `npm`
1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```
NOTE: If commands fail, try with sudo_for example, sudo npm run build

3. Edit homepage content in:

   - `src/data/resume.tsx`
   - `src/app/page.tsx`
You can remove and add extra links on this page(resume.tsx)

## Social Icons

Social icons are provided via `react-icons` and exported from `src/components/icons.tsx`.

View icon library and codes here:
https://react-icons.github.io

Example usage in `src/data/resume.tsx`:

```tsx
import { SocialIcons, SocialIconsFa } from "@/components/icons";

icon: SocialIcons.SiGithub
icon: SocialIcons.SiLinkedin
icon: SocialIconsFa.FaXTwitter
icon: SocialIcons.SiYoutube
```

Box links can also use optional transparent logos:

```tsx
boxLinks: [
  {
    label: "YouTube",
    href: "https://youtube.com",
    logoUrl: "/logos/youtube.png",
    logoWidth: 20,
    logoHeight: 20,
  },
]
```

4. Build the code for deployment:

   ```bash
   npm run build
   ```

5. Start deployment server:

   ```bash
   npm start
   ```

NOTE: If commands fail, try with sudo_for example, sudo npm run build

## License

Licensed under the [MIT license](./LICENSE).
