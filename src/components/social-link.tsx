import type { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  children: ReactNode;
}

const SocialLink = ({ href, children }: SocialLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="button">
      {children}
    </a>
  );
};

export default SocialLink;
