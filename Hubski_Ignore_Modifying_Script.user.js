// ==UserScript==
// @name	Hubski Ignore Modifying Script
// @description	This is a script to remove any posts from ignored users or tags from your hubski feed
// @version	1.1
// @namespace	hubski.com/feed?id=forwardslash
// @run-at	document-end
// @grant	none
// @include	http*://hubski.com/*
// ==/UserScript==

//Select all posts and comments by class name
var posts = document.getElementsByClassName('box');
var comments = document.getElementsByClassName('outercomm');

//Filter comments and posts by seeing if a90101"> occurs within the div tags 
if (comments.length > 0) {
	for(var i = 0;i<comments.length;i++) {
		var ignoredComments = comments.innerHTML.search('a90101\">');
		if (ignoredComments >= 0) {
			comments[i].style.display='none';
		}
	}
}

if (posts.length > 0) {
	for(var i=0;i<posts.length;i++)
	{
		var ignored = posts[i].innerHTML.search('a90101\">');
		if (ignored >= 0) {
			posts[i].style.display='none';
		}
	}
}

