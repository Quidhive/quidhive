//
"use client";
import Header from "@/components/header/Header";
import Image from "next/image";
import BFACard from "@/components/card/BFACard";
import HowItWorks from "@/components/card/HowItWorks";
import {
  bfa,
  howItWorks,
  testimonials,
  upcoming,
} from "@/utils/constants/constants.utils";
import { useState } from "react";
import WorkScrollerCss from "@/components/animate/WorkerScrollCss";
import Testimonial from "@/components/card/Testimonial";
import Upcoming from "@/components/card/Upcoming";
import Faq from "@/components/card/Faq";
import { FAQ } from "@/utils/constants/faq.constant";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import Work from "@/components/card/Work";

export default function Home() {
  const [selected, setSelected] = useState(0);
  const items1 = [
    { avatar: "/avatars/sophia.svg", text: "Designers" },
    { avatar: "/avatars/raviP.svg", text: "Software Engineers" },
    { avatar: "/avatars/authur.svg", text: "Animators" },
    { avatar: "/avatars/emma.svg", text: "Digital Marketers" },
    { avatar: "/avatars/wei.svg", text: "Virtual Assistants" },
    { avatar: "/avatars/ravi.svg", text: "NFT / Web3 Creators" },
    { avatar: "/avatars/wei.svg", text: "Others" },
  ];
  const items2 = [
    { avatar: "/avatars/authur.svg", text: "Builders" },
    { avatar: "/avatars/authurT.svg", text: "Agencies" },
    { avatar: "/avatars/authur.svg", text: "Web3" },
    { avatar: "/avatars/authur.svg", text: "Crypto Projects" },
    { avatar: "/avatars/emmaW.svg", text: "Founders" },
    { avatar: "/avatars/emma.svg", text: "Startups" },
    { avatar: "/avatars/weiC.svg", text: "Authors & Public Speakers" },
    { avatar: "/avatars/raviP.svg", text: "Outsourcing Platforms" },
    { avatar: "/avatars/ravi.svg", text: "Recruiters" },
    { avatar: "/avatars/weiC.svg", text: "Others" },
  ];
  const [faq, setFaq] = useState(0);
  return (
    <div className="relative">
      <Header />
      <main className="xl:w-[1145px] sm:w-[90%] m-auto sm:mt-50 mt-38">
        <section className="text-center font-bold tablet:text-6xl phone:text-5xl text-3xl">
          <h1 className="text-text-white-alt">Payment Links for</h1>
          <h2 className="mt-2 text-text-blue">Freelancers</h2>
          <p className="text-text-faded-2 text-base sm:w-[492px] w-[85%] m-auto font-normal mt-8">
            Create a payment link in seconds and let clients{" "}
            <span className="font-bold">pay by card or crypto</span>, with your
            funds securely held in escrow (Hive)
          </p>
        </section>
        <img
          src="/images/payment-link-mobile.png"
          className="mt-20 w-[100%] h-full md:h-[456px] tablet:w-[830px] tablet:hidden block object-cover"
          alt=""
        />
        <section
          className={`relative w-[100%] h-full md:h-[456px] tablet:w-[830px] tablet:block hidden m-auto mt-20`}
        >
          <Image
            src="/images/payment-link-pay-with-card.png"
            alt="create payment link and clients pay with card or stable coin"
            fill
            className="object-cover rounded-lg selector"
          />
        </section>
        <section className="flex flex-col items-center sm:mt-24 mt-12 sm:border-b border-border-2 sm:pb-20 sm:w-full w-[95%] m-auto">
          <div className="bg-deep-green p-4 rounded-full text-primary-green font-bold sm:text-2xl phone:text-xl text-lg px-6">
            <p>😮‍💨 Breathe of fresh air</p>
          </div>
          <p className="text-text-faded-3 text-sm sm:w-[482px] w-[85%] text-center sm:mt-8 mt-6">
            The Old Way is Broken.{" "}
            <span className="sm:block hidden">
              Quidhive is the Web3-native solution built for speed and clarity.
            </span>{" "}
            We cut through the friction by giving you;
          </p>
          <div className="flex sm:flex-row flex-col w-full sm:mt-14 mt-10 phone:gap-8 gap-6">
            {bfa.map((obj, index) => (
              <BFACard
                key={index}
                img={obj.img}
                title={obj.title}
                text={obj.text}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center sm:mt-20 mt-10 sm:w-full w-[95%] m-auto">
          <div className="bg-bg-elev-1 p-4 rounded-full text-text-blue font-bold sm:text-2xl phone:text-xl text-lg px-6">
            <p>🤔 We need to ask</p>
          </div>
          <div className="w-full sm:mt-18 mt-12 flex items-end justify-between gap-10">
            <div className="sm:w-5/12">
              <p className="sm:text-2xl phone:text-xl text-lg text-text-faded-3 font-semibold">
                How does Quidhive work?
              </p>
              <div className="sm:mt-10 mt-8">
                <div className="flex flex-col sm:gap-4 gap-5 ">
                  {howItWorks.map((obj, index) => (
                    <HowItWorks
                      key={index}
                      img={obj.img}
                      title={obj.title}
                      text={obj.text}
                      step={index + 1}
                      active={selected === index}
                      image={obj.image}
                      onClick={() => setSelected(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-7/12 sm:block hidden">
              <div className={`relative m-auto`}>
                <img
                  className="object-cover"
                  src={howItWorks[selected].image}
                  alt={howItWorks[selected].title}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="sm:mt-30 mt-20 bg-bg-75 sm:px-10 sm:py-8 py-5 phone:rounded-4xl rounded-lg flex flex-col items-center sm:w-full w-[95%] m-auto">
          <img src="/icons/agree.svg" className="sm:h-auto h-14" alt="" />
          <div className="w-full">
            <p className="text-text-faded-2 sm:text-xl font-semibold text-center sm:mt-4 mt-8">
              Built for Freelancers,{" "}
            </p>
            <div className="w-full m-auto mt-7 sm:block hidden">
              <WorkScrollerCss items={items1} className="scroll-left" />
            </div>
            <div className="sm:hidden items-center flex justify-center gap-2 flex-wrap mt-7">
              {items1.map((item, i) => (
                <Work key={i} avatar={item.avatar} text={item.text} />
              ))}
            </div>
          </div>
          <div className="w-full mt-14">
            <p className="text-text-faded-2 sm:text-xl font-semibold text-center">
              Loved by Clients,
            </p>
            <div className="w-full m-auto mt-7 sm:block hidden">
              <WorkScrollerCss items={items2} className="scroll-right" />
            </div>
            <div className="sm:hidden items-center flex justify-center gap-2 flex-wrap mt-7">
              {items2.map((item, i) => (
                <Work key={i} avatar={item.avatar} text={item.text} />
              ))}
            </div>
          </div>
          <div className="flex item-end gap-3 sm:mt-14 mt-8">
            <h3 className="text-text-faded-2 phone:text-xl text-sm font-semibold">
              Backed by
            </h3>
            <img
              className="phone:h-auto h-[15px]"
              src="/logos/base-logo.svg"
              alt=""
            />
          </div>
        </section>

        <section className="flex flex-col items-center justify-center am:mt-20 mt-18 w-[95%] m-auto">
          <div className="bg-deep-green p-4 rounded-full text-primary-green font-bold sm:text-2xl phone:text-xl text-lg px-6">
            <p>💬 Testimonials</p>
          </div>
          <div className="flex sm:flex-row flex-col w-full gap-5 sm:mt-14 mt-7">
            {testimonials.map((obj, index) => (
              <Testimonial
                key={index}
                text={obj.text}
                name={obj.name}
                work={obj.work}
                image={obj.image}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center justify-center sm:mt-38 mt-20 w-[95%] m-auto">
          <div className="bg-bg-elev-1 p-4 rounded-full text-text-blue font-bold sm:text-2xl phone:text-xl text-lg px-6">
            <p>📍 We'll keep pollinating...</p>
          </div>
          <p className="sm:mt-7 mt-5 text-text-faded-3 text-sm phone:w-auto w-[90%] text-center">
            From earning to spending, and everything in-between
          </p>
          <div className="w-full sm:mt-14 mt-10 flex sm:flex-row flex-col sm:gap-14 gap-9">
            {upcoming.map((obj, index) => (
              <Upcoming
                key={index}
                img={obj.img}
                title={obj.title}
                text={obj.text}
                textColor={obj.textColor}
              />
            ))}
          </div>
        </section>

        <section className="sm:mt-34 mt-18 flex flex-col items-center justify-center">
          <p className="text-text-white sm:text-2xl phone:text-xl text-lg font-bold">
            Frequently asked questions
          </p>

          <div className="sm:mt-10 mt-2 sm:w-[70%] phone:w-[85%] w-[95%] m-auto">
            {FAQ.map((obj, index) => (
              <Faq
                onClick={() => {
                  if (faq === index) {
                    setFaq(-1);
                  } else {
                    setFaq(index);
                  }
                }}
                key={index}
                quest={obj.quest}
                ans={obj.ans}
                show={faq === index}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className="w-full bg-bg-elev-2 py-10 mt-20">
        <div className="w-[80%] m-auto">
          <img src="/logos/logo.svg" className="phone:h-auto h-9" alt="logo" />
          <div className="flex sm:flex-row flex-col justify-between sm:items-end gap-5">
            <p className="text-text-faded-3 font-semibold phone:text-lg mt-3">
              Payment Links, Onchain Escrow
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-bg-elev-1 p-2 rounded-full">
                <RiTwitterXFill />
              </div>
              <div className="bg-bg-elev-1 p-2 rounded-full">
                <BiLogoTelegram />
              </div>
              <div className="bg-bg-elev-1 p-2 rounded-full">
                <img
                  src="/icons/farcaster.svg"
                  className="h-[15px]"
                  alt="farcaster"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
