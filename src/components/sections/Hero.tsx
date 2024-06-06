import { Container } from "@components";
import Link from "next/link";
import "@fontsource/cinzel";
import Head from "next/head";

const Hero: React.FC = () => {
  return (
    <section className="background-overlay hero pt-[104px] pb-[56px] h-screen tablet:pt-[124px] tablet:pb-[64px] desktop:pt-[130px] desktop:pb-[104px]">
      <Container>
        <div className="relative flex flex-col gap-[24px] pt-[76px] tablet:flex-row tablet:gap-[48px] desktop:gap-[148px] tablet:pt-0">
          <div className="flex flex-col gap-[24px] tablet:gap-[68px]">
            <h1 className="text-[40px] tablet:text-[67px] desktop:text-[78px] font-thin leading-[1.4] tracking-[-1.6px] tablet:tracking-[-2.68px] desktop:tracking-[-3.92px] tablet:leading-normal uppercase">
              <span className="inline-block font-medium">Comfort Partners</span>
              <br />
              {"premium"}
              <br />
              chauffeur Services
            </h1>

            <p className="text-[10px] tablet:text-[14px] desktop:text-[16px] font-extralight leading-[1.6] tablet:leading-[1.143] desktop:leading-[1.5] tablet:tracking-[1.26px] desktop:tracking-[1.44px]">
              {`London / Manchester / Liverpool / ${" "} `}
              <br className="desktop:hidden" />
              Leicester / Nottingham/ Coventry / Birmingham / All Major UK Airports For Arrivals & Departure
            </p>
          </div>

          <div className="flex flex-col gap-[24px] tablet:gap-[28px] tablet:w-[230px] desktop:w-[294px] desktop:ml-auto">
            <h2 className="absolute top-0 right-0 tablet:static tablet:mb-auto tablet:leading-normal">
              <p className="flex flex-col tablet:leading-normal">
                <span className="inline-block text-[37px] tablet:text-[67px] desktop:text-[98px] font-medium leading-none tablet:leading-normal">
                  Unity
                </span>
                <span className="inline-block text-[33px] tablet:text-[67px] desktop:text-[78px]  font-thin tracking-[1.665px] tablet:tracking-[8.71px] desktop:tracking-normal leading-none tablet:leading-normal uppercase">
                  Travels
                </span>
              </p>
              {/* <span className="inline-block text-[12px] mt-5 tablet:text-[14px] desktop:text-[16px] font-light tracking-[9.48px] tablet:tracking-[25.9px] desktop:tracking-[36.48px] leading-none uppercase translate-y-[-10px] tablet:translate-y-[-24px] desktop:translate-y-[-32px]">
                Travels
              </span> */}
            </h2>

            <p className="text-[14px] tablet:text-[16px] desktop:text-[18px] text-justify font-extralight leading-[1.428] tablet:leading-[1.25] desktop:leading-[1.333] tablet:shrink">
              Facilitating Student arrivals and departures all over UK, Day
              Trips, Picnics, Weddings, Luxury Hires and much more.
            </p>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfc5I8ktvpB6z4RtlCXrWZnQRPIx_LWscGyS-NvKFMM8EgqxQ/viewform?pli=1&pli=1"
              aria-label="Go to the contacts information"
              target="_blank"
              className="hero-btn relative flex justify-center items-center  w-full h-[53px] tablet:h-[50px] desktop:h-[71px] text-[18px] desktop:text-[32px] font-bold leading-[2.666] tablet:leading-normal uppercase transition_prop bg-gray-middle hover:bg-gray-strong focus:bg-gray-strong focus:outline-none"
            >
              Book Your Trip
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
