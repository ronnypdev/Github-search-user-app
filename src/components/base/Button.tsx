type ButtonProps = {
  buttonText: string;
  style?: React.CSSProperties;
  eventType?: "submit" | "reset" | "button" | undefined;
}

export default function Button({
  buttonText,
  style,
  eventType,
}: ButtonProps) {
  return (
    <button className="p-2 shrink-0 max-w-full h-[50px] w-[106px] rounded-xl bg-primaryBlue hover:bg-lightBlue active:bg-lightBlue text-white capitalize" style={style} type={eventType}>
      {buttonText}
    </button>
  )
}
