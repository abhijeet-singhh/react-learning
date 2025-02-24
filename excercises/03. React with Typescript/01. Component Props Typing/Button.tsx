interface Button {
  label: string;
  onClick: () => void;
  isDisabled: boolean;
}

const Button = ({ label, onClick, isDisabled }: Button) => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <button
        onClick={onClick}
        disabled={isDisabled}
        id="btn"
        className="bg-orange-500 text-white w-20 px-2 py-1 rounded hover:bg-orange-400 cursor-pointer active:scale-x-95 transition-all duration-200"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;