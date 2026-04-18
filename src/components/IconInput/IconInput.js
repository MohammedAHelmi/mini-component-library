import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const styleConfigs = {
  "small": {
    padding: 4,
    height: 24,
    iconSize: 16,
    borderSize: 1,
    iconTextSpacing: 8,
    inputHeight: 14
  },
  "large": {
    padding: 6,
    height: 36,
    iconSize: 24,
    borderSize: 2,
    iconTextSpacing: 12,
    inputHeight: 21
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styleConfig = styleConfigs[size];

  return (
    <Wrapper style={{ '--pading': styleConfig.padding + 'px', '--width': width + 'px', '--height': styleConfig.height + 'px', '--border-size': styleConfig.borderSize + 'px' }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--icon-size': styleConfig.iconSize + 'px' }}>
        <Icon id={icon} size={styleConfig.iconSize}></Icon>
      </IconWrapper>
      <Input type='search' placeholder={placeholder}  style={{ '--input-width': (width - styleConfig.iconSize - styleConfig.iconTextSpacing) + 'px', '--input-height': styleConfig.inputHeight + 'px' }}/>
      <FocusBox />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  isolation: isolate;
  position: relative;
  height: var(--height);
  width: var(--width);
  border-block-end: var(--border-size) solid ${COLORS.black};
  padding-block: var(--padding);
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-block: auto;
  width: var(--icon-size);
  height: var(--icon-size);
  z-index: 2;
`

const Input = styled.input`
  all: unset;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: var(--input-width);
  height: var(--input-height);
  font-weight: 700;
  z-index: 2;

  &:placeholder-shown {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }
`;


const FocusBox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline-offset: 3px;
  z-index: 1;

  ${Input}:focus + & {
    outline: 2px solid ${COLORS.primary};
  }
`;

export default IconInput;
