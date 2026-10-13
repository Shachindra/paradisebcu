import Image from "next/image";
import logo from "@/assets/logo.png";

type LogoProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function Logo({
  className,
  priority = false,
  alt = "Paradise logo, three towers and a leaf in a gold and green ring",
}: LogoProps) {
  return <Image src={logo} alt={alt} priority={priority} className={className} />;
}
