//

import { FaqType } from "@/components/card/Faq";

export const FAQ: FaqType[] = [
  {
    quest: "What is Quidhive?",
    ans: (
      <div>
        Quidhive is the first{" "}
        <span className="font-semibold">
          on-chain payment solution designed for freelancers.
        </span>{" "}
        It allows you to create simple payment links and{" "}
        <span className="font-semibold">get paid by card or crypto</span>,
        secured by our transparent{" "}
        <span className="font-semibold">smart-contract escrow, the Hive.</span>
      </div>
    ),
    show: false,
  },
  {
    quest: "How does escrow work?",
    ans: (
      <div>
        When your client pays through your link,{" "}
        <span className="font-semibold">
          the funds are held securely in escrow (powered by USDC on Base),
        </span>{" "}
        secured by our transparent until they approve the release or reach a
        scheduled release date.
      </div>
    ),
    show: false,
  },
  {
    quest: "What currency are payments held in?",
    ans: (
      <div>
        All payments are stored in <span className="font-semibold">USDC</span> ,
        a stable digital dollar that maintains its value and enables fast,
        borderless transactions.
      </div>
    ),
    show: false,
  },
  {
    quest: "How do clients make payments?",
    ans: (
      <div>
        Clients receive a payment link via email or chat, open it, and can pay
        instantly with their card or crypto wallet. A very smooth flow.
      </div>
    ),
    show: false,
  },
  {
    quest: "Who can release the funds?",
    ans: (
      <div>
        Clients control the release, but freelancers can send reminders when
        work is complete. Funds can also release automatically on the agreed
        date.
      </div>
    ),
    show: false,
  },
  {
    quest: "What makes Quidhive different from PayPal or Wise?",
    ans: (
      <div>
        Quidhive combines escrow protection and crypto-powered infrastructure,
        built onchain. Offering faster, fairer, and more transparent payments
        for freelancers.
      </div>
    ),
    show: false,
  },
  {
    quest: "What’s coming next?",
    ans: (
      <div>
        We’ll keep expanding, bringing you Pollen Card for spending your USDC
        anywhere, BloomUSD for receiving ACH transfers, and the Quidhive mobile
        app for on-the-go control.
      </div>
    ),
    show: false,
  },
];
