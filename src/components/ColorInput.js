import React from "react";
import styled from "styled-components";

const DownloadBlock = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  max-width: 410px;
  width: 100%;
  .color {
    display: flex;
    justify-content: space-between;
  }
  input,
  button {
    font-size: 16px;
    height: 44px;
    text-align: center;
  }
  button {
    background-color: dodgerblue;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 20px;
  }
`;

class ColorInput extends React.Component {
  handleColor = event => {
    const { changeIcons } = this.props;
    changeIcons({ fill: event.target.value });
  };

  handleSize = event => {
    const { changeIcons } = this.props;
    changeIcons({ size: event.target.value });
  };

  render() {
    const { details: { fill } } = this.props;
    return (
      <DownloadBlock
        onSubmit={() => {
          alert("work in progress");
        }}
      >
        <div className="color">
          <input
            type="text"
            name="hexcode"
            value={fill}
            onChange={this.handleColor}
            placeholder="Enter Hex Code Here"
          />
          <input type="color" name="picker" value={fill} onChange={this.handleColor} />
        </div>
        <input type="range" name="range" step="4" min="16" max="64" onChange={this.handleSize} />
        <button type="submit">Download ↓</button>
      </DownloadBlock>
    );
  }
}

export default ColorInput;
