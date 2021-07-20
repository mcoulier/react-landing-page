import React from 'react'
import {
    Icon,
    IconCard,
    CardText
  } from "./styled";

export default function MissionCard({icon, title}){
    return (
        <IconCard>
          <Icon src={icon} alt="" />
          <CardText>{title}</CardText>
        </IconCard>
    )
}
