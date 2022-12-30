function displayMessage(){
    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');
    var text3 = document.getElementById('text3');

    if (text1.value === '' | text2.value==='' | text3.value===''){
        
    }else {
        document.getElementById('message').style.opacity = '1';
    }
}