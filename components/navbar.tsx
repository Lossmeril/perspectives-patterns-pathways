import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

type NavbarItem = {
  text: string;
  link: string;
  blank?: boolean;
};

const navbarItems: NavbarItem[] = [
  { text: "Home", link: "/" },
  { text: "Speakers", link: "#speakers" },
  { text: "Panels", link: "#panels" },
  { text: "Contact", link: "#contact" },
];

const Navbar = () => {
  const button = { text: "Book your seat →", link: "https://google.com" };

  const [menu, toggleMenu] = useState(false);

  return (
    <div className="w-4/5 xl:w-3/4 mx-auto mt-8 md:mt-10">
      {/* -------- DESKTOP */}
      <nav className="w-full hidden lg:flex flex-row justify-between items-center gap-10 xl:gap-20">
        {navbarItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            target={item.blank ? "_blank" : ""}
            className="link"
          >
            <p className="navbar-link text-md xl:text-lg">{item.text}</p>
          </Link>
        ))}
        <Link href={button.link} target={"_blank"} className="button">
          <p className="navbar-link text-md xl:text-lg">{button.text}</p>
        </Link>
      </nav>

      {/* -------- MOBILE */}
      <div className="flex lg:hidden flex-row flex-nowrap justify-between items-center">
        <div onClick={() => toggleMenu(true)}>
          <IoMenu size={30} />
        </div>
        <Link href={button.link} target={"_blank"} className="button">
          <p className="navbar-link text-md">{button.text}</p>
        </Link>
      </div>
      <nav
        className="flex lg:hidden fixed bg-red w-screen h-screen top-0 z-[200] transition-all flex-col justify-center items-center gap-10 text-beige mobile-navbar"
        style={{ left: menu ? "0" : "-100vw" }}
      >
        <div
          onClick={() => toggleMenu(false)}
          className="absolute top-[2.9rem] left-10 scroll"
        >
          <IoMdClose size={36} />
        </div>

        {navbarItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            target={item.blank ? "_blank" : ""}
            className="link"
            onClick={() => toggleMenu(false)}
          >
            <p className="navbar-link text-xl">{item.text}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
