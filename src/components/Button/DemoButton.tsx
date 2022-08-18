import { DemoButtonProps } from "@site/utils/types";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./button.module.css";

const DemoButton = ({ link }: DemoButtonProps): JSX.Element => {
  return (
    <Link
      className={clsx("button button--secondary button--lg", styles.demoButton)}
      to={link}
    >
      <span className="btn-text">Demo</span>
    </Link>
  );
};

export default DemoButton;
