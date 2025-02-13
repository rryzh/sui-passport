"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { type FC } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { TextInput } from "../TextInput/TextInput";
import { AnimatedImage } from "./ui/AnimatedImage";

type StickerProps = {
  url: string;
  name: string;
  rotation: number;
  amountLeft: number;
  dropsAmount: number;
};


export const Sticker: FC<StickerProps> = (props) => {
  const { amountLeft = 0, url, name, rotation = 0, dropsAmount = 0 } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`relative flex flex-col items-center`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <Image
            src={url}
            alt="sticker"
            width={360}
            height={360}
            className="cursor-pointer"
            quality={100}
          />
          <p className="absolute bottom-0 font-everett uppercase text-[#ABBDCC]">
            {name}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ type: "spring" }}
          className="flex h-full w-full flex-col items-center justify-center backdrop-blur-[8px]"
        >
          <div className="relative flex flex-col items-center">
            <AnimatedImage url={url} />
            <div className="absolute bottom-0 flex flex-col items-center gap-4">
              <p className="flex cursor-pointer gap-2 font-inter text-[16px] leading-5 text-[#4DA2FF]">
                Details on Sui Vision
                <Image
                  src={"/images/arrow-up-right.png"}
                  width={16}
                  height={16}
                  alt="arrow"
                  className="object-contain"
                />
              </p>
              <span className="flex gap-2">
                <p className="font-inter text-[20px] leading-6 text-white">
                  {name}
                </p>
                <p className="font-inter text-[20px] leading-6 text-[#ABBDCC]">
                  {amountLeft} left
                </p>
              </span>
              <span className="flex gap-2">
                <Image
                  src={"/images/drop.png"}
                  alt="drop-icon"
                  width={14}
                  height={14}
                  className="object-contain"
                />
                <p className="font-inter text-[#ABBDCC]">{dropsAmount}</p>
              </span>
            </div>
          </div>
          <TextInput
            labelText="Claim Code"
            placeholder="1234-5678"
            className="mt-[103px] h-[79px]"
          />
          <div className="mt-[48px] flex gap-2">
            <DialogClose asChild>
              <Button variant="secondary" className="h-[52px] w-[116px]">
                Close
                <Image
                  src={"/images/cross.png"}
                  alt="cross"
                  width={16}
                  height={16}
                />
              </Button>
            </DialogClose>
            <Button className="h-[52px] w-[227px]">Claim {name}</Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
