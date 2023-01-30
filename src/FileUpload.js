import logo from './logo.svg';
import './App.css';
import langFile from "./test-files/languages.txt"
import educationFile from "./test-files/education.txt"

function FileUpload() {
  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      console.log(text);
      //alert(text);
      var preview = document.getElementById('userFile');
      preview.innerHTML = text;
    };
    reader.readAsText(e.target.files[0]);
  };


  function test() {
    fetch(langFile)
      .then(r => r.arrayBuffer())
      .then(buffer => {
        const jschardet = require('jschardet');
        const iconv = require('iconv-lite');
  
        const detectedEncoding = jschardet.detect(buffer).encoding;
        const decodedText = iconv.decode(buffer, detectedEncoding);
  
        var preview = document.getElementById('langFile');
        preview.innerHTML = decodedText;
      });
  }
  
  


//     function test(){
//       fetch(langFile)
//         .then(r => r.text())
//         .then(text => {
//           console.log('text decoded:', text);
//           var preview = document.getElementById('langFile');
//           preview.innerHTML = text;

//         const iconv = require('iconv-lite');
//         const encodedText = '...';  // the encoded text
//         const decodedText = iconv.decode(encodedText, 'UTF-8');  // decode the text to UTF-8

//         console.log(decodedText);  // the decoded text in normal English
//     });
// }

  return (
    <div>
      <input type="file" onChange={showFile} />
      <button onClick = {test()}>View Text</button>

      <h1>User File</h1>
      <div id="userFile">Choose Text File</div>

      <h1>Text from langFile</h1>
      <div id="langFile">Choose text File</div>
    </div>
  );
}
export default FileUpload;

