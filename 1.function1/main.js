function reverseString(message){
    // wirte your code here
    var tempMsg = message.split('');
    var length = tempMsg.length;
    var result = "";
    for(var x = 0; x<length;x++){
        result += tempMsg.pop();
        
    }
    console.log(result);
}
reverseString('hello'); // should return 'olleh'