import myPictureAtDamSen from "../../assets/images/myPictureAtDamSen.jpg";
import styles from "./LandingPage.module.scss";

const WelcomeSection: React.FC = () => (
  <div
    className={`${styles.myStyle} w-4/5 flex justify-center items-center gap-3 flex-col-reverse lg:flex-row lg:px-20`}
  >
    <section className="w-full flex flex-col justify-center text-3xl gap-1">
      <p className="text-4xl">👋🏼</p>
      <h1 className={`${styles.myFont} font-bold mb-3 dark:text-cyan-400`}>
        Hi, I&#39;m Hong Phuc
      </h1>
      <p className="text-xl">
        I&#39;m currently an undergraduate student at HCMUT, working towards my
        goal of becoming a software engineer🧑🏼‍💻.
      </p>
      <p className="text-xl">
        I enjoy playing chess ♟️ and watching movies🍿.{" "}
      </p>
    </section>
    <div className="w-full flex justify-center items-center container">
      <img
        src={myPictureAtDamSen}
        alt="My Picture"
        style={{
          width: "clamp(200px, 100%, 400px)",
          height: "auto",
          borderRadius: "20px",
        }}
      />
    </div>
  </div>
);

export default WelcomeSection;
