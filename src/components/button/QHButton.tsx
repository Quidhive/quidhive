//

import React, { ReactNode } from "react";
import { BeatLoader } from "react-spinners";

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "big" | "small";
  btnType?: "primary" | "secondary";
  sentiment?: "positive" | "negetive";
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  loading?: boolean;
};

export default function Button({
  size = "big",
  btnType = "primary",
  sentiment = "positive",
  children,
  className,
  loading = false,
  ...rest
}: ButtonType) {
  const sizeS = {
    big: "phone:px-6 phone:py-3 phone:text-base px-3 py-[5px] text-sm",
    small: "px-3 py-[5px] text-sm",
  }[size];

  const typeS = {
    primary: "bg-primary-green hover:bg-green-hover text-deep-green",
    secondary:
      "bg-button-secondary hover:bg-button-secondary-hover !text-primary-white border border-bg-25",
  }[btnType];

  const sentimentS = {
    positive: "",
    negetive:
      "!bg-btn-negetive hover:!bg-btn-negetive-hover text-primary-white",
  }[sentiment];

  return (
    <button
      className={`${className} ${sizeS} ${typeS} ${sentimentS} hover_btn btn font-semibold rounded-full disabled:opacity-50 disabled:cursor-not-allowed`}
      {...rest}
      disabled={loading || rest.disabled}
    >
      {loading ? (
        <div className="text-inherit">
          <BeatLoader size={11} />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
