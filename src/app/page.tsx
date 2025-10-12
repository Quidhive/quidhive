//
import Header from "@/components/header/Header";
import Image from "next/image";
import BFACard from "@/components/card/BFACard";

export default function Home() {
  const bfa = [
    {
      img: "/icons/clarity.svg",
      title: "Instant Clarity",
      text: "All funds are settled in stable USDC. No rate guesswork, just clear earnings",
    },
    {
      img: "/icons/no_friction.svg",
      title: "Zero Payer Friction",
      text: "Clients pay effortlessly with card or crypto. Remove the biggest excuse for delays.",
    },
    {
      img: "/icons/transperent.svg",
      title: "True Transparency",
      text: "The Hive escrow provides a simple, on-chain ledger. Know exactly where your funds are, always",
    },
  ];

  const howItWorks = [];
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
            src="/payment-link-pay-with-card.png"
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
          <div className="w-full mt-10">
            <p className="text-2xl text-text-faded-3 font-semibold">
              How does Quidhive work?
            </p>
            <div>
              <div className="mt-8 bg-bg-75 border-border-1 p-5 flex w-5/12 rounded-lg border-2 items-center gap-4">
                <div className="bg-bg-elev-2 p-2 rounded-full">
                  <img src="/icons/link.svg" alt="" />
                </div>
                <div className="text-text-white-alt">
                  <p>
                    <span className="font-semibold">Step 1 :</span> Generate a
                    payment link
                  </p>
                  <p className="text-sm text-text-faded-2 mt-2">
                    Enter the amount, project description, and your payer's
                    details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function HowItWorks() {
  return <div>HowItWorks</div>;
}
