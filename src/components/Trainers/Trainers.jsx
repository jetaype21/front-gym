import TitleRed from "../../images/who-we-are/title-bg.svg";
import EncargadoBox from "./EncargadoBox";

function Encargados() {
  return (
    <>
      <section id="team" className="trainers-section">
        <div className="container page-padding py-[12rem]">
          {/* title div -- */}
          <div className="flex flex-col items-center text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
            entrenadores de gimnasio
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[21rem] absolute -top-[6px]"
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
            Equipo de entrenadores expertos
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Un experto equipo de entrenadores te ayuda a conseguir cualquier objetivo,
              <br /> orientación y motivación personalizadas
            </p>
          </div>

          {/* trainers div -- */}
          <div className="flex mt-20 ">
            <EncargadoBox />
          </div>
        </div>
      </section>
    </>
  );
}

export default Encargados;
