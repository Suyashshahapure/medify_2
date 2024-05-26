import React from 'react';

export const Button = ({ content, flexDesign, marginDesign, XPaddingDesign, IconLogo, onClickFuntion}) => {
  return (
    <div className={`${flexDesign} ${marginDesign} bg-blueTheme text-white font-medium text-[1rem] 
    ${XPaddingDesign} py-[0.75rem] rounded-md cursor-pointer`} onClick={onClickFuntion}>
      {IconLogo && <IconLogo className="text-[1.5rem]" />}
      {content}
    </div>
  );
};


