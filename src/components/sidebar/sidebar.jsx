import { useEffect, useState } from "react";
import styles from "./sidebar.module.css";
import { GoogleSvg } from "../../svg/googlesvg";
import { Logo } from "../../svg/logo";
import { SettingsIcon } from "../../svg/settingsicon";
import { sidebarItems } from "../../utils/sidebar-items";
import { SidebarItem } from "../sidebar-item";

export const Sidebar = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleSelected = (index) => {
    setSelected(index);
    console.log(selected);
  };
  return (
    <>
      {isMobile && (
        <button onClick={toggleSidebar} className={styles.hamburger}>
          &#9776;
        </button>
      )}
      {isOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
      <div
        className={`${styles.sidebar} ${
          isMobile && isOpen ? styles.sidebar_open : ""
        }`}
      >
        <div className={styles.topbar}>
          <div className={`${styles.settings_main} ${styles.flex}`}>
            {isMobile && isOpen && <button onClick={toggleSidebar}>X</button>}
            <SettingsIcon />

            <div className={`${styles.badge} ${styles.flex}`}>NACHTMODUS</div>
          </div>

          <div className={styles.main_logo}>
            <Logo />

            <div
              className={`${styles.logo_heading} ${styles.flex_column} lato-bold`}
            >
              <h1>ImmoTrust</h1>

              <p>SCHWEIZ AG</p>
            </div>
          </div>
        </div>

        <div className={styles.sidebar_items}>
          {sidebarItems.map((item, index) => (
            <div onClick={() => handleSelected(index)}>
              <SidebarItem
                key={index}
                index={index}
                selected={selected}
                item={item}
              />
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottom_bar}>
            <div className={styles.person}>
              <img src="https://s3-alpha-sig.figma.com/img/6d2b/9128/443cb7cb36fe77521c3c32cbbdf1dba3?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=figFZ6YBHbxtpoJHaWzPs5sAMKICxGPcANJxxTPGqcBRkRYYWC-O7J9HlbKgJi8dWEnZG6PZNO~9DRkkhpCcbfhyq6EsL-mEWhm05Y~LtjgdNMjQZyg3iYpizVxmXojoW18KlTlP55P7x8kBLAfVuocOHkLJCloIo-8alIjz3DC7NKyN6jaicCAFaJ6k6xYRgrvKXkUaGd0vyNr2i~FI8cBsDTum6vZROqZp2SdCX10shklpBB9qjZzGgrnjl8psJi4u~kiZ~MQofzvny~bV4KmWWEwfMBIiPLFXu3Wp0Ea0493VVDST2XCZRVX4Mv05lMIENqmq2qPcSw9FEQzf-w__" />
            </div>

            <div className={styles.bottom_bar_content}>
              <h1>Immotrust AG </h1>
              <p>
                Vertrauensvolle <br /> Immobilienberatung seit 2008.
              </p>
              <button>Carlos Kuk - Eigentümer</button>
            </div>
          </div>

          <div className={`${styles.flex_column} ${styles.gap_between}`}>
            <div className={`${styles.bottom_details} ${styles.flex}`}>
              <GoogleSvg />

              <p>Bewertungen</p>

              <div className={`${styles.flex} ${styles.stars}`}>
                {[0, 1, 2, 3, 4].map((_, index) => (
                  <div
                    style={{
                      background:
                        index === 4 &&
                        "linear-gradient(to right, #fea500 50%, #D9D9D9 50%)",
                    }}
                    className={`${styles.star_box} ${styles.flex}`}
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.38753 12.9141L11.9028 11.9663L13.3715 16.7819L8.38753 12.9141ZM16.4775 6.6897H10.2896L8.38753 0.490967L6.48543 6.6897H0.297607L5.30566 10.5319L3.40355 16.7307L8.4116 12.8884L11.4935 10.5319L16.4775 6.6897Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            <p className={styles.address}>
              4,6 VON 5 BASIEREND AUF 245 BEWERTUNGEN
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
