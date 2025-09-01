export default function Header({icon}){
    return (
        <header className='grid-cols-1 p-8 flex items-center w-full aliign-item gap-2 h-[80px] shadow-md relative bg-gradient-to-r from-[#572280] to-[#A626D3]'>
            <img src={icon} alt="meme icon" width={50}/>
            <h1 className='font-karla font-bold text-[20.75px] tracking-[-0.1em] leading-none text-white items-stretch'>Meme generator</h1>
        </header>
    )
}