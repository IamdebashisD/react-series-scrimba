import cheficon from '../assets/icon.png'

function Header() {
  return (
    <header className='flex items-center justify-center w-full gap-2 h-[80px] bg-white shadow-md font-sans'>
        <img
        className='w-[43px] h-[52px]' 
        src={cheficon} alt="chef-logo" />
        <h1 className='font-inter font-normal text-[32px] leading-[60px] tracking-tightest text-[#141413]'>Chef Claude with dev kitchen</h1>
    </header>
  )
}

export default Header
