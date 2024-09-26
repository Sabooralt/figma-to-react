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

        {item.badge === "PDF" ? (
          <select className={styles.badge_select}>
            <option defaultValue={item.badge}>{item.badge}</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
          </select>
        ) : (
          <div className={styles.badge}>{item.badge}</div>
        )}
      </div>
      <p className={styles.second_content}>{item.desc}</p>

    </div>
  );
};

export const DownButton = () => {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.50049 0.847839L6.19614 5.15219L10.5005 0.847839"
        stroke="#023C53"
        stroke-width="2"
      />
    </svg>
  );
};
