function alphabetSort(message){
    // wirte your code here
    var temp = message.split('');
    console.log(temp.sort().join(''));
}
alphabetSort('hello'); // should return 'ehllo'