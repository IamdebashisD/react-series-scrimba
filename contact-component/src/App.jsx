import './App.css'
import ContactComponent from './component/ContactComponent'
import { useEffect, useState } from 'react'

function App() {

  const [localData, setLocalData] = useState()

  const data = [
    {
      id: 1,
      dogImg : "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name : "Mr. Wickerson",
      contactNo : "(232) 36758-862",
      email : "wicker.son@gmail.com",
      details : "The image features a Beagle"
    }, 
    {
      id: 2,
      dogImg : "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name : "Mr. Siberian Husky",
      contactNo : "(232) 36758-862",
      email : "wicker.son@gmail.com",
      details : "The dog in the image is a Siberian Husky"
    }, 
    {
      id: 3,
      dogImg : "https://images.unsplash.com/photo-1547677329-fe2b4e9b19d2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name : "Mr. Golden Retriever",
      contactNo : "(232) 36758-862",
      email : "wicker.son@gmail.com",
      details : "The image features a Golden Retriever"
    }, 
    {
      id: 4,
      dogImg : "https://media.istockphoto.com/id/481608222/photo/part-of-beagle.jpg?s=1024x1024&w=is&k=20&c=tHrRydUgjPDHVNDXWBD_2iDI-doG42tPxTj-pdCEPjY=",
      name : "Mr. Beagle",
      contactNo : "(232) 36758-862",
      email : "wicker.son@gmail.com",
      details : "The image shows a Beagle"
    },
    {
      id: 5,
      dogImg : "https://media.istockphoto.com/id/521620925/photo/photo-of-a-beagle-dog.jpg?s=1024x1024&w=is&k=20&c=KB5vtYZSAVY9kxrH6kRSa9899mYja5B7JS3GIC3t3lk=",
      name : "Mr. Beagle",
      contactNo : "(232) 36758-862",
      email : "wicker.son@gmail.com",
      details : "The image features a Beagle"
    },
    {
      id: 6,
      dogImg : "https://media.istockphoto.com/id/504004778/photo/dog.jpg?s=1024x1024&w=is&k=20&c=tzhk0nKzJUAuOIhMGZtdB7th_NbGK8mlBm2UvsYnwWM=",
      name : "Mr. Bali",
      contactNo : "(232) 36758-862",
      email : "wicker.son@gmail.com",
      details : "A breed native to the Indonesian island of Bali"
    },
    {
      id: 7,
      dogImg : "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name : "Mr. Golden Retriever",
      contactNo : "(232) 36758-862",
      email : "wicker.son@gmail.com",
      details : "The image shows a Golden Retriever"
    },
    {
      id: 8,
      dogImg : "https://images.unsplash.com/photo-1564067934826-445d6d4e22ed?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name : "Mr. Italian Greyhound",
      contactNo : "(232) 36758-862",
      email : "italian.greyhound@gmail.com",
      details : "The image shows a Italian Greyhound"
    },
    {
      id: 9,
      dogImg : "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name : "Mr. Pit Bull",
      contactNo : "(102) 367108-842",
      email : "pit.bull@gmail.com",
      details : "The dog in the image appears to be a type of Pit Bull"
    }
    
  ]

  console.log(data[0].name)


  // data set to the local storage -----------------------------------

  useEffect(()=> {
    const data = JSON.parse(localStorage.getItem("data"))
    if(data && data.length > 0){
      setLocalData(data)
    }
  }, [])

  useEffect (()=> {
    localStorage.setItem('data', JSON.stringify(data))
  }, [localData])

// --------------------------------------------------------------------



  return (
    <>
      <h1 className='flex justify-center px-2 py-4 text-lg text-white bg-teal-800 rounded-lg shadow-lg '>Contact Component</h1>
      
      <div className="flex flex-wrap justify-center gap-[40px] text-gray-600 ">
        
        {data.map((item) => (
          <ContactComponent 
          className='transition-all'
            key = {item.id}
            dogImg = { item.dogImg }
            name = {item.name}
            contactNo = {item.contactNo}
            email = {item.email}
            details = {item.details}
          />
        ))}

        

      </div>

      <ProductItems />
    </>
  )
}

export default App




// ---------------------------------CHNAGING THE COLOR BY `isFruit` PROPERTY------------------------------------------

function ProductItems () {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ]

  const listItems = products.map((item)=> (
    <li key={item.id} className={`${item.isFruit ? 'text-yellow-700' : 'text-purple-600'} shadow-[1px_1px_8px_rgba(0,0,0,0.25)] cursor-pointer transition-shadow duration-100 hover:-translate-y-1 p-2 flex-shrink-0 disabled:opacity-50 overflow-hidden`}>
      {item.title}
    </li>
  ))

  return (
    <>
      <ul className='space-y-2'>
        {listItems}
      </ul>
    </>
  );

}


