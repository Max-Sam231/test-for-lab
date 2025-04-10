import React from "react";
import Image from "next/image";
import styles from "./Input.module.scss";

// type Props = {
// 	icon: string;
// valueInput: string
// changeValue: ()=> void
// nameInput : string
// 	defaultValue: string;
// };
const Input: React.FC = () => {
	return (
		<div className={styles.inputContainer}>
			<span className={`${styles.icon} ${styles.inputContainer__icon}`}>
				<Image
					src="/assets/svg/capacity-full.svg"
					alt="Logo"
					width={100}
					height={100}
					style={{ width: "auto", height: "auto" }}
				/>
				{/* {children} */}
			</span>
			<input
				className={styles.inputContainer__input}
				type="text"
				name=""
				id=""
				defaultValue="15 000"
			/>
			{/* <button className={styles.button}>a</button> */}
			{/* <button className={styles.button}>a</button> */}
		</div>
	);
};

export default Input;
