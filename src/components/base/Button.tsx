type ButtonProps = {
  buttonText: string
}

export default function Button({
  buttonText
}: ButtonProps) {
  return (
    <button className="p-2 shrink-0 max-w-full h-[50px] w-[106px] rounded-xl bg-primaryBlue hover:bg-lightBlue text-white">{buttonText}</button>
  )
}
