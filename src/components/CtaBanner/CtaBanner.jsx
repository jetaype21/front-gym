import MainButton from "../MainButton";

function CtaBanner() {
  return (
    <>
      <section className="cta-section w-full h-auto">
        <div className="container page-padding py-[7rem] text-white">
          <h2 className="text-[36px] font-bold">Necesitas un entrenador?</h2>
          <h3 className="text-[28px] font-bold mb-20">
            <span className="text-[#FF0336]">Llama:</span> +51 98654321
          </h3>
          <MainButton
            color={`text-white`}
            bg={`bg-[#ff0336]`}
            text="Ingresa ahora"
            arrowColor={`text-white`}
            cN="pricing-cta cta-banner-btn"
            goTo="/contact"
          />
        </div>
      </section>
    </>
  );
}

export default CtaBanner;
