import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
}

export const Button: FC<IButton> = ({
	children,
	onClick,
	className,
	...rest
}) => {
	return (
		<button
			aria-label="button"
			onClick={onClick}
			className={twMerge(
				"py-3 px-4 rounded-sm md:px-5 md:rounded-lg bg-blue-950 text-white  text-sm font-semibold hover:opacity-85 duration-75 ease-in cursor-pointer",
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
};
