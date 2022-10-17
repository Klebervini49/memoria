import styled from 'styled-components';
type ContainerProps = {
  shownBackground: boolean;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => (props.shownBackground ? '#fff' : '#E2E3E3')};
  width: 110px;
  height: 120px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
type IconProps = {
  opacity?: number;
  wihe?: string;
};
export const Icon = styled.img<IconProps>`
  border-radius: 15px;
  width: ${(props) => props.wihe ?? '100%'};
  height: ${(props) => props.wihe ?? '100%'};
  opacity: ${(props) => props.opacity ?? 1};
`;
