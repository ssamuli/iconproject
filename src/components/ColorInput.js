import React from "react";
import styled from "styled-components";

const DownloadBlock = styled.div`
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
  colorRef = React.createRef();
  pickerRef = React.createRef();
  sliderRef = React.createRef();

  changeIcon = () => {
    const { changeIcons } = this.props;

    const data = {
      fill: this.colorRef.current.value || this.pickerRef.current.value,
      size: parseFloat(this.sliderRef.current.value)
    };

    changeIcons(data);
  };

  render() {
    return (
      <DownloadBlock>
        <div className="color">
          <input
            type="text"
            name="hexcode"
            ref={this.colorRef}
            placeholder="Enter Hex Code Here"
            onChange={this.changeIcon}
          />
          <input type="color" name="picker" ref={this.pickerRef} onChange={this.changeIcon} />
        </div>
        <input type="range" name="range" step="4" min="16" max="64" ref={this.sliderRef} onChange={this.changeIcon} />
        <button
          type="submit"
          onClick={() => {
            alert("work in progress");
          }}
        >
          Download ↓
        </button>
      </DownloadBlock>
    );
  }
}

export default ColorInput;
