import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTRPX LLC - Contact",
  description: "Contact form for NTRPX LLC",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact NTRPX"
        description="NTRPX Contact Information"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
