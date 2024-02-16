import Image from "next/image";
import Link from "next/link";
import devconLogo from "../../public/images/devcon-logo.png";
import sponsors from "../../public/images/sponsors.png";

export default function Navbar() {
  return (
    <nav className="absolute top-0 flex flex-col md:flex-row justify-between pt-10 lg:pt-14 xl:px-36 px-10 gap-5 md:gap-0 md:px-14 lg:px-20 items-center z-30 w-screen mx-auto h-screen pb-10 md:pb-0 md:h-auto">
      <Link href={"/"}>
        <Image height={100} width={150} src={devconLogo} alt="devcon logo" />
      </Link>

      <Image height={100} width={150} src={sponsors} alt="sponsor logos" />
    </nav>
  );
}
