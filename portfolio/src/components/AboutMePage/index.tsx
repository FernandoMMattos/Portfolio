import styles from "./AboutMePage.module.scss";

export default function AboutMePage() {
  return (
    <main className={styles.presentation}>
      <section className={styles.presentation__content}>
        <h1 className={styles.presentation__text__title}>
          <strong className={styles.blue}>About Me</strong>
        </h1>
        <p className={styles.presentation__text__paragraph}>
          Hello once again, Allow me to provide a proper introduction. My name
          is Fernando Mattos, and I'm from Brazil. At the age of 20, I have
          developed a passion for programming and software development, with a
          particular interest in web development. While I do engage in diverse
          programming endeavors, I find my skills particularly suited to the
          front-end side. Currently, I am pursuing my studies at college, aiming
          to broaden my knowledge in the field of programming. It is my ultimate
          aspiration to establish a successful career as a web developer. Thank
          you for visiting my site and taking the time to peruse the footer
          section.
        </p>
      </section>
      <img
        className={styles.photo}
        src="./assets/eu.png"
        alt=""
      />
    </main>
  );
}
