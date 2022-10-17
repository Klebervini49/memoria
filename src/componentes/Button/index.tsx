import React from 'react'
import * as C from './styles'

type Props = {
  label: string;
  icon?: any;
  onClicks: React.MouseEventHandler<HTMLDivElement>;
};
export const Button = ({ label, icon, onClicks }: Props) => {
  return (
    <C.Container onClick={onClicks}>
      {icon && (
        <C.IconArea>
          <C.Icon src={icon} />
        </C.IconArea>
      )}

      <C.Label>{label}</C.Label>
    </C.Container>
  );
};
