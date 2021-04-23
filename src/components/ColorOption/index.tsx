import React, { FC } from 'react';
import { ColorOptionStyle } from './style';

interface IColorOption {
  isSelected: boolean;
  bgColor?: string;
  onSelect: (color: string) => void;
}
const ColorOption: FC<IColorOption> = props => {
  const { isSelected, bgColor = '#000', onSelect } = props;
  return (
    <ColorOptionStyle bgColor={bgColor} className={isSelected ? 'selected' : ''} onClick={() => onSelect(bgColor)} />
  );
};

export default ColorOption;
