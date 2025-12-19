import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="relative z-10 overflow-hidden bg-white pb-24 pt-[40px] dark:bg-gray-dark md:pb-[220px] md:pt-[40px] xl:pb-[40px] xl:pt-[40px] 2xl:pb-[200px] 2xl:pt-[40px]">
        <div className="container">
          {/* <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          /> */}

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mx-6">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
