import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

type Props = {
  ninjas: any;
  ninja: any;
};

const Ninjas = ({ ninjas }: Props) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map(({ ninja }: Props) => (
          <Link
            href={"/ninjas/" + ninja.id}
            key={ninja.id}
            className={styles.single}
          >
            <h3>{ninja.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
