import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ReactNode } from "react";
import { Button, ButtonProps } from "../ui/button";

type SocialNetwork = "github" | "linkedin";

type ButtonSocialNetworkProps = ButtonProps & {
  socialNetwork: SocialNetwork;
};

export default function ButtonSocialNetwork({
  socialNetwork,
  ...props
}: ButtonSocialNetworkProps) {
  const defaultSize = 20;
  const getUrlByType = (socialNetwork: SocialNetwork): string => {
    switch (socialNetwork) {
      case "github":
        return "https://github.com/EduardoDadalt";
      case "linkedin":
        return "https://www.linkedin.com/in/eduardo-dadalt/";
    }
  };
  const getLabelByType = (socialNetwork: SocialNetwork): string => {
    switch (socialNetwork) {
      case "github":
        return "GitHub";
      case "linkedin":
        return "LinkedIn";
    }
  };
  const getIconByType = (socialNetwork: SocialNetwork): ReactNode => {
    switch (socialNetwork) {
      case "github":
        return <GitHubLogoIcon width={defaultSize} height={defaultSize} />;

      case "linkedin":
        return <LinkedInLogoIcon width={defaultSize} height={defaultSize} />;
    }
  };

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="rounded-full bg-white/80"
      {...props}
    >
      <Link
        href={getUrlByType(socialNetwork)}
        target="_blank"
        aria-label={getLabelByType(socialNetwork)}
        title={getLabelByType(socialNetwork)}
      >
        {getIconByType(socialNetwork)}
      </Link>
    </Button>
  );
}
