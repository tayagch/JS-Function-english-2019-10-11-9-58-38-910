function countWords(message){
    // wirte your code here
    var result = message.split(' ');
    console.log(result.length);
}
countWords('Good morning, I love JavaScript.'); // should return 5