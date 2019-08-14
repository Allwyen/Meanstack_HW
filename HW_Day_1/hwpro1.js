const myassert=require('assert');
const mybuffer=require('buffer');
const mycluster=require('cluster');
const mypath=require('path');
const myquerystring=require('querystring');
const myutil=require('util');
const myzlib=require('zlib');
const myfs=require('fs');

myassert.equal(5,"5")

var gzip = myzlib.createGzip();
var r = myfs.createReadStream('./test.txt');
var w = myfs.createWriteStream('./mygzipfile.gz');
r.pipe(gzip).pipe(w);

var txt = 'Congratulate %s on his %dth birthday!';
var result = myutil.format(txt, 'Allwyen', 24); 
console.log(result);

var q = myquerystring.parse('year=2019&month=August');
console.log(q.month);

var filename = mypath.basename('D:/Important/ABCDMeanstack/Homework/mygzipfile.gz');
console.log(filename);

if (mycluster.isWorker) 
{
    console.log('I am a worker');
} 
else 
{
    console.log('I am a master');
    mycluster.fork();
    mycluster.fork();
}

var buf = Buffer.from('Hello, and welcome to Rome!');
console.log(buf.indexOf('welcome'));