// tailwind styles for when a row is selected in the sidebar 

const getItemClassName = (index: number, selectedIndex: number) => {
  const baseClasses = "flex items-center gap-6 text-[16px] font-normal tracking-[0.2px] py-[18px] px-8 cursor-pointer";
  
  if (index === selectedIndex) {
    return `${baseClasses} bg-[#3e4049] border-l-[3px] pl-[29px] pr-8 border-[#dde2ff] text-[#DDE2FF]`;
  }
  
  return `${baseClasses} text-[#A4A6B3]`;
};

const getIconClassName = (index: number, selectedIndex: number) => {
  const baseClasses = "text-lg w-4 h-4";
  
  if (index === selectedIndex) {
    return `${baseClasses} text-[#dde2ff]`;
  }
  
  return `${baseClasses} text-[#60626e]`;
};

export { getItemClassName, getIconClassName }