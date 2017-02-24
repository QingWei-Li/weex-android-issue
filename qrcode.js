var qrcode = require('qrcode-terminal')
var ip = require('ip').address()

var weex = 'weex.' + process.argv[2]
var weexFile = 'http://' + ip + ':3000' + '/dist/' + weex + '.js'

qrcode.generate(weexFile);
console.log(weexFile, '\n');