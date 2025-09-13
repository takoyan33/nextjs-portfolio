import styles from "./home-wave-bg-top.module.scss"

export const HomeWaveBgTop = () => {
  return (
    <div className={styles.wave__bg__bottom}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <title>Wave Background Top</title>
        <path
          fill="#f7f7f7"
          fillOpacity="1"
          d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  )
}
