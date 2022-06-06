import { theme } from "../../lib/theme-ui";
import styles from "./title-component.module.css";

export default function TitleComponent({ title }) {
  return <h3 className={styles.titleStyles}>{title}</h3>;
}
