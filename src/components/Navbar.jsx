export default function Navbar() {
  const links = [
    { name: "HOME", value: "/" },
    { name: "DISCOVERY", value: "/discovery" },
    { name: "PHOTOS", value: "/photos" },
    { name: "CONTACT", value: "/contact" },
  ];
  return (
    <div className="flex navbar">
      <div className="logo">
        <img
          src={"/logo.jpeg"}
          alt="logo"
          className="img"
        />
      </div>
      <div className="link-container">
        {links.map((link) => {
          // react rotuer will be requierd to check each route
          const active = link.value === "/";
          return (
            <a
              key={link.name}
              href={link.value}
              className={`${
                active
                  ? "active-link"
                  : "link"
              }`}
            >
              {link.name}
            </a>
          );
        })}
        <img 
          src="/user.png"
          alt="user"
          className="user-icon"
        />
      </div>
    </div>
  );
}
