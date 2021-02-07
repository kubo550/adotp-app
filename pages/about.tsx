import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { Container } from ".";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title> Become a Hero</title>
      </Head>
      <Container>
        <h2>We Are Their Voice</h2>
        <p style={{ maxWidth: "400px" }}>
          Our organization was founded on the belief that animals are entitled
          to kind and respectful treatment at the hands of humans and must be
          protected under the law. Headquartered in New York City, the ASPCA
          maintains a strong local presence, and with programs that extend our
          anti-cruelty mission across the country, we are recognized as a
          national animal welfare organization. We are a privately funded
          501(c)(3) not-for-profit corporation, and are proud to boast more than
          2 million supporters across the country.
        </p>
        <div style={{ textAlign: "center", width: "400px" }}>
          <Link href='/'>
            <a>
              <Button variant='contained' color='primary'>
                go back
              </Button>
            </a>
          </Link>
        </div>
      </Container>
    </motion.div>
  );
};

export default About;
