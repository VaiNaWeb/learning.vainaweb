import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// Images
import logo from '../assets/logo.svg';

const Container = styled.nav`
	position: fixed;
  width: 15vw;
	height: 100vh;
	padding: 1rem 1%;
	border-right: 1px solid #E6ECF1;
	background-color: #F5F7F9;
`;

const Logo = styled(Link)`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Image = styled.img`
	width: 70%;
`;

const Item = styled(Link)`
	display: block;
	margin: 1.5rem 0;
	color: #505050;
	text-decoration: none;
	font: 700 .8rem 'Open Sans', sans-serif;

	${({ active }) => active && `
		color: #00145D;
    text-decoration: underline;
  `}
`;

const Menu = ({
	links,
	location
}) => {
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
    <Container>
			<Logo
				to="/"
			>
				<Image src={logo} />
			</Logo>
			{renderLinks()}
    </Container>
  )
};

export default Menu;