import { useWindowSize } from "hooks/useWindowResize";
import Head from "next/head";
import type { NextPage } from "next";
import styles from "./ErrorMessage.module.scss";
import { Error } from "assets/png";
import Image from "next/image";
import { Typography } from "@mui/material";

export const ErrorMessage: NextPage = () => {
	const { width } = useWindowSize();

	return (
		<>
			<Head>
				<title> 404 | Page Not Found </title>
				<meta
					name="description"
					content="Uh oh! 404 Not Found. looks like you got lost"
				/>
				<meta
					name="keywords"
					content="404, not, found, walking, pal, buddy, walk"
				/>
			</Head>

			<main className={styles.main}>
				<div className={styles.left}>
					<Image src={Error} alt="" />
				</div>
				<div className={styles.right}>
					<Typography
						color="#ffffffcc"
						align="center"
						variant="h2"
						pt={7}
						pb={4}
						mx={1}
						maxWidth="800px"
					>
						Ouppps! <br /> 404
					</Typography>
					<Typography
						variant="body1"
						align="center"
						mx={3}
						maxWidth="600px"
						color="#ffffffcc"
						fontSize="31px"
						lineHeight="42px"
						fontWeight="400"
					>
						Looks like this page is missing. Don’t worry though, our best man is
						on the case! <br /> meanwhile, please headback.
					</Typography>
				</div>
			</main>
		</>
	);
};
