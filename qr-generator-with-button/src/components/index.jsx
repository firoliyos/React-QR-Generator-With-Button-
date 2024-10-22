import {useState} from "react"
import { QRCodeCanvas } from "qrcode.react";

export default function QrGenerator() {

    const [text, setText] = useState("")
    const [qrCode, setQrCode] = useState("")

    const handleClick = () => {
        if(text.trim() === "") {
            alert("Please Enter Some Text To Generate a QR Code")
            return
        }
        setQrCode(text)
    }
    return(
      <div style={{ background: "lightGreen", textAlign: "center", marginTop: "20px" }} >
        <h1>QR CODE GENERATOR</h1>
        <input 
        style={{ borderRadius: '5px', textAlign: "center", marginTop: "20px", padding: "20px 20px" }}
         type="text" 
         placeholder="Enter text here"
         value={text}
         onChange={(e) => setText(e.target.value)}
         />
         
        <br />

        <button onClick={handleClick} style={{background: 'black',color: 'yellow',borderRadius: '20px', margin: "20px", padding: "10px 20px" }} >
            GENERATE
        </button>

        {
          qrCode && (
            <div>
                <QRCodeCanvas 
                value={qrCode} 
                size={256}
                style={{ margin: "20px" }}
                />
            </div>
          )  
        }
        
           
        
      </div>  
    )
}