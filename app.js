var express = require('express');
var mongoose = require('mongoose');
var multer = require('multer');
var path = require('path');
var userModel = require('./models/userModel');
var excelToJson = require('convert-excel-to-json');
var bodyParser = require('body-parser');
var fs = require('fs');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
var uploads = multer({ storage: storage });
//connect to db  
mongoose.connect('mongodb://localhost:27017/test1', { useNewUrlParser: true })
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err))
//init app  
var app = express();

//set the template engine  
app.set('view engine', 'ejs');
//fetch data from the request  
app.use(bodyParser.urlencoded({ extended: false }));
//static folder  
app.use(express.static(path.resolve(__dirname, 'public')));
//route for Home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// Upload excel file and import to mongodb
app.post('/uploadfile', uploads.single("uploadfile"), (req, res) => {
  importExcelData2MongoDB(__dirname + '/public/uploads/' + req.file.filename);
  console.log('__dirname', __dirname);

  res.sendFile(__dirname + '/a.html');
  console.log(res);
});

// Import Excel File to MongoDB database
function importExcelData2MongoDB(filePath) {
  // -> Read Excel File to Json Data

  /**const excelData = excelToJson({
    sourceFile: filePath,
    header:{
        rows: 1
    },
    columnToKey: {
      '*': '{{columnHeader}}'
    }
  });*/


  /*const excelData = excelToJson({
  sourceFile: filePath,
  sheets:[{
  // Excel Sheet Name
  name: 'Customers',
  // Header Row -> be skipped and will not be present at our result object.
  header:{
  rows: 1
  },
  // Mapping columns to keys
  columnToKey: {
  //A: '_id',
  A: 'name',
  B: 'address',
  C: 'age'
  }
  }]
  });*/


  const excelData = excelToJson({
    sourceFile: filePath,
    header: {
      rows: 1
    },
    // Mapping columns to keys
    columnToKey: {
      A: 'name',
      B: 'email',
      C: 'mobile',
      D: 'dob',
      E: 'experience',
      F: 'resume',
      G: 'clocation',
      H: 'address',
      I: 'cemployer',
      J: 'cdesignation'
    }
  });

  // -> Log Excel Data to Console
  //console.log(excelData);
  /**
  { 
  Customers:
  [ 
  { _id: 1, name: 'Jack Smith', address: 'Massachusetts', age: 23 },
  { _id: 2, name: 'Adam Johnson', address: 'New York', age: 27 },
  { _id: 3, name: 'Katherin Carter', address: 'Washington DC', age: 26 },
  { _id: 4, name: 'Jack London', address: 'Nevada', age: 33 },
  { _id: 5, name: 'Jason Bourne', address: 'California', age: 36 } 
  ] 
  }
  */
  /**  
  // Insert Json-Object to MongoDB
  userModel.insertMany(excelData['Sheet1'],(err,data)=>{  
  if(err){  
  console.log(err);  
  }else{  
  console.log('done');
  //res.redirect('/a.html'); 
  }  
  }); */


  // Insert single record
  /**userModel.insertMany(excelData['Sheet1'], {ordered: false},(err,data)=>{  
  if(err){  
  console.log('error',err);  
  }else{  
  console.log('done');
  //res.redirect('/a.html'); 
  }  
  });*/
  var exData_new = [];

  var async = require("async");

  async.eachSeries(excelData, function (exData, outCb) {
    console.log(exData);
    exData_new = exData;
    async.eachSeries(exData, function (item, inCb) {

    },
      function (err) {
        console.log('Outer Callback')
        outCb(null);  // outer callback
      });
  },
    function (err) {
      console.log('all done!!!');
    });
  var dups = [];
  var arr = exData_new.filter(function (el) {
    // If it is not a duplicate, return true
    if (dups.indexOf(el.email) == -1) {
      dups.push(el.email);
      return true;
    }

    return false;

  });

  console.log('dups', arr);
  arr.forEach(element => {
    userModel.create(element, function (err, result) {

    }
    );
    console.log(element);
    console.log('Inner Callback')
    // inCb(null);
  });
  // inner callback




  fs.unlinkSync(filePath);
}
/**userModel.find({ name: 'a'}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("First function call : ", docs);
    }
});*/
//assign port  
var port = process.env.PORT || 3001;
app.listen(port, () => console.log('server run at port ' + port));
module.exports = app