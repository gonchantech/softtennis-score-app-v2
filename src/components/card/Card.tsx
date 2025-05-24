import { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, onClick, className }) => {
  return (
    <div className={`${styles.card} ${className || ""}`} onClick={onClick}>
      {children}
    </div>
  );
};
