import styles from "../components/sidebar/sidebar.module.css";
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <svg
        width="54"
        height="45"
        viewBox="0 0 54 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 33.5597L10.036 23.4424V10.3661H18.3576V14.9305L33.2898 0L53.9737 20.8517L33.2898 41.8294L22.7635 31.586L10.4012 44.0486L0 33.5597Z"
          fill="#003F52"
        />
      </svg>

      <div className={styles.logo_handle}>
        <svg
          width="53"
          height="42"
          viewBox="0 0 53 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.563721 23.122L9.00708 14.6069L19.0463 24.847L44.0145 0.0478821L52.3361 8.55971L19.1681 42L0.563721 23.122Z"
            fill="#003F52"
          />
        </svg>
      </div>
    </div>
  );
};
