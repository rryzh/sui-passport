"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { StickersLayout } from "./ui/StickersLayout";
import { useState } from "react";

export const ProfileModal = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  console.log({ isWalletConnected });

  return !isWalletConnected ? (
    <Button
      onClick={() => setIsWalletConnected(true)}
      className="h-[34px] w-[150px] leading-4 sm:h-[52px] sm:w-[189px]"
    >
      <Image src={"/images/wallet.png"} alt="wallet" width={16} height={16} />
      Connect Wallet
    </Button>
  ) : (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="h-[34px] w-[140px] leading-4 sm:h-[52px] sm:w-[168px]"
        >
          <Image src={"/images/user.png"} alt="user" width={16} height={16} />
          0x000...000
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ type: "spring" }}
          className="flex w-full flex-col items-center backdrop-blur-[8px] sm:h-screen"
        >
          <StickersLayout />
          <Image
            src={"/images/profile-avatar-default.png"}
            alt="avatar"
            width={150}
            height={150}
            className="mt-[36px] h-[100px] w-[100px] sm:mt-0 sm:h-[150px] sm:w-[150px]"
            unoptimized
          />
          <div className="mb-6 mt-[32px] flex flex-col items-center gap-4 sm:mt-[48px]">
            <div className="flex flex-col items-center gap-2">
              <p className="font-inter text-[16px] leading-[20px] text-white sm:text-[20px] sm:leading-6">
                Artem G
              </p>
              <p className="max-w-[358px] text-center font-inter text-[14px] leading-[18px] text-[#ABBDCC] sm:max-w-[405px] sm:text-[16px] sm:leading-6">
                23 y.o. designer from San Francisco, there’s a bit more to show
                2 lines of description
              </p>
            </div>
            <span className="flex gap-2">
              <Image
                src={"/images/drop.png"}
                alt="drop-icon"
                width={14}
                height={14}
                className="object-contain"
              />
              <p className="font-inter text-[14px] text-white">{2450}</p>
            </span>
            <p className="flex cursor-pointer gap-2 font-inter text-[14px] leading-5 text-[#4DA2FF] sm:text-[16px]">
              Details on Sui Vision
              <Image
                src={"/images/arrow-up-right.png"}
                width={16}
                height={16}
                alt="arrow"
                className="object-contain"
              />
            </p>
            <DialogClose asChild>
              <Button
                variant="secondary"
                className="mt-6 h-[42px] w-[102px] sm:mt-12 sm:h-[52px] sm:w-[116px]"
              >
                Close
                <Image
                  src={"/images/cross.png"}
                  alt="cross"
                  width={16}
                  height={16}
                />
              </Button>
            </DialogClose>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
