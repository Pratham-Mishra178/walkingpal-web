import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "pages/about/components/Hero";
import styles from "./about.module.scss";
import { Gallery } from "pages/about/components/Gallery";

export const About: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>About us</title>
				<meta
					name="description"
					content="The world's first walking buddy app of its kind. Get yourself a walking buddy anytime and anywhere in just a few clicks!"
				/>
				<meta
					name="keywords"
					content="home, walking, pal, buddy, walk, about"
				/>
			</Head>

			<main className={styles.main}>
        <Hero />
				<Gallery />	
			</main>
		</div>
	);
};
