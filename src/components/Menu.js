import React, { Fragment, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// Images
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const Container = styled.nav`
	position: fixed;
  width: 20vw;
	height: 100vh;
	padding: 1rem 0;
	border-right: 1px solid #E6ECF1;
	background-color: #F5F7F9;
	overflow-y: scroll;

	@media (max-width: 667px) {
		width: 80vw;
		transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(-150%)'};
  }
`;

const Button = styled.button`
	position: fixed;
	top: 5px;
	left: 5px;
	width: 36px;
	height: 36px;
	border: none;
	border-radius: 12px;
	outline: none;
	background: #FFAC2D url(${menu}) no-repeat center;

	${({ isVisible }) => isVisible && `
		left: calc(80vw + 5px);
		background: #FFAC2D url(${close}) no-repeat center;
  `}

	@media(max-width: 667px) {
		display: block;
	}
`;

const Logo = styled(Link)`
	display: flex;
	justify-content: center;
	width: 70%;
	margin: 0 auto 2rem;
`;

const Image = styled.img`
	width: 70%;
`;

const Item = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	margin: .5rem 0;
	padding: 0 5%;
	color: #505050;
	text-align: center;
	text-decoration: none;
	font: 700 .7rem 'Open Sans', sans-serif;

	${({ active }) => active && `
		border: 1px solid #E6ECF1;
		border-right: none;
		color: #FFAC2D;
		background: #FFF;
  `}
`;

const Menu = ({
	links,
	location
}) => {
	const [isVisible, setVisible] = useState(false);

	const isActive = (item, location) => {
		if (item.slug.includes(location.pathname)) {
			return true
		}
	
		return false;
	}

	const renderLinks = () => {
		return links.map((link) => (
			<Item
				key={link.id}
				to={link.slug}
				active={isActive(link, location)}
			>
				{link.title}
			</Item>
		))
	};

  return (
		<Fragment>
			<Button
				onClick={() => {
					setVisible(!isVisible);
				}}
				isVisible={isVisible}
			/>
			<Container
				isVisible={isVisible}
			>
				<Logo
					to="/"
				>
					<Image src={logo} />
				</Logo>
				{renderLinks()}
			</Container>
		</Fragment>
			
  )
};

export default Menu;