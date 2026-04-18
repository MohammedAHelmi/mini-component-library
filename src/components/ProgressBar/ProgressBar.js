/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  value = Math.max(0, Math.min(100, value));
  const sizeConfig = {
    large: {
      '--padding': '4px',
      '--outer-border-radius': '8px',
      '--height': '24px'
    },
    medium: {
      '--outer-border-radius': '4px',
      '--height': '16px'
    },
    small: {
      '--outer-border-radius': '4px',
      '--height': '8px'
    }
  };
  return (
    <Wrapper role="progressbar" aria-valuenow={value} style={sizeConfig[size]}>
      <BarWrapper>
        <Bar style={{ '--percentage': `${value}%` }}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  border-radius: var(--outer-border-radius);
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`
const BarWrapper = styled.div`
  height: 100%; 
  width: 100%; 
  background-color: 'transparent';
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  height: 100%;
  width: var(--percentage); 
  background-color: ${COLORS.primary};
`

export default ProgressBar;
