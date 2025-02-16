import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-4/5 xl:w-3/4 mx-auto my-8">
      <div className="w-full flex flex-row justify-between items-center gap-2 md:gap-10 xl:gap-20 text-xs lg:text-sm">
        <p>Design by Saria Nguyen</p>
        <p>Webdesign by Michal Špitálský</p>
        <Link
          href="https://github.com/Lossmeril/perspectives-patterns-pathways"
          target="_blank"
          className="link"
        >
          <p>Source code &#x2192;</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
