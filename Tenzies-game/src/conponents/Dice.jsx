export default function Dice(props){

    const handleClick = () => {
        props.holdDice(props.id)
    };

    return (
        <>
            <button
             className={`m-2 h-20 w-20 from-neutral-900 border-none rounded-[10px] shadow-lg 
                cursor-pointer font-karla text-5xl leading-[100%] text-[#2B283A] text-center
                tracking-[0%] ${props.isFreeze ? 'bg-[#59E391]' : 'bg-white'} `}
                
             onClick={handleClick}
            >
                {props.value}
            </button>
        </>

    )
}