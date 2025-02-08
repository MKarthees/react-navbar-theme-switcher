import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import logoBlack from "../images/Black Logo.png";
import logoWhite from "../images/White Logo.png";
import { useRef } from "react";

const Navbar = ({ theme, setTheme }) => {
	const lightModeIcon = useRef(null);
	const darkModeIcon = useRef(null);
	const bar = useRef(null);
	const xmark = useRef(null);
	const menu = useRef(null);
	let linkActive = document.querySelectorAll(".container ul li");

	const changeLightMode = () => {
		lightModeIcon.current.style.display = "none";
		darkModeIcon.current.style.display = "flex";
		setTheme("light");
	};

	const changeDarkMode = () => {
		darkModeIcon.current.style.display = "none";
		lightModeIcon.current.style.display = "flex";
		setTheme("dark");
	};

	function removeActive() {
		linkActive.forEach((element) => {
			element.classList.remove("active");
		});
	}
	function display(element) {
		element.addEventListener("click", () => {
			removeActive();
			element.classList.add("active");
		});
	}
	linkActive.forEach(display);

	const openNavbar = () => {
		if ((bar.current.style.display = "block")) {
			bar.current.style.display = "none";
			xmark.current.style.display = "block";
			menu.current.style.display = "flex";
			console.log(bar.current.style.display);
		}
	};
	const closeNavbar = () => {
		if ((xmark.current.style.display = "block")) {
			xmark.current.style.display = "none";
			bar.current.style.display = "block";
			menu.current.style.display = "none";
			console.log(xmark.current.style.display);
		}
	};

	return (
		<div className={`container ${theme}`}>
			<img src={theme == "light" ? logoBlack : logoWhite} />
			<ul ref={menu}>
				<li className="active">Home</li>
				<li>Project</li>
				<li>About</li>
				<li>Contact</li>
			</ul>

			<i
				id="light_mode"
				ref={lightModeIcon}
				onClick={changeLightMode}
				className="light-mode"
			>
				<BiSolidSun />
			</i>
			<i
				id="dark_mode"
				ref={darkModeIcon}
				onClick={changeDarkMode}
				className="dark-mode"
			>
				<BiSolidMoon />
			</i>
			<i id="bar" ref={bar} onClick={openNavbar} className="bar-icon">
				<FaBars />
			</i>
			<i id="xmark" ref={xmark} onClick={closeNavbar} className="xmark-icon">
				<FaXmark />
			</i>
		</div>
	);
};

export default Navbar;
