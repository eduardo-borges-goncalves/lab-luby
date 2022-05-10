import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { LinkCardWrapper } from "./style";

type LinkCardProps = {
  to: string;
  title: string; 
  description: string, 
  quantity: string, 
  img: string, 
  descriptionImg: string
}

export const LinkCard:FC<LinkCardProps> = ({
  to, 
  title,
  description,
  quantity,
  img,
  descriptionImg}) => (

  <LinkCardWrapper>
    <Link to={to}>
      <div id="cardInformation">
        <h2> {title} </h2>
        <p> {description} </p>
        <span> {quantity} </span>
      </div>
      <img src={img} alt={descriptionImg} />
    </Link>
  </LinkCardWrapper>
)