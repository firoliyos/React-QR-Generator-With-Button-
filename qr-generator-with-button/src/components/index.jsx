import {useState} from "react"


export default function QrGenerator() {

    const [text, setText] = useState("")
    const [qrCode, setQrCode] = useState("")
    return(
      <div>
        <h1>QR CODE GENERATOR</h1>
        <input 
         type="text" 
         placeholder="Enter text here"
         value={text}
         onChange={(e) => setText(e.target.value)}
         />
      </div>  
    )
}