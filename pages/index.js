import Head from "next/head";
import Loader from "../components/loader";
import Home from "./home";
import { Container } from "./home.css";

function Index() {
  return <Home />;
}

export default Loader(Index);
