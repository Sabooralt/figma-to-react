import { useState } from "react";
import styles from "../components/sidebar/sidebar.module.css";

export const SidebarItem = ({ item, selected, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{
        backgroundColor:
          selected === index ? "#024154" : isHovered ? "#00000048" : "white",
        color: selected !== index ? "#024154" : "white",
      }}
      className={styles.item_sidebar}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.first_content}>
        <div
          style={{
            stroke: selected === index ? "#fff" : "#024152",
            fill: "none",
          }}
        >
          {item.logo}
        </div>
        <h1>{item.title}</h1>

        <div className={styles.badge}>{item.badge}</div>
      </div>

      <p className={styles.second_content}>{item.desc}</p>
    </div>
  );
};
