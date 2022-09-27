window.onload=function(){
    var convertBtn = document.querySelector('.convert-button');
    var URLinput = document.querySelector('.URL-input');
    convertBtn.addEventListener('click', () => {
        console.log(`URL: ${URLinput.value}`);
        sendURL(URLinput.value);
        });
    
    }
    
    function sendURL(URL) {
        window.location.href = `http://localhost:8080/download?URL=${URL}`;
        // window.location.href = `https://goldfish-app-jci26.ondigitalocean.app/sample-nodejs/download?URL=${URL}`;
    }