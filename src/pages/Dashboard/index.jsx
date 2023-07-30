import Image from "next/image";
import styles from "./index.module.css";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/Dashboard/auth/login" title="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src="" alt="Loading image" className={styles.img} />
      </div>
    </div>
  );
}
