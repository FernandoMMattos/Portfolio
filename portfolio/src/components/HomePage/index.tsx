import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <main className={styles.presentation}>
      <section className={styles.presentation__content}>
        <div className={styles.presentation__content__text}>
          <h1 className={styles.presentation__text__title}>
            <strong className={styles.blue}>Fernando's</strong> portfolio.
          </h1>
          <p className={styles.presentation__text__paragraph}>
            Greetings and welcome to my website! I am Fernando Mattos, a
            20-year-old, currently pursuing a degree in Computer Science. During
            my studies, I took the initiative to develop this website. My goal
            is to establish myself as a proficient Web Developer. The purpose of
            this website is to showcase a selection of my projects and works.
          </p>
        </div>
        <h2 className={styles.presentation__links__subtitle}>
          You can find me here:
        </h2>
        <div className={styles.presentation__links1}>
          <a
            className={styles.presentation__links__nav}
            href="https://github.com/FernandoMMattos"
          >
            <i className="fa-brands fa-github"></i>
            GitHub
          </a>
          <a
            className={styles.presentation__links__nav}
            href="https://www.linkedin.com/in/fernando-mattos-229098230/"
          >
            <i className="fa-brands fa-linkedin"></i>
            LinkedIn
          </a>
        </div>
        <h2 className={styles.presentation__links__subtitle}>Some works:</h2>
        <div className={styles.presentation__links2}>
          <a
            className={styles.presentation__links__nav}
            href="https://trackerfydeploy.onrender.com"
          >
            <i className="fa-brands fa-spotify"></i>
            Trackerfy
          </a>
          <a
            className={styles.presentation__links__nav}
            href="https://www.fernandommattos.com/iphone-13/"
          >
            <i className="fa-brands fa-wordpress"></i>
            Wordpress
          </a>
        </div>
      </section>
      <img className={styles.photo} src="assets/eu.png" alt="Profile Picture" />
    </main>
  );
}
