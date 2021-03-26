var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

function f1() { // The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
    var fs = require('fs');

    fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function f2() { //Create a new, empty file using the open() method:
    var fs = require('fs');

    fs.open('mynewfile2.txt', 'w', function(err, file) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function f3() { //Create a new file using the writeFile() method:
    var fs = require('fs');

    fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
        if (err) throw err;
        console.log('Saved!');
    })
}

function f4() { //Append "This is my text." to the end of the file "mynewfile1.txt":
    var fs = require('fs');

    fs.appendFile('mynewfile1.txt', ' This is my text.', function(err) {
        if (err) throw err;
        console.log('Updated!');
    });
}

function f5() { //Replace the content of the file "mynewfile3.txt":
    var fs = require('fs');

    fs.writeFile('mynewfile3.txt', 'This is my text', function(err) {
        if (err) throw err;
        console.log('Replaced!');
    });
}

function f6() { // Delete "mynewfile2.txt":
    var fs = require('fs');

    fs.unlink('mynewfile2.txt', function(err) {
        if (err) throw err;
        console.log('File deleted!');
    });
}

function f7() { //Rename "mynewfile1.txt" to "myrenamedfile.txt":
    var fs = require('fs');

    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
        if (err) throw err;
        console.log('File Renamed!');
    });
}