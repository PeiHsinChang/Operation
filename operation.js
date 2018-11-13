<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Basic Operation</title>
	<script>
		let n1 = parseInt(prompt("請輸入第一個數字",""));
		let n2 = parseInt(prompt("請輸入第二個數字",""));
		let op = prompt("請輸入一個運算符號","");
		let result = "";
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
		alert(result);
	</script>
</head>
<body>
	
</body>
</html>
