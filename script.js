var fs = require('fs');
function writeData(){
  const tableData = ["Elliott", "39, -77"];
			const csv = tableData.map(row => row.join(',')).join('\n');
			let output_name = "userData.csv";
			fs.writeFile(output_name, csv, (err) => {
			if (err) throw err;
			});
	}

function buttonClick() {
			writeData();
			//var fs = require('fs');
			//const tableData = ["Elliott", "39, -77"];
			//const csv = tableData.map(row => row.join(',')).join('\n');
			//let output_name = "userData.csv";
			//fs.writeFile(output_name, csv, (err) => {
			//if (err) throw err;
			//});
			//let data = "run you stupid program";
			//fs.writeFile('user_data.txt', data, (err) => {if (err) throw err;});
			var code = prompt("Enter the code:");
			if (code === "1112") {
				window.location.href = "playing.html";
			}else {
				alert("Wrongish code. Please try again.");
			}
		}
