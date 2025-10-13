//
"use client";
import Header from "@/components/header/Header";
import Image from "next/image";
import BFACard from "@/components/card/BFACard";
import HowItWorks from "@/components/card/HowItWorks";
import { bfa, howItWorks } from "@/utils/constants/constants.utils";
import { useState } from "react";
import WorkScrollerCss from "@/components/animate/WorkerScrollCss";

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
  return (
    <div className="p-6 px-20 relative">
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
            <div className="w-1/2 text-lg">
              <div className="bg-bg-elev-1 p-7 rounded-t-[9px] pb-10">
                <p className=" text-text-white-alt">
                  Finally, a payment system that protects both sides. It's
                  smooth and secure.
                </p>
              </div>
              <div className="px-5 py-3 bg-bg-50 rounded-b-[9px] flex items-center gap-4">
                <img src="/avatars/authurT.svg" alt="" />
                <p className="font-light text-text-faded-3">
                  <span className="font-medium">Damilare</span>, Product
                  Designer
                </p>
              </div>
            </div>
            <Testimonial
              text={
                "Quidhive bridges trust between freelancers and clients, exactly what the decentralized world needs."
              }
              name={"Mary"}
              work={"Web3 Enthusiast"}
              image={"/avatars/authur.svg"}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

type TestimonialType = {
  text: string;
  name: string;
  work: string;
  image: string;
};

function Testimonial({ text, name, work, image }: TestimonialType) {
  return (
    <div className="w-1/2 text-lg">
      <div className="bg-bg-elev-1 p-7 rounded-t-[9px] pb-10">
        <p className=" text-text-white-alt">{text}</p>
      </div>
      <div className="px-5 py-3 bg-bg-50 rounded-b-[9px] flex items-center gap-4">
        <img src={image} alt="" />
        <p className="font-light text-text-faded-3">
          <span className="font-medium">{name}</span>, {work}
        </p>
      </div>
    </div>
  );
}
