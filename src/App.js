import React from "react";
import styled from "styled-components";

import { iconList } from "./components/IconList";
import ColorInput from "./components/ColorInput";

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 1280px; */
  width: 100%;
  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    .icon {
      align-items: center;
      background-color: #f2f2f2;
      justify-content: center;
      display: flex;
      flex: 1 200px;
      height: 200px;
      margin: 5px;
      max-width: 200px;
      position: relative;
      h3 {
        position: absolute;
        text-align: center;
        left: 0;
        right: 0;
        bottom: 20px;
        font-size: 16px;
        font-weight: 300;
        margin: auto;
      }
    }
  }
`;

class App extends React.Component {
  state = { fill: "#000000", size: 32 };

  changeIcons = iconConf => {
    this.setState(iconConf);
  };

  render() {
    return (
      <Wrapper>
        <div className="icons">
          {Object.keys(iconList).map(iconName => {
            const Icon = iconList[iconName];
            return (
              <div className="icon" key={Icon}>
                <Icon key={Icon} details={this.state} viewBox="0 0 40 40" />
                <h3>{iconName}</h3>
              </div>
            );
          })}
        </div>
        <ColorInput details={this.state} changeIcons={this.changeIcons} />
      </Wrapper>
    );
  }
}

export default App;
