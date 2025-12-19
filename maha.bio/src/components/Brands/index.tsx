import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-28 pb-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">

            “[Nicotine pouches] present significantly lower health risks than smoking, because [they] do not contain cancer-causing chemicals and other toxic substances found in cigarette smoke. So [nicotine pouches] may offer adult smokers who have not been able to quit smoking a way to reduce their exposure to the toxic chemicals that cause disease, including cancer.”
            
            <p className="mt-6 mb-0 text-base font-medium leading-relaxed text-body-color sm:text-m sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-m xl:leading-relaxed">
            — Vaughan Rees, Senior Lecturer Director of the Center for Global Tobacco Control at Harvard T.H. Chan School of Public Health
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href="https://hsph.harvard.edu/news/zyn-pouches-safer-than-smoking-but-still-pose-risks/"
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
