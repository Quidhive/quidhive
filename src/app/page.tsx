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
import { SiFarcaster } from "react-icons/si";

export default function Home() {
  const [selected, setSelected] = useState(0);
  const items1 = [
    { avatar: "/avatars/sophia.svg", text: "Software Engineers" },
    { avatar: "/avatars/authur.svg", text: "Animators" },
    { avatar: "/avatars/emma.svg", text: "Digital Marketers" },
    { avatar: "/avatars/wei.svg", text: "Virtual Assistants" },
    { avatar: "/avatars/ravi.svg", text: "NFT / Web3 Creators" },
  ];
  const items2 = [
    { avatar: "/avatars/authurT.svg", text: "Web3 / Crypto Projects" },
    { avatar: "/avatars/emmaW.svg", text: "Founders / Startups" },
    { avatar: "/avatars/weiC.svg", text: "Authors & Public Speakers" },
    { avatar: "/avatars/raviP.svg", text: "Outsourcing Platforms" },
  ];
  const [faq, setFaq] = useState(0);
  return (
    <div className="relative">
      <Header />
      <main className="w-[1145px] m-auto mt-50">
        <section className="text-center font-bold text-6xl">
          <h1 className="text-text-white-alt">Payment Links for</h1>
          <h2 className="mt-2 text-text-blue">Freelancers</h2>
          <p className="text-text-faded-2 text-base w-[492px] m-auto font-normal mt-8">
            Create a payment link in seconds and let clients{" "}
            <span className="font-bold">pay by card or crypto</span>, with your
            funds securely held in escrow (Hive)
          </p>
        </section>
        {/* <img src="/payment-link-pay-with-card.png" alt="" /> */}
        <section className={`relative h-[456px] w-[830px] m-auto mt-14`}>
          <Image
            src="/images/payment-link-pay-with-card.png"
            alt="create payment link and clients pay with card or stable coin"
            fill
            className="object-cover rounded-lg selector"
          />
        </section>
        <section className="flex flex-col items-center mt-24 border-b border-border-2 pb-20">
          <div className="bg-deep-green p-4 rounded-full text-primary-green font-bold text-2xl px-6">
            <p>😮‍💨 Breathe of fresh air</p>
          </div>
          <p className="text-text-faded-3 text-sm w-[482px] text-center mt-8">
            The Old Way is Broken. Quidhive is the Web3-native solution built
            for speed and clarity. We cut through the friction by giving you;
          </p>
          <div className="flex w-full mt-14 gap-8">
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
        <section className="flex flex-col items-center mt-20">
          <div className="bg-bg-elev-1 p-4 rounded-full text-text-blue font-bold text-2xl px-6">
            <p>🤔 We need to ask</p>
          </div>
          <div className="w-full mt-14 flex items-end justify-between gap-10">
            <div className="w-5/12">
              <p className="text-2xl text-text-faded-3 font-semibold">
                How does Quidhive work?
              </p>
              <div className="mt-10">
                <div className="flex flex-col gap-4 ">
                  {howItWorks.map((obj, index) => (
                    <HowItWorks
                      key={index}
                      img={obj.img}
                      title={obj.title}
                      text={obj.text}
                      step={index + 1}
                      active={selected === index}
                      onClick={() => setSelected(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-7/12">
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

        <section className="mt-14 bg-bg-75 px-10 py-10 rounded-4xl flex flex-col items-center w-full">
          <img src="/icons/agree.svg" alt="" />
          <div className="w-full">
            <p className="text-text-faded-2 text-xl font-semibold text-center">
              Built for Freelancers,{" "}
            </p>
            <div className="w-full m-auto mt-6">
              {/* <WorkScroller /> */}
              <WorkScrollerCss items={items1} className="scroll-left" />
            </div>
          </div>
          <div className="w-full mt-10">
            <p className="text-text-faded-2 text-xl font-semibold text-center">
              Loved by Clients,
            </p>
            <div className="w-full m-auto mt-6">
              {/* <WorkScroller /> */}
              <WorkScrollerCss items={items2} className="scroll-right" />
            </div>
          </div>
          <div className="flex item-end gap-3 mt-14">
            <h3 className="text-text-faded-2 text-xl font-semibold">
              Backed by
            </h3>
            <img src="/logos/base-logo.svg" alt="" />
          </div>
        </section>

        <section className="flex flex-col items-center w-full justify-center mt-14">
          <div className="bg-deep-green p-4 rounded-full text-primary-green font-bold text-2xl px-6">
            <p>💬 Testimonials</p>
          </div>
          <div className="flex w-full gap-5 mt-10">
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
        <section className="flex flex-col items-center justify-center mt-24">
          <div className="bg-bg-elev-1 p-4 rounded-full text-text-blue font-bold text-2xl px-6">
            <p>📍 We'll keep pollinating...</p>
          </div>
          <p className="mt-10">
            From earning to spending, and everything in-between
          </p>

          <div className="w-full mt-14 flex gap-20">
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

        <section className="mt-30 flex flex-col items-center justify-center">
          <p className="text-text-white text-2xl font-bold">
            Frequently asked questions
          </p>

          <div className="mt-14 w-[70%] m-auto">
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
        <div className="w-[80%] m-auto flex justify-between items-end">
          <div>
            <img src="/logos/logo.svg" alt="logo" />
            <p className="text-text-faded-3 font-semibold text-lg mt-3">
              Payment Links, Onchain Escrow
            </p>
          </div>
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
      </footer>
    </div>
  );
}
