import Head from "next/head";
import Link from "next/link";

//Bootstrap
import { Container, Col, Row } from "react-bootstrap";

//Style
import classes from "../styles/home.module.css";

export default function Home() {
  return (
    <Container fluid className={classes.home_center}>
      <Head>
        <title>exercise tracker</title>
        <meta name="description" content="This is my own exercise tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row>
        <Col sm={12} className="text-center">
          <h1 className={classes.home_text}>Welcome</h1>
        </Col>
        <Col sm={12} className="text-center">
          <h1 className={classes.home_text}>Let exercises easier </h1>
        </Col>
        <Col sm={12} className="text-center">
          <Link href="/signup-login">Get Start it</Link>
        </Col>
      </Row>
    </Container>
  );
}
