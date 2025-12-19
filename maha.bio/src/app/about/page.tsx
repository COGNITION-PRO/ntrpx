import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTRPX LLC - About",
  description: "Engineering biological energy and cognition systems from first principles",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="NTRPX LLC"
        description="Engineering biological energy and cognition systems from first principles"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
