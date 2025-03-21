import { instagram, linkedin } from "@/datasets/links";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialsButtons = () => {
  return (
    <div className="hidden md:flex flex-col gap-5 fixed left-0 top-1/2 -translate-y-3/4 z-[100]">
      {/* <Link href={facebook} target="_blank">
        <div className="grid place-content-center w-14 h-14 bg-black hover:bg-red transition-all text-beige">
          <FaFacebook size={24} />
        </div>
      </Link> */}
      <Link href={instagram} target="_blank" aria-label="Instagram">
        <div
          className="grid place-content-center w-14 h-14 bg-black hover:bg-red transition-all text-beige"
          aria-hidden="true"
        >
          <FaInstagram size={26} />
        </div>
      </Link>
      <Link href={linkedin} target="_blank" aria-label="LinkedIn">
        <div
          className="grid place-content-center w-14 h-14 bg-black hover:bg-red transition-all text-beige"
          aria-hidden="true"
        >
          <FaLinkedin size={26} />
        </div>
      </Link>
    </div>
  );
};

export default SocialsButtons;
