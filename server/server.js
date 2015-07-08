var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000);

app.use(express.static(__dirname + '../../client'));

app.use("/getInfo", function(req, res){
	console.log("THIS IS REQ.BODY!!!!"+ JSON.stringify(req.body));
	request('http://www.zillow.com/webservice/mortgage/CalculateAffordability.htm?zws-id=X1-ZWz1a6fti68n4b_1llb0&annualincome='+req.body.annual+'&monthlypayment='+req.body.monthly+'&down='+req.body.down+'&monthlydebts='+req.body.mDebts+'&rate='+req.body.rate+'&schedule=yearly&term=360&debttoincome=36&incometax=30&propertytax=20&hazard=20000&pmi=1000&hoa=10000&zip=91302&estimate=false&output=json', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log("THIS IS THE TYPE ", body);
	    body = JSON.parse(body);
	    res.json(body);
	  }
	})
})
console.log("Listening on 3000...")