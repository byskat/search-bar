import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Button,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as RACSelect,
  SelectProps as RACSelectProps,
  SelectValue,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";

interface Item {
  value: string;
  label: string;
}

interface SelectProps extends RACSelectProps<Item[]> {
  label?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Item[];
}

const itemStyles = tv({
  base: "group relative flex cursor-default select-none items-center gap-8 rounded-md px-2.5 py-1.5 text-sm will-change-transform forced-color-adjust-none",
  variants: {
    isSelected: {
      false: "text-slate-700 -outline-offset-2 hover:bg-slate-200",
      true: "bg-glaucous text-white -outline-offset-4 outline-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:outline-[HighlightText] [&+[data-selected]]:rounded-t-none [&:has(+[data-selected])]:rounded-b-none",
    },
    isDisabled: {
      true: "text-slate-300",
    },
  },
});

const buttonStyles = tv({
  base: "flex w-full min-w-[150px] cursor-default items-center justify-between gap-4 rounded-lg border border-black/10 bg-gray-50 py-2 pl-3 pr-2 text-start shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition",
  variants: {
    isDisabled: {
      false: "pressed:bg-gray-200 text-gray-800 hover:bg-gray-100 group-invalid:border-red-600",
      true: "text-gray-200",
    },
  },
});

const popoverStyles = tv({
  base: "min-w-[--trigger-width] rounded-xl border border-black/10 bg-white bg-clip-padding text-slate-700 shadow-2xl",
  variants: {
    isEntering: {
      true: "animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 duration-200 ease-out",
    },
    isExiting: {
      true: "animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 duration-150 ease-in",
    },
  },
});

export const Select: React.FC<SelectProps> = ({ label, errorMessage, items = [], ...props }) => {
  return (
    <RACSelect {...props} className={`${props.className} group flex flex-col gap-1`}>
      {label && <Label>{label}</Label>}
      <Button className={buttonStyles}>
        <SelectValue />
        <ChevronDownIcon
          aria-hidden
          className="h-4 w-4 text-gray-600 group-disabled:text-gray-200 dark:text-zinc-400 dark:group-disabled:text-zinc-600"
        />
      </Button>
      <FieldError>{errorMessage}</FieldError>
      <Popover className={popoverStyles}>
        <ListBox
          items={items}
          className="max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_.75rem)]"
        >
          {items.map((item) => (
            <ListBoxItem key={item.value} textValue={item.value} className={itemStyles}>
              {item.label}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </RACSelect>
  );
};
