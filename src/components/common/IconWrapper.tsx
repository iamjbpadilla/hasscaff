import React, { ReactNode, ReactElement } from 'react';

interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
  <div className="text-brand-primary">
    {React.cloneElement(children as ReactElement, { className: 'w-6 h-6' })}
  </div>
);

export default IconWrapper;
