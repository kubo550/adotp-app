import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import Form from "../components/Form/Form";
import { Button } from "@material-ui/core";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 40px;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 400px;
`;

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleCloseForm = (e: any) => {
    if (e.target.classList.contains("close")) {
      setOpen(false);
    }
  };

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
        <h2>Adoptable Dogs in Your Local Shelter</h2>
        <p style={{ maxWidth: "400px" }}>
          Use the nationwide database of dogs looking for good homes below!
          Search by zip code to meet available dogs in your area. Please note,
          these dogs are from rescues and shelters nationwide and are not
          available through the ASPCA. If you live in New York City and are
          hoping to adopt from us, check out the dogs available at our Adoption
          Center.
        </p>
        <FlexDiv>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setOpen(true)}
          >
            adopt
          </Button>
          <Link href='/about'>
            <a>
              <Button variant='contained' color='secondary'>
                learn more
              </Button>
            </a>
          </Link>
        </FlexDiv>
        {open && <Form handleCloseForm={handleCloseForm} />}
      </Container>
    </motion.div>
  );
};

export default Home;
