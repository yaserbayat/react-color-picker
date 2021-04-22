import React, {FC} from 'react';
import {CloseBtnStyle} from './style';

interface ICloseBtn {
    onClick: () => void;
}
const CloseButton: FC<ICloseBtn> = (props) => {
    const { onClick } = props;
    return (
        <CloseBtnStyle className="close-btn" onClick={onClick}>X</CloseBtnStyle>
    );
};

export default CloseButton;