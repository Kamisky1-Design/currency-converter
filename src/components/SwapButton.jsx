function SwapButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        mx-auto
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-full
        bg-purple-800
        text-white
        text-xl
        hover:bg-purple-600
        active:scale-90
        transition
      "
    >
      ⇅
    </button>
  );
}

export default SwapButton;
