import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Job", url: "/post-job" },
    { name: "About Us", url: "/about" },
  ];

  const location = useLocation();

  return (
    <div className="flex gap-5 h-full items-center">
      {links.map((link, index) => {
        const isActive = location.pathname === link.url;
        return (
          <div
            key={index}
            className={`h-full flex items-center ${
              isActive ? " border-t-[3px] border-yellow-400" : ""
            }`}
          >
            <Link
              to={link.url}
              className={`hover:underline ${
                isActive ? "text-yellow-400 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
