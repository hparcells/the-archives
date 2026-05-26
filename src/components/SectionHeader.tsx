function SectionHeader({
  leftText,
  rightText,
  onLeftTextClick,
  onRightTextClick
}: {
  leftText: string;
  rightText?: string;
  onLeftTextClick?: () => void;
  onRightTextClick?: () => void;
}) {
  return (
    <div className='flex justify-between border-b border-stone-800 pb-2'>
      <p
        className={`font-(family-name:--font-b612-mono) text-stone-600 text-xs }`}
        onClick={onLeftTextClick}
      >
        {leftText}
      </p>
      {rightText && (
        <p
          className={`font-(family-name:--font-b612-mono) text-stone-600 text-xs ${onRightTextClick ? 'cursor-pointer hover:text-stone-400 transition-colors duration-200' : ''}`}
          onClick={onRightTextClick}
        >
          {rightText}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
