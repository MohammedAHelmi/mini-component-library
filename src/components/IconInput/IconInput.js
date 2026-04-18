import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const styleConfigs = {
  "small": {
    leftPadding: 24,
    height: 24/16,
    iconSize: 16,
    borderSize: 1,
    iconTextSpacing: 8
  },
  "large": {
    leftPadding: 36,
    height: 36/16,
    iconSize: 24,
    borderSize: 2,
    iconTextSpacing: 12,
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
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--icon-size': styleConfig.iconSize + 'px' }}>
        <Icon id={icon} size={styleConfig.iconSize}></Icon>
      </IconWrapper>
      <Input
        type='search'
        placeholder={placeholder} 
        style= {{ 
          '--width': width + 'px',
          '--height': styleConfig.height + 'rem',
          '--left-padding': styleConfig.leftPadding + 'px',
          '--border-size': styleConfig.borderSize + 'px'
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
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
`

const Input = styled.input`
  all: unset;
  position: relative;
  height: var(--height);
  width: var(--width);
  border-block-end: var(--border-size) solid ${COLORS.black};
  padding-inline-start: var(--left-padding);

  font-weight: 700;

  &:placeholder-shown {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 2px;
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

export default IconInput;
