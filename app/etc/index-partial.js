// # Запись содержимиого content в ./app/source/html/index.html

//чтение контента html файла - http://www.blackpepper.co.uk/using-node-js-to-parse-and-split-html-files/
//запись - https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
var cheerio = require('cheerio'),
  fs = require('fs');

fs.readFile('index.html', 'utf8', dataLoaded);

function dataLoaded(err, data) {
  $ = cheerio.load(data);
  var content = $('#content').contents();
  var filename = './app/source/html/index.html';
  fs.writeFile(filename, content, function(err) {
    console.log('Written html to ' + filename);
  });
}
