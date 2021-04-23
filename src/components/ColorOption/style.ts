import styled from 'styled-components';

export const ColorOptionStyle = styled.span<{ bgColor: string }>`
  background-color: ${props => props.bgColor};
  display: inline-block;
  position: relative;
  height: 24px;
  width: 42px;
  cursor: pointer;
  transform-origin: center;
  vertical-align: top;
  transition: background-color 0.2s;

  &.selected {
    border: solid 1px #ffffff;
    box-shadow: 0 0 7px 0 rgb(22 45 61 / 44%);
    box-sizing: border-box;
    transform: scale(1.1);
    z-index: 2;
  }
`;
