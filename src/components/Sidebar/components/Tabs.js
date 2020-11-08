import React, { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  background-color: #d1cfc7;
  margin-bottom: 3rem;
`;
const Label = styled.label`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 100%;
  background-color: ${(props) => (props.active ? "#f6f6f6" : "#e6e6e6")};
  border-radius: 10px 10px 0 0;

  cursor: pointer;
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);
  return (
    <TabContainer>
      {["tab1", "tab2", "tab3"].map((tab, index) => (
        <React.Fragment key={index}>
          <input
            style={{ display: "none" }}
            hide="hide"
            type="radio"
            id={tab}
            name="tab"
            onClick={() => setActiveTab(index)}
          />
          <Label active={index === activeTab} htmlFor={tab}>
            <span>{tab}</span>
          </Label>
        </React.Fragment>
      ))}
    </TabContainer>
  );
};

export default Tabs;
