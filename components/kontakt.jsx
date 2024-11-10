// import React from "react";

export default function Kontakt() {
  return (
    <section className="relative text-gray-600 body-font">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=cz&q=%C4%B0Nebuzely+3+(Svou%20Cestou)&ie=UTF8&t=&z=13&iwloc=B&output=embed"
          // src="https://maps.google.com/maps?width=100%&height=600&hl=cz&q=%C4%B0Nebuzely+3+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27046.69039827414!2d14.56043130251515!3d50.40239049783139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470be198b4700cb3%3A0x2c58ca874da341c7!2sSvou%20cestou!5e1!3m2!1scs!2scz!4v1729627813623!5m2!1scs!2scz"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27046.690398274135!2d14.56043130251515!3d50.40239049783139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470be198b4700cb3%3A0x2c58ca874da341c7!2sSvou%20cestou!5e1!3m2!1scs!2scz!4v1729628006515!5m2!1scs!2scz"
          style={{ filter: "grayscale(1) contrast(1.1) opacity(0.5)" }}
        />
      </div>
      <div className="container flex px-2 py-24 mx-auto">
        <div className="relative z-10 flex flex-col w-full p-4 mt-4 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/3 md:ml-0 md:mt-2">
          <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
            Svou Cestou
          </h2>
          <p className="mb-5 leading-relaxed text-gray-600">
            Montessori škola a školka
          </p>

          <p className="mt-3 text-xs text-gray-500">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
}
