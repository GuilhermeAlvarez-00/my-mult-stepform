import { useState, type FC } from "react";

type TOnChangeProps = {
  value: string;
  isChecked: boolean;
};

export interface IToggleSwitch {
  value: string;
  persistBg?: boolean;
  className?: string;
  onChange: ({ value, isChecked }: TOnChangeProps) => void;
}

export const ToggleSwitch: FC<IToggleSwitch> = ({
  value,
  persistBg,
  className,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const switchBg = className ? className : "bg-blue-950";

  return (
    <label
      htmlFor="switch"
      aria-label="switch-label"
      className={`
				block w-12 h-6  rounded-4xl
				relative 
				cursor-pointer
				${persistBg ? switchBg : isChecked ? switchBg : "bg-neutral-300"}
			`}
    >
      <input
        aria-label="switch-input"
        type="checkbox"
        id="switch"
        className="peer hidden"
        value={value}
        onChange={(event) => {
          const value = event?.target?.value || "";
          const isChecked = event?.target?.checked;

          onChange({ value, isChecked });
          setIsChecked(event?.target?.checked);
        }}
      />
      <span
        className="
				block w-4 h-4 rounded-full bg-white
				absolute top-1/2 -translate-y-1/2 left-1   
				peer-checked:left-[calc(100%-16px-4px)] 
				transition-all
				"
      />
    </label>
  );
};
