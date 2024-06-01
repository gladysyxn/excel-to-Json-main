import XLSX from 'xlsx';

export function processExcelUpload(req, res) {
  try {
    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    console.log(data);

    var revisedData = [];
    data.map( row => {
      if(row.length > 0)
        revisedData.push(row);
    })


    const finalData = revisedData.slice(1).map( row => {
       var item = {};
       row.forEach((value, index) => {
          item[revisedData[0][index]] = value;
       });
      
       return item;
    });



    res.render('index', { data : finalData} );
  } catch (error) {
    console.error('Error processing the Excel file:', error);
    res.status(500).send('Error processing file');
  }
}

