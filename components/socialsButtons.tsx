import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialsButtons = () => {
  return (
    <div className="hidden md:flex flex-col gap-5 fixed left-0 top-1/2 -translate-y-3/4 z-[100]">
      <Link href="" target="_blank">
        <div className="grid place-content-center w-14 h-14 bg-black hover:bg-red transition-all text-white">
          <FaFacebook size={24} />
        </div>
      </Link>
      <Link href="" target="_blank">
        <div className="grid place-content-center w-14 h-14 bg-black hover:bg-red transition-all text-white">
          <FaInstagram size={26} />
        </div>
      </Link>
      <Link href="" target="_blank">
        <div className="grid place-content-center w-14 h-14 bg-black hover:bg-red transition-all text-white">
          <FaLinkedin size={26} />
        </div>
      </Link>
    </div>
  );
};

export default SocialsButtons;
