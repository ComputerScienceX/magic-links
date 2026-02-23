import * as LucideIcons from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiYoutube,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export type IconProps = React.ComponentProps<"svg">;

// Full icon sets available for direct use in data/config files.
export { LucideIcons };
export * as SocialIcons from "react-icons/si";
export * as SocialIconsFa from "react-icons/fa6";

// Convenience aliases for the current social links.
export const Icons = {
  github: (props: IconProps) => <SiGithub {...props} />,
  linkedin: (props: IconProps) => <SiLinkedin {...props} />,
  x: (props: IconProps) => <FaXTwitter {...props} />,
  youtube: (props: IconProps) => <SiYoutube {...props} />,
};
