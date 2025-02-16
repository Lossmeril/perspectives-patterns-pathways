import Link from "next/link";

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
  { text: "Book your seat →", link: "https://google.com", blank: true },
];

const Navbar = () => {
  return (
    <div className="w-4/5 xl:w-3/4 mx-auto mb-5">
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
      </nav>

      {/* -------- DESKTOP */}
    </div>
  );
};

export default Navbar;
