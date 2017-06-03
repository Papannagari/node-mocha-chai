var assert =require("chai").assert,
 expect = require("chai").expect,
 should=require("chai").should(),
supertest = require('supertest')
var server = supertest.agent('http://localhost:2018')
describe("Testing contactlist API",function(){
	/*before("Before hook",function(){
		console.log("This is before hook")
	})
	after("After hook",function(){
		console.log("This is after hook")
	})
	beforeEach("this is before each",function(){
		console.log("This is before each hook")
	})
	afterEach("this is after each",function(){
		console.log("This is after each hook")
	})
	it("My first test case",function(){
		console.log("This is my second testcases")
	})*/
	it("should get all contacts",function(done){
		server.get("/getContacts")
		.expect(200)
		.expect('content-type',/json/)
		.end(function(err,data){
        console.log(data)
        data.body.forEach(function(res){
        	res.should.have.property('name');
        	res.name.should.equal('adam');
        });
        done();
		})
	})
	/*it("My first test case",function(){
		var foo = "swan";
		var tea = {
			flavors : "sre"
		};
		//assert.typeOf(foo,'string')
		//expect(foo).to.be.a('string');
		//foo.should.be.a('string')
	//	foo.should.equal('bar')
	foo.should.have.lengthOf(4)
	tea.should.have.property('flavors')
		console.log("This is my first testcases")
	})*/
})

/*describe.only("This is my second test suite",function(){
	before("Before hook",function(){
		console.log("This is before hook")
	})
	after("After hook",function(){
		console.log("This is after hook")
	})
	beforeEach("this is before each",function(){
		console.log("This is before each hook")
	})
	afterEach("this is after each",function(){
		console.log("This is after each hook")
	})
	it.only("My first test case",function(){
		console.log("This is my second testcases")
	})
	it("My first test case",function(){
		console.log("This is my second testcases")
	})
})*/