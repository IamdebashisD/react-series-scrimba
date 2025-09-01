import React from 'react'

function Main({car}) {
    const [meme, setMeme] =  React.useState({
        topText: "click the above button",
        bottomText: "to get a new image",
        imageUrl: car
    })

    const [allMemes, setAllMemes] = React.useState([])
    console.log(allMemes[0])
    
    React.useEffect(()=> {
        console.log("Effect runs once after initial render")
        fetch("https://api.imgflip.com/get_memes")
            .then((response)=> response.json())
            .then(data => setAllMemes(data.data.memes))
            .catch(error => setAllMemes(error))
    }, [])

    const getNewImage = () =>{
        const random = Math.floor(Math.random() * allMemes.length)
        const newImage = allMemes[random].url
        setMeme(prev => ({
            ...prev,
            imageUrl: newImage
        }))

    }

    function handleChange(event){
        const {value, name} = event.currentTarget
        console.log(value)
        setMeme(prevMeme => ({
            ...prevMeme, 
            [name]: value
        }))
    }
   
    return (
        <main>
            <div className='flex flex-col items-center gap-5 m-8 indent-[5px]'>
                <div className='flex gap-5 m-8 indent-[5px] '>
                    <label className='flex-1'>Top Text
                        <input 
                            className='w-full rounded-[6px] mt-[5px] py-[9px] px-[13px] shadow-sm border border-[#D5D4D8] indent-[5px]' 
                            type="text" 
                            placeholder='Shut up'
                            name='topText'
                            onChange={handleChange}
                            value={meme.topText}
                            
                        />
                    </label>
                    <label className='flex-1'>Bottom Text
                        <input 
                            className='w-full rounded-[6px] mt-[5px] py-[9px] px-[13px] shadow-sm border border-[#D5D4D8] indent-[5px]' 
                            type="text" 
                            name='bottomText'
                            placeholder='And Take my money'
                            onChange={handleChange}
                            value={meme.bottomText}

                        />
                    </label>
                </div>
                <button 
                    onClick={getNewImage}
                    className='w-[600px] h-[40px] rounded-[5px] bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-white focus:ring-black focus:ring-2 cursor-pointer'
                    
                >
                    Generate an image
                </button>
            </div>
            <div className='relative flex justify-center mx-auto'>
                <img src={meme.imageUrl} alt="car" width={600} />
                <h1 className="absolute px-4 py-2 text-4xl font-bold text-white transform -translate-x-1/2 bg-black bg-opacity-50 rounded top-4 left-1/2">{meme.topText.toUpperCase()}</h1>
                <h1 className="absolute px-4 py-2 text-4xl font-bold text-white transform -translate-x-1/2 bg-black bg-opacity-50 rounded bottom-4 left-1/2">{meme.bottomText.toUpperCase()}</h1>
            </div>

            
        </main>
    )
}

export default Main