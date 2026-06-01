import Link from "next/link";
import { ReactNode } from "react";
import { Button, ButtonProps } from "../ui/button";
import { GithubIcon, LinkedinIcon } from "../icons/brand";

type SocialNetwork = "github" | "linkedin";

type ButtonSocialNetworkProps = ButtonProps & {
  socialNetwork: SocialNetwork;
};

const SOCIAL: Record<
  SocialNetwork,
  { url: string; label: string; icon: ReactNode }
> = {
  github: {
    url: "https://github.com/EduardoDadalt",
    label: "GitHub",
    icon: <GithubIcon className="size-5" />,
  },
  linkedin: {
    url: "https://www.linkedin.com/in/eduardo-dadalt/",
    label: "LinkedIn",
    icon: <LinkedinIcon className="size-5" />,
  },
};

export default function ButtonSocialNetwork({
  socialNetwork,
  ...props
}: ButtonSocialNetworkProps) {
  const { url, label, icon } = SOCIAL[socialNetwork];

  return (
    <Button asChild variant="outline" size="icon" {...props}>
      <Link href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {icon}
      </Link>
    </Button>
  );
}
