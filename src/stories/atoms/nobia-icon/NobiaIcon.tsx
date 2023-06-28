import React from "react";
import styled from "styled-components";

const NobiaIcon = () => (
  <Favicon
    src="https://www.nobia.com/Static/Images/Misc/favicons/favicon.ico"
    alt="Nobia"
  />
);

const Favicon = styled.img`
  width: 27px;
  margin-right: 5px;
`;

export default NobiaIcon;
