/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

//
"use client";
import { getNestedValue, numbWithCommasDeci } from "@/utils/function.helper";
import React, { ReactNode, useState } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { PiWarningCircle } from "react-icons/pi";

type QHInputType = {
  label: string;
  className?: string;
  placeholder?: string;
  suffixIcon?: ReactNode;
  prefixIcon?: ReactNode;
  name: string;
  required?: boolean;
  errors?: any;
  pattern?: any;
  type?: string;
  disabled?: boolean;
  onlyAlpha?: boolean;
  onlyNum?: boolean;
  numbComma?: boolean;
  setValue?: UseFormSetValue<FieldValues>;
  register?: UseFormRegister<any>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  control?: any;
  removeBorder?: true;
  inputClass?: string;
  validate?: any;
  labelClass?: string;
  maxLength?: number;
  minLength?: number;
  value?: string;
  mainContainerclass?: string;
  errorName?: string;
};

// React.InputHTMLAttributes<HTMLInputElement>;

function QHInput(props: QHInputType) {
  const {
    label,
    errors,
    name,
    placeholder,
    register,
    required = true,
    suffixIcon,
    prefixIcon,
    className = "",
    setValue,
    pattern,
    type = "text",
    disabled,
    onlyAlpha,
    onlyNum,
    onChange,
    validate,
    control,
    inputClass = "",
    removeBorder = false,
    labelClass = "",
    maxLength,
    minLength,
    value,
    mainContainerclass,
    errorName,
    numbComma,
    ...rest
  } = props;

  const onlyAlphaValid = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = event.target.value.replace(/[^a-zA-Z]/g, "");
    setValue!(name, sanitizedValue);
    onChange!(event);
  };

  const onlyNumValid = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // const sanitizedValue =
    if (value === "") {
      setValue!(name, "");
    } else {
      if (numbComma) {
        setValue!(
          name,
          // new Intl.NumberFormat().format(Number(sanitizedValue))
          numbWithCommasDeci(value)
        );
      } else {
        setValue!(
          name,
          value.replace(/[^0-9.]/g, "").replace(/^(\d*\.\d{0,2}).*/, "$1")
        );
      }
    }
  };

  const characterValid = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onlyAlpha) {
      onlyAlphaValid(e);
    }
    if (onlyNum) {
      onlyNumValid(e);
    }
    if (onChange) {
      onChange!(e);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
  };
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={`w-full ${className!} font-inter`}>
      <label className={`font-semibold text-white  ${labelClass!}`}>
        {label}
      </label>
      <div
        className={`${mainContainerclass} mt-1 flex items-center gap-3 rounded-xl ${"border-2"} border-[#6E7198] px-3 phone:py-2 py-[10px] ${
          disabled ? "bg-bg-50" : ""
        }`}
      >
        {prefixIcon}
        <input
          type={type}
          min={type === "date" ? getCurrentDate() : ""}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          autoComplete="off"
          className={`w-full phone:text-base text-sm border-none bg-transparent outline-none placeholder:font-semibold placeholder:text-[#ffffff24] focus:border-[3px] px-3 ${inputClass}`}
          {...(register
            ? register!(name, {
                required: required
                  ? {
                      value: true,
                      message: errorName || "This field is required",
                    }
                  : undefined,
                pattern,
                validate,
                onChange: characterValid,
              })
            : {})}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
        {suffixIcon}
      </div>

      <div className="mt-1 text-xs text-peach">
        {errors && getNestedValue(errors, name) ? (
          <div className="flex items-center gap-2">
            <PiWarningCircle /> {getNestedValue(errors, name).message}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default QHInput;
