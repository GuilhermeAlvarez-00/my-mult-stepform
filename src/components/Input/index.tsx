import type { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputAttr = InputHTMLAttributes<HTMLInputElement>;
interface IInput extends Omit<InputAttr, "onChange" | "className"> {
	error?: string;
	onChange: (value: string) => void;
	className?: Partial<{
		root: string;
		input: string;
	}>;
}

export const Input: FC<IInput> = ({ error, className, onChange, ...rest }) => {
	return (
		<article className={twMerge("w-full relative", className?.root)}>
			{error && (
				<span
					style={{ transform: "translateY(-20px)" }}
					aria-label="error-message"
					className="absolute right-0 top-0 text-red-500 text-xs font-bold"
				>
					{error}
				</span>
			)}

			<input
				aria-label="input"
				type="text"
				onChange={({ target }) => onChange(target.value)}
				className={twMerge(
					`border border-gray-200 rounded-sm sm:rounded-lg w-full p-2.5 focus:outline-none focus:border-purple-600 text-blue-950 ${error && "border-red-500"}`,
					className?.input,
				)}
				{...rest}
			/>
		</article>
	);
};
