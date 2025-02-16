import Link from "next/link";

const SocialsButtons = () => {
  return (
    <div className="hidden md:flex flex-col gap-5 fixed left-0 top-1/2 -translate-y-3/4 z-[100]">
      <Link href="" target="_blank">
        <div className="grid place-content-center w-14 h-14 bg-black hover:bg-red transition-all text-white">
          FB
        </div>
      </Link>
      <Link href="" target="_blank">
        <div className="grid place-content-center w-14 h-14 bg-black hover:bg-red transition-all text-white">
          IG
        </div>
      </Link>
      <Link href="" target="_blank">
        <div className="grid place-content-center w-14 h-14 bg-black hover:bg-red transition-all text-white">
          LI
        </div>
      </Link>
    </div>
  );
};

export default SocialsButtons;
