import React from "react";
import styles from "./active-label.module.css"
export interface ActivateLabelProps {
    children?: React.ReactNode;
}

export default function ActiveLabel({children}: ActivateLabelProps) {
    return <span className={styles.label}>{children}</span>
}