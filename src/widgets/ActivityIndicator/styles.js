import styled from 'styled-components/native';

export const ActivityInicatorView = styled.ActivityIndicator`
  background-color: ${props => props.backgroundColor || 'transparent'}
`;