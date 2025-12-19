import NewsLatterBox from "./NewsLatterBox";

import Link from 'next/link'

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Email
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Please reach out if you have any questions or feedback
              </p>
              <form>
                {/* <div className="-mx-4 flex flex-wrap"> */}
                  <div className="w-full px-0 md:w-1/2">
                    <div className="mb-8">

                    <Link href="mailto:hello@maha.bio" target="_blank" rel="noopener noreferrer">
                      hello@ntrpx.com
                    </Link>


                      {/* <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        hello@maha.bio
                      </label> */}
                      {/* <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      /> */}
                    </div>
                  </div>



              </form>
            </div>

            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Address
              </h2>
              <p className="mb-2 text-base font-medium text-body-color">
                    5830 E 2nd St
                    <br/>
                    Suite 7000
                    <br/>
                    Casper, Wyoming 82609 
                    <br/>
                    USA
              </p>
              <form>
                {/* <div className="-mx-4 flex flex-wrap"> */}




              </form>
            </div>

          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
