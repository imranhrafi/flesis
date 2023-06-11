import Link from "next/link";
import { ReactNode } from "react";

interface NextLinkProps {
  href: string;
  children: ReactNode;
}

const NextLink = ({ href, children }: NextLinkProps) => {
  return <Link href={href}>{children}</Link>;
};

export default NextLink;
