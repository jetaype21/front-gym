import TitleRed from "../../images/who-we-are/title-bg.svg";
import BlogBox from "./BlogBox";

function Blog() {
  return (
    <>
      <section id="blog" className="bg-white ">
        <div className="container page-padding py-[10rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              Ultimas publicaciones
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px]"
            />

            <h2 className="text-[3.4rem] font-bold mb-4">Noticias recientes</h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Gymat un impresor desconocido tomó una galera de tipos y revolvió
              <br /> hacer un muestrario de tipos.
            </p>
          </div>

          {/* blog boxes */}
          <div className="flex gap-6 w-full mt-[5rem] md1200:justify-center flex-wrap">
            <BlogBox
              bgClass="box1Bg"
              date="22.03.2022"
              title="Conozca a Grace, embajadora de la buena forma física"
              description="Se trata de un programa diseñado para que la práctica del yoga resulte beneficiosa para personas de todas las edades, capacidades y procedencias."
            />
            <BlogBox
              bgClass="box2Bg"
              date="13.09.2022"
              title="Conozca a Grace, embajadora de la buena forma física"
              description="Se trata de un programa diseñado para que la práctica del yoga resulte beneficiosa para personas de todas las edades, capacidades y procedencias."
            />
            <BlogBox
              bgClass="box3Bg"
              date="28.06.2022"
              title="Conozca a Grace, embajadora de la buena forma física"
              description="Se trata de un programa diseñado para que la práctica del yoga resulte beneficiosa para personas de todas las edades, capacidades y procedencias."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
