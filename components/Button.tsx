import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    title: string;
    variant: string;
    icon?: string;
    full?: boolean;
    isReversed?: boolean;
}

const Button = ({ type, title, variant, icon, full, isReversed} : ButtonProps) => {
  return (
    <button 
        className={`flexCenter gap-3 rounded-full ${isReversed ? 'hover:bg-offWhite-30' : ''} border ${variant} ${full && 'w-full'}`} 
        type={type}
    >
        <span className="cursor-pointer regular-16">{title}</span>
        {icon && <Image src={icon} alt={title} width={20} height={20} />}
    </button>
  )
}

export default Button
