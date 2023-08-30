import React from 'react';

interface ChildProps {
  color: string;
  alertThis?: (msg: string) => void;
  msg: string;
  children?: React.ReactNode;
}

export const Child: React.FC<ChildProps> = ({
  color,
  alertThis = (msg) => alert(msg),
  msg,
}) => {
  return (
    <div>
      {color}
      <button onClick={() => alertThis(msg)}>Click me</button>
    </div>
  );
};
