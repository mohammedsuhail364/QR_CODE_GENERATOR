import React, { useState } from 'react'

export const QrCode = () => {
  const [img,setImg]=useState('')
  const [loading,setLoading]=useState(false);
  const[qrData,setQrData]=useState('');
  const[qrsize,setSize]=useState('');
  async function generateQR(){
    setLoading(true)
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}%20&%20data=${encodeURIComponent(qrData)}`;
      setImg(url);
    }catch(error) {
      console.error("Error ")
    }
    finally{
      setLoading(false);
    }
  }
  function downloadQr(){
    fetch(img).then((response)=>response.blob()).then((blob)=>{
      const link=document.createElement('a')
      link.href=URL.createObjectURL(blob);
      link.download='qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } ).catch((error)=>{
      console.error('Error downloading QR code',error);
    })
  }
  return (
    <div className='app-container'>
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please wait...</p>}
      {img && <img src={img} alt='' className='qr-code-image'/>}
      <div>
        <label htmlFor='datainput' className='input-label'>
          Data for QR code:
        </label>
        <input type='text' id='datainput' value={qrData} onChange={ (e)=> setQrData(e.target.value)} placeholder='Enter data QR code' />
        <label htmlFor='sizeinput' className='input-label'>
         Image size(e.g.,150):
        </label>
        <input type='text' id='sizeinput' value={qrsize} onChange={(e)=>setSize(e.target.value) } placeholder='Enter image size' />
        <button className='generate-button' disabled={loading}  onClick={generateQR}>Generate Qr Code</button>
        <button className='download-button' onClick={downloadQr} >Download Qr Code</button>
      </div>
      <p>Designed by Suhail </p>
    </div>
  )
}
