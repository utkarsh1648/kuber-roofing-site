import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "accent" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonElementProps = SharedButtonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "className" | "type"
  > & {
    href?: never;
    type?: "button" | "submit" | "reset";
  };

type ButtonLinkProps = SharedButtonProps & {
  href: string;
};

export type ButtonProps = ButtonElementProps | ButtonLinkProps;

const baseStyles =
  "inline-flex touch-manipulation items-center justify-center gap-2 rounded-control font-heading font-semibold transition-[background-color,border-color,color,box-shadow,transform] hover:-translate-y-px focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 motion-reduce:transform-none";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white shadow-structural hover:bg-brand-blue-hover hover:shadow-raised",
  accent:
    "bg-brand-green text-white shadow-structural hover:bg-brand-green-hover hover:shadow-raised",
  outline:
    "border border-brand-deep bg-transparent text-brand-deep hover:bg-brand-deep hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-6 py-3 text-sm",
  lg: "min-h-14 px-8 py-4 text-base",
};

function getClassName({
  className,
  size = "md",
  variant = "primary",
}: Pick<SharedButtonProps, "className" | "size" | "variant">) {
  return [baseStyles, variantStyles[variant], sizeStyles[size], className]
    .filter(Boolean)
    .join(" ");
}

function isButtonLink(props: ButtonProps): props is ButtonLinkProps {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  if (isButtonLink(props)) {
    const { children, className, href, size, variant } = props;

    return (
      <Link
        href={href}
        className={getClassName({ className, size, variant })}
      >
        {children}
      </Link>
    );
  }

  const {
    children,
    className,
    size,
    variant,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      type={type}
      className={getClassName({ className, size, variant })}
    >
      {children}
    </button>
  );
}
