// ImageToText.js
import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { Link } from 'react-router-dom';
const ImageToText = () => {
  const [image, setImage] = useState('afsd');
  const [text, setText] = useState('');
  const [spinner, setSpinner] = useState('');
  const [dataavailable,setDataavailable] = useState(false)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSpinner(true)
    setImage(URL.createObjectURL(file))
    Tesseract.recognize(
      file,
      'eng',
      {logger : (x) => console.log(x)}
    ).then(({data : {text}})=>{
      setText(text)
      setSpinner(false)
      setDataavailable(true)
    })
  }

  return (
    <div className='openc9'>
      <Link to='/dashboard'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short back-on" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
</Link>
      <div className="titup">Image To Text</div>
      <div className='upload'>
      <input type="file" className='ImgUpload' accept="image/*" onChange={handleImageChange} />
      <p className='uploadtxt'>Tap Here To Upload Image</p>
      </div>
      {spinner && 
<div className="spinner">
<div class="spinner-border text-info" role="status">
  <span class="visually-hidden"></span>
</div>
</div>
}
{dataavailable && <div className="all">
      <div className='uploaded-image'>
        <p className="uptxt">Uploaded Image</p>
      {image && <img src={image} className='upim' alt="Uploaded"/>}
      </div>
      <div className='extxt'>
        <p className='extracttxt'>Extracted Text : </p>
      </div>
      <div className="heretext">
         
      {text && <div>{text}</div>}
      </div>
      </div>
}
    </div>
  );
};

export default ImageToText;
