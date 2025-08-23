import cheficon from '../assets/icon.png'

function Header() {
  return (
    <header className='grid-cols-1 flex items-center justify-center w-full gap-2 h-[80px] bg-white shadow-md font-sans'>
        <img
        className='w-[43px] h-[52px]' 
        src={cheficon} alt="chef-logo" />
        <h1 className='grid font-inter font-normal text-[32px] leading-[60px] tracking-tightest text-[#141413]'>Chef Claude</h1>
    </header>
  )
}

export default Header
