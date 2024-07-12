import { Link } from "react-router-dom";

function NavList() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/">Home</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/about"}>
            Acerca de nosotros
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/gallery/page-1"}>
            Fotos
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/schedule/monday"}>
            Horarios
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/pricing"}>
            Precios
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/contact"}>
            Contactanos
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;
