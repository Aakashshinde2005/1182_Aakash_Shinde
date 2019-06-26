var http =require("http");

var Employee=[
{Eid:1,EName:"jack",address:"mumbai"},
	{Eid:2,EName:"mark",address:"pune"},
		{Eid:3,EName:"lara",address:"Delhi"},
			{Eid:4,EName:"Anna",address:"mumbai"}
];

function process_request(req,resp)
{
	resp.writeHead(200,{"content_type":"text/plain"});
	resp.end(JSON.stringify(Employee));
}

var server=http.createServer(process_request);
server.listen(8000);
console.log("server is listining on port 8000");