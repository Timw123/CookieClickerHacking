//inspect element
var i = 0; var limit = 1000000; function win () { setTimeout(function () { document.getElementById('bigCookie').click(); i++; if (i < limit) { win(); } }, 5)} win();

//bookmarklet
javascript:(function()%7Bvar%20i%20%3D%200%3B%20var%20limit%20%3D%201000000%3B%20function%20win%20()%20%7B%20setTimeout(function%20()%20%7B%20document.getElementById('bigCookie').click()%3B%20i%2B%2B%3B%20if%20(i%20%3C%20limit)%20%7B%20win()%3B%20%7D%20%7D%2C%205)%7D%20win()%3B%7D)()%3B
