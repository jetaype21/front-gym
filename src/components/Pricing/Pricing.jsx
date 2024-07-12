import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgDumbell from "../../images/pricing/bg-dumbell.png";
import PricingBox from "./PricingBox";

import Img1 from "../../images/pricing/img1.jpg";
import Img2 from "../../images/pricing/img2.jpg";
import Img3 from "../../images/pricing/img3.jpg";
import { useEffect, useState } from "react";

function Pricing() {
  const imagenes = [Img1, Img2, Img3]
  const [precios, setPrecios] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://gym-solution-back.onrender.com/precios');
      if (!response.ok) {
        throw new Error('Error al obtener los precios');
      }
      const precios = await response.json();
      setPrecios(precios)
    }

    getData()

  }, [])

  return (
    <>
      <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[12rem] ">
          <img src={BgText} className="left-0 absolute" alt="bg_img" />
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              Grafico de precios
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px] "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Planes exclusivos
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Gymat el gimnasio que viene para transformarte

              <br /> Empieza con nuestros siguientes planes
            </p>
          </div>
          {/* pricing boxes */}
          <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
            {
              precios.length === 0 ?
                <p>cargando precios</p>
                :
                <>
                  {precios.map((precio, index) =>
                    <PricingBox img={imagenes[index]} price={precio.precio} price_name={precio.nombre_plan} plan_features={precio.features} />
                  )}
                </>
            }
          </div>
          <img
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1]"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;
