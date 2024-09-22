import React from "react";
import styles from "./not-active-label.module.css"
export interface ActivateLabelProps {
    children?: React.ReactNode;
}

export default function NotActiveLabel({children}: ActivateLabelProps) {
    return <span className={styles.label}>{children}</span>
}