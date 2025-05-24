import React from "react";
import NextLink from "next/link";
import styles from "./Link.module.css";

type LinkVariant = "primary" | "secondary" | "success" | "danger";
type LinkSize = "sm" | "md" | "lg";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: LinkVariant;
  size?: LinkSize;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  href,
  variant = "primary",
  size = "md",
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}) => {
  const linkClasses = [
    styles.link,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
    </>
  );

  if (disabled) {
    return <span className={linkClasses}>{content}</span>;
  }

  return (
    <NextLink href={href} className={linkClasses} {...props}>
      {content}
    </NextLink>
  );
};
