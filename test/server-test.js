var test = require('tape');
var Shot = require('shot');
var server = require('../server.js');

test("check 1 is equal to 1", function (t) {
    t.equal(1, 1, "success!");
    t.end();
});

test('return the name of someone in an h1 tag at /name/{NAME OF PERSON}', function (t) {
	var nameofp = 'doge';
	Shot.inject(server, {method: 'GET', url: "/name/"+nameofp}, function (res) {
		t.equal(res.payload, '<h1>' + nameofp +'</h1>', "Congrats");
		t.end();
	});
});

test('display the content of a post request to /post-at-me-bro', function (t) {
	Shot.inject(server, {method: 'POST', url: "/post-at-me-bro"}, function (res) {
		t.equal(res.payload, '<h1>' + nameofp +'</h1>', "Congrats");
		t.end();
	});
});
