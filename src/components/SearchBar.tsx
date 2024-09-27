import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

import {
  Input as RACInput,
  InputProps as RACInputProps,
  Button as RACButton,
  DialogTrigger as RACDialogTrigger,
  Dialog as RACDialog,
  Popover as RACPopover,
  PressEvent as RACPressEvent,
  Label as RACLabel,
  Separator as RACSeparator,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import React, { useRef } from "react";

export interface SearchBarProps extends RACInputProps {
  onFilterPress?: (e: RACPressEvent) => void;
  children?: React.ReactNode;
}

const popoverStyles = tv({
  base: "text-payne_gray rounded-lg border border-black/10 bg-white bg-clip-padding shadow-lg",
  variants: {
    isFocusVisible: {
      false: "border-transparent",
      true: "border-transparent outline-none",
    },
    isEntering: {
      true: "animate-in fade-in duration-300",
    },
    isExiting: {
      true: "animate-out fade-out duration-300",
    },
  },
});

const triggerStyles = tv({
  base: "p-1",
  variants: {
    isPressed: {
      false: "text-payne_gray-300",
      true: "text-glaucous",
    },
  },
});

const fieldGroupStyles = tv({
  base: "text-payne_gray placeholder:text-payne_gray-600 disabled:text-payne_gray-200 min-w-0 flex-1 rounded-lg border-2 bg-white py-2 pl-9 pr-9 text-sm outline outline-0 md:text-base [&::-webkit-search-cancel-button]:hidden",
  variants: {
    isFocused: {
      false: "border-transparent",
      true: "border-black",
    },
    isInvalid: {
      true: "border-red-600",
    },
    isDisabled: {
      true: "border-gray-200 bg-gray-100",
    },
  },
});

export const SearchBar: React.FC<SearchBarProps> = ({ children, onFilterPress, ...props }) => {
  const inputRef = useRef(null);

  return (
    <RACDialogTrigger>
      <div ref={inputRef} className="relative flex flex-1 items-center overflow-hidden shadow-lg">
        <div className="absolute bottom-0 left-3 top-0 m-auto flex items-center">
          <MagnifyingGlassIcon aria-hidden className="text-glaucous h-[18px] w-[18px]" strokeWidth={2} />
        </div>
        <RACInput className={fieldGroupStyles} {...props} />
        <div className="absolute bottom-0 right-2 top-0 m-auto flex items-center">
          <RACButton className={triggerStyles} isDisabled={props.disabled} onPress={onFilterPress}>
            <AdjustmentsHorizontalIcon className="h-[24px] w-[24px]" />
          </RACButton>
        </div>
      </div>

      <RACPopover className={popoverStyles} triggerRef={inputRef}>
        <RACDialog className="flex w-[--trigger-width] flex-col gap-2 px-4 pb-4 pt-2 outline-0">
          <RACLabel>Refine your search</RACLabel>
          <RACSeparator />
          <div>{children}</div>
        </RACDialog>
      </RACPopover>
    </RACDialogTrigger>
  );
};
