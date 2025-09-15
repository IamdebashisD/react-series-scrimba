export default function Dice(props){

    const handleClick = () => {
        props.holdDice(props.id)
    };

    return (
        <div 
            className={`
                w-16 h-16 md:w-20 md:h-20 
                rounded-xl 
                shadow-lg 
                flex items-center justify-center 
                cursor-pointer 
                transition-all duration-300 
                m-2 
                p-2
                ${props.isFreeze 
                ? 'bg-green-400 shadow-inner scale-105' 
                : 'bg-white shadow-xl'
                }
                hover:-translate-y-1
            `}
            onClick={handleClick}
            >
            {/* Dice inner container */}
            <div className="relative w-full h-full">
                {/* Render pips based on dice value */}
                {props.value === 1 && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-full shadow-inner md:w-5 md:h-5" />
                </div>
                )}
                
                {props.value === 2 && (
                <>
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner top-2 left-2 md:w-4 md:h-4" />
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner bottom-2 right-2 md:w-4 md:h-4" />
                </>
                )}
                
                {props.value === 3 && (
                <>
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner top-2 left-2 md:w-4 md:h-4" />
                    <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-full shadow-inner md:w-4 md:h-4" />
                    </div>
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner bottom-2 right-2 md:w-4 md:h-4" />
                </>
                )}
                
                {props.value === 4 && (
                <>
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner top-2 left-2 md:w-4 md:h-4" />
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner top-2 right-2 md:w-4 md:h-4" />
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner bottom-2 left-2 md:w-4 md:h-4" />
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner bottom-2 right-2 md:w-4 md:h-4" />
                </>
                )}
                
                {props.value === 5 && (
                <>
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner top-2 left-2 md:w-4 md:h-4" />
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner top-2 right-2 md:w-4 md:h-4" />
                    <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-full shadow-inner md:w-4 md:h-4" />
                    </div>
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner bottom-2 left-2 md:w-4 md:h-4" />
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner bottom-2 right-2 md:w-4 md:h-4" />
                </>
                )}
                
                {props.value === 6 && (
                <>
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner top-2 left-2 md:w-4 md:h-4" />
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner top-2 right-2 md:w-4 md:h-4" />
                    <div className="absolute w-3 h-3 transform -translate-y-1/2 bg-black rounded-full shadow-inner top-1/2 left-2 md:w-4 md:h-4" />
                    <div className="absolute w-3 h-3 transform -translate-y-1/2 bg-black rounded-full shadow-inner top-1/2 right-2 md:w-4 md:h-4" />
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner bottom-2 left-2 md:w-4 md:h-4" />
                    <div className="absolute w-3 h-3 bg-black rounded-full shadow-inner bottom-2 right-2 md:w-4 md:h-4" />
                </>
                )}
            </div>
        </div>
    )
}