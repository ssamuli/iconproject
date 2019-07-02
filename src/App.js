import React from "react";
import styled from "styled-components";

import { iconList } from "./components/IconList";
import ColorInput from "./components/ColorInput";

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    .icon {
      align-items: center;
      justify-content: center;
      display: flex;
      flex: 1 1 200px;
      height: 140px;
      margin: 5px;
      max-width: 400px;
      outline: 1px solid #ccc;
      position: relative;
      h3 {
        position: absolute;
        text-align: center;
        left: 0;
        right: 0;
        bottom: 5px;
        font-size: 16px;
        margin: auto;
      }
    }
  }
`;

class App extends React.Component {
  state = {
    details: {}
  };

  changeIcons = data => {
    const { details } = this.state;
    details[data] = data;
    this.setState({ details: data });
  };

  render() {
    return (
      <Wrapper>
        <div className="icons">
          {Object.keys(iconList).map(iconName => {
            const Icon = iconList[iconName];
            return (
              <div className="icon" key={Icon}>
                <Icon key={Icon} details={this.state.details} viewBox="0 0 40 40" />
                <h3>{iconName}</h3>
              </div>
            );
          })}
        </div>
        <ColorInput details={this.state.details} changeIcons={this.changeIcons} />
      </Wrapper>
    );
  }
}

export default App;
