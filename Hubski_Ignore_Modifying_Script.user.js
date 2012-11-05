// ==UserScript==
// @name	Hubski Ignore Modifying Script
// @description	This is a script to remove any posts from ignored users or tags from your hubski feed
// @version	1.0
// @namespace	hubski.com/feed?id=forwardslash
// @run-at	document-end
// @grant	none
// @match	http*://hubski.com/*
// ==/UserScript==


var elem = document.getElementsByClassName('box');

for(var i=0;i<elem.length;i++)
{

var ignored = elem[i].innerHTML.search('a90101\">');
	console.log('ignored = ' + ignored);
	if (ignored >= 0) {
		elem[i].style.display='none';
	}
}
    

