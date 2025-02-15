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
  { text: "Book your seat »", link: "https://google.com", blank: true },
];

const Navbar = () => {
  return (
    <div className="w-3/4 mx-auto mb-5">
      {/* -------- DESKTOP */}
      <nav className="w-full flex flex-row justify-between items-center gap-20">
        {navbarItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            target={item.blank ? "_blank" : ""}
          >
            <p className="navbar-link text-lg">{item.text}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
