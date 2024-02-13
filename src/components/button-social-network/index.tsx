import { Github, Linkedin } from "lucide-react";
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
  const getIconByType = (socialNetwork: SocialNetwork): ReactNode => {
    switch (socialNetwork) {
      case "github":
        return <Github size={defaultSize} />;

      case "linkedin":
        return <Linkedin size={defaultSize} />;
    }
  };

  return (
    <Button asChild variant="outline" className="p-2">
      <Link href={getUrlByType(socialNetwork)} target="_blank">
        {getIconByType(socialNetwork)}
      </Link>
    </Button>
  );
}
