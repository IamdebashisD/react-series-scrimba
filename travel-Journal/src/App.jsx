import './App.css'
import Globe from './assets/Globe.png'
import Header from './components/Header'
import TravelEntry from './components/TravelEntry'

function App() {

  return (
    <>
      <Header globe={Globe}/>
      
      <TravelEntry 
        image = "https://images.unsplash.com/photo-1703035300585-5cdc8893b0e6?q=80&w=431&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        country = "Japan"
        location = "Mount Fuji"
        googleMapLink = "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        date="12 Jan, 2021 - 24 Jan, 2021"
        text = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />

      <TravelEntry 
        image = "https://images.unsplash.com/photo-1579936806775-083556ee5c39?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        country = "Australia"
        location = "Sydney Opera House"
        googleMapLink = "https://share.google/5hOk5OagLfoNC5aM6"
        date="12 Jan, 2021 - 24 Jan, 2021"
        text = "The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings, and a masterpiece of 20th-century architecture."
      />

      <TravelEntry 
        image = "https://images.unsplash.com/photo-1617478993559-75ceef413f4a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        country = "India"
        location = "Darjeeling"
        googleMapLink = "https://share.google/Xv8OUcXwLGMUQeWLe"
        date="12 May, 2022 - 25 May, 2022"
        text = "Darjeeling is a town in India's West Bengal state, in the Himalayan foothills. Once a summer resort for the British Raj elite, it remains the terminus of the narrow-gauge Darjeeling Himalayan Railway, or “Toy Train,” completed in 1881. It's famed for the distinctive black tea grown on plantations that dot its surrounding slopes. Its backdrop is Mt. Kanchenjunga, among the world’s highest peaks. "
      />

    </>
  )
}

export default App
