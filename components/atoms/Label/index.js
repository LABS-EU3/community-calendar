import styled, { css } from 'styled-components';

const Label = styled.label`
  font-size: ${props => props.fontSize || '0.6em'};
  color: ${props => props.color || '#000000'};
  font-weight: ${props => props.weight || 600};

  ${props => props.medium && css`
    font-size: 1.4rem;
  `}
`;

export default Label;
