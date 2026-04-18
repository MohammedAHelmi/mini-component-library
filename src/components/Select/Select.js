import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ id, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  
  return (
    <Wrapper>
      <NativeSelect id={id} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationLayer>
        {displayedValue}
        <Chivron style={{ '--size': '24px' }}>
          <Icon id={'chevron-down'} size={24}></Icon>
        </Chivron>
      </PresentationLayer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  appearance: none;
`;

const PresentationLayer = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 2px solid ${COLORS.primary};
  }
`;

const Chivron = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
