const express = require("express");
const cors = require("cors");
const PORT = 3000;

const app = express();

app.use(cors({optionSuccessSTatus:200}));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/headerparser",(req,res)=>{
	const ipadd = req.ip || req.header('x-forwarded-for') || req.connection.remoteAddress;
	const userAgent = req.header("user-agent");
	const lang = req.header("accept-language");
	
	const output = {"ipaddress":ipadd,"language":lang,"software":userAgent}
	res.json(output);
});

app.listen(PORT,()=>console.log(`Server listening to port ${PORT}`));