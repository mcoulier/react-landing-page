import React from "react";
import { MissionWrapper, SectionTitle, IconWrapper } from "./styled";
import truck from "../../assets/truck.png";
import s24 from "../../assets/s24.png";
import tool from "../../assets/tool.png";
import lock from "../../assets/lock.png";
import MissionCard from "./MissionCard";

export default function Mission() {
  return (
    <MissionWrapper>
      <SectionTitle>Our Mission</SectionTitle>
      <IconWrapper>
        <MissionCard icon={truck} title={"Fast Delivery"} />
        <MissionCard icon={s24} title={"24h Support"} />
        <MissionCard icon={tool} title={"Service & Repair"} />
        <MissionCard icon={lock} title={"Secure payments"} />
      </IconWrapper>
    </MissionWrapper>
  );
}
