<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  Hello world

	<!--<img src="mapOfBlair.png" alt="Workplace" usemap="#mapblair">-->
	<h1>Your map</h1>
	
	<iframe src="https://mapping.thexs.app/map.html?host=mexs&fid=6a123bf2b2cbd1339334a4587263c540384dfbdf58b675b790f6e5d0364c2933/1w2w5LCvP-NwWQ_HHx-gTzjIMjOrlrVL3" width="600" height="600"></iframe>
	
  <script>
		function myFunction() {
			var table = document.getElementById("testTable");
			var row = table.insertRow(0);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			cell1.innerHTML = "NEW CELL1";
			cell2.innerHTML = "NEW CELL2";
		}
	</script>

	<table id="testTable">
		<tr>
			<td>Company</td>
			<td>Contact</td>
			<td>Country</td>
		</tr>
		<tr>
			<td>Alfreds Futterkiste</td>
			<td>Maria Anders</td>
			<td>Germany</td>
		</tr>
		<tr>
			<td>Centro comercial Moctezuma</td>
			<td>Francisco Chang</td>
			<td>Mexico</td>
		</tr>
	</table>

	<button type="button" onclick="myFunction()">Try it</button>
</body>

	


</html>
