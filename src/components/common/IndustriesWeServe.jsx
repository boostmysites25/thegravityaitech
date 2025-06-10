import { industries } from "../../content/constant";
import SubHeading from "./SubHeading";

const IndustriesWeServe = () => {
  return (
    <section className="wrapper py-[4rem]">
      <div className="flex flex-col gap-5">
        <div data-aos="fade-up" className="flex flex-col items-center gap-4 text-center">
          <SubHeading heading="Industries we serve" className="text-white" />
          <h2 className="text1 text-3xl md:text-4xl font-bold">
            Transforming Industries with Tailored Solutions
          </h2>
          <p className="mt-2 desc mb-5 max-w-3xl mx-auto text-lg">
            We cater to a wide range of industries, delivering tailored AI and
            tech solutions to meet specific needs:
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((item) => (
            <div
              key={item.id}
              className="rounded-xl shadow-xl relative group overflow-hidden min-h-[280px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                width="400"
                height="300"
                className="w-full h-full object-cover absolute top-0 left-0 rounded-xl group-hover:scale-110 transition-all duration-500"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-primary/30 to-primary/70 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white mb-2 transform transition-all duration-300 translate-y-2 group-hover:translate-y-0 drop-shadow-lg">
                  {item.title}
                </h3>
                <div className="h-1 w-16 bg-white rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <p className="text-white/90 text-lg opacity-0 group-hover:opacity-100 transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
