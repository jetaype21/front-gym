import React from "react";
import { Link } from "react-router-dom";

function Domingo() {
  return (
    <>
      {/* fiter buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/schedule/monday"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Lunes
        </Link>

        <Link
          to="/schedule/tuesday"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Martes
        </Link>

        <Link
          to="/schedule/wednesday"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Miercoles
        </Link>

        <Link
          to="/schedule/thursday"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Jueves
        </Link>

        <Link
          to="/schedule/friday"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Viernes
        </Link>

        <Link
          to="/schedule/saturday"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
        >
          Sabado
        </Link>

        <Link
          to="/schedule/sunday"
          className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] bg-[#ff0336] ease-in duration-200 hover:shadow-2xl text-white "
        >
          Domingo
        </Link>
      </div>

      {/* ---- */}

      {/* boxes */}
      <div className="mt-[5rem]">
        {/* monday */}
        <div className="flex flex-col gap-3">
          {/* row */}
          <ul className="flex justify-between w-full min800:flex-col min800:text-center">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Nombre de la clase
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Fitness</p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Tiempo</p>
              <p className="text-[18px] text-black font-bold mt-3">
                9:00am - 10:00am
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Encargado</p>
              <p className="text-[18px] text-black font-bold mt-3">
                David Vila
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full text-right min800:text-center">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 ">
                Unirme ahora
              </button>
            </li>
          </ul>
          {/* row */}
          <ul className="flex justify-between w-full min800:flex-col min800:text-center">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Nombre de la clase
              </p>
              <p className="text-[18px] text-black font-bold mt-3">
                Musculación
              </p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Tiempo</p>
              <p className="text-[18px] text-black font-bold mt-3">
                10:00pm - 11:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Encargado</p>
              <p className="text-[18px] text-black font-bold mt-3">
                John Weights
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full text-right min800:text-center">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 ">
                Unirme ahora
              </button>
            </li>
          </ul>
          {/* row */}
          <ul className="flex justify-between w-full min800:flex-col min800:text-center">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Nombre de la clase
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Atletismo</p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Tiempo</p>
              <p className="text-[18px] text-black font-bold mt-3">
                4:00pm - 5:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Encargado</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Junifor Jonas
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full text-right min800:text-center">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 ">
                Unirme ahora
              </button>
            </li>
          </ul>
          {/* row */}
          <ul className="flex justify-between w-full min800:flex-col min800:text-center">
            {/* class name */}
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Nombre de la clase
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Ciclismo</p>
            </li>
            {/* time */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Tiempo</p>
              <p className="text-[18px] text-black font-bold mt-3">
                6:00pm - 7:00pm
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Encargado</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Robert Louis
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full text-right min800:text-center">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 ">
                Unirme ahora
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Domingo;
