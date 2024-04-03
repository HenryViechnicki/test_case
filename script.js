var fs = require('fs');
function writeData(){
  const tableData = ["Elliott", "39, -77"];
			const csv = tableData.map(row => row.join(',')).join('\n');
			let output_name = "userData.csv";
			fs.writeFile(output_name, csv, (err) => {
			if (err) throw err;
			});
}
