import React, { useState } from "react"
import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll"

// Assets

import arrow from "../assets/arrow.svg"
import close from "../assets/close_black.svg"

const Toc = styled.aside`
  position: fixed;
  top: 2%;
  right: 1%;
  display: flex;
  flex-direction: column;
  min-width: 40px;
  min-height: 40px;
  max-width: 400px;
  max-height: 95vh;
  padding: 0.5% 1%;
  border-radius: 5px;
  background-color: #f5f7f9;
  font-family: "Open Sans", sans-serif;
`

const Title = styled.h1`
  font: 400 1.2rem "Open Sans", sans-serif;
  text-align: center;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
`

const ListItem = styled.li`
  margin: 5px 0;
  padding-left: ${props =>
    props.depth > 2 ? `${(props.depth - 1) * 5}px` : 0};

  font-size: 0.9rem;

  .active > p {
    color: #ffac2d;
  }
`

const Text = styled.p`
  color: #505050;
  cursor: pointer;

  &::hover {
    color: #909090;
  }
`

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const Icon = styled.img`
  top: 50%;
  width: 20px;
  height: 20px;
  color: #202020;

  ${({ isOpen }) => !isOpen && `transform: rotate(90deg)`}
`

const Return = styled.a`
  text-align: right;
  font-size: 0.8rem;
  cursor: pointer;
`

const ToC = ({ headings }) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => setIsOpen(!isOpen)

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
    })
  }

  return (
    <Toc>
      <Button onClick={toggle}>
        <Icon src={isOpen ? close : arrow} isOpen={isOpen} />
      </Button>

      {isOpen && (
        <>
          <Title>Tabela de Conteúdo </Title>
          <List>
            {headings.map(heading => {
              if (heading.depth > 3) {
                return null
              }

              return (
                <ListItem depth={heading.depth} key={heading.id}>
                  <Link
                    to={heading.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass={"active"}
                  >
                    <Text>{heading.value}</Text>
                  </Link>
                </ListItem>
              )
            })}
          </List>
          <Return onClick={scrollToTop}>Retornar ao Topo</Return>
        </>
      )}
    </Toc>
  )
}

export default ToC
