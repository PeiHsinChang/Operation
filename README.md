# peration

這個repository中所用到的method  
alert : 隸屬於 Window Object 裡面其中的一個 method  
alert()   
prompt : 隸屬於 Window Object 裡面其中的一個 method   
prompt("String1","String2")   
String1: 在彈跳視窗出現的文字內容   
String2: 在彈跳視窗中可以輸入的文字內容   

parseInt : 隸屬於javascript的function
parseInt()

```
<script>
function myFunction() {
    var a = parseInt("10") + "<br>"; //10
    var b = parseInt("10.00") + "<br>"; //10
    var c = parseInt("10.33") + "<br>"; //10
    var d = parseInt("34 45 66") + "<br>"; //34
    var e = parseInt("   60   ") + "<br>"; //60
    var f = parseInt("40 years") + "<br>"; //40
    var g = parseInt("He was 40") + "<br>"; //NAN

    var h = parseInt("11", 2)+ "<br>"; // 3 (因為預設為二進位)
    var i = parseInt("010")+ "<br>"; //10 
    var j = parseInt("10", 8)+ "<br>"; //8
    var k = parseInt("0x12")+ "<br>"; //18 (如果為0x開頭，會自動設為16進位)
    var l = parseInt("10", 16)+ "<br>"; //16
    var n = a + b + c + d + e + f + g + "<br>" + h + i + j + k +l;
    document.getElementById("demo").innerHTML = n;
}
</script>
```

```
if(op === "+"){
	result = n1 + n2;
}else if(op === "-"){
	result = n1 - n2;
}else if(op === "*"){
	result = n1 * n2;
}else if(op === "/"){
	result = n1 /n2;
}else{
	result = "輸入的運符號無效"
};
```
