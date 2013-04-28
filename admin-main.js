/**
 * @author Andrew Lass | Black Dog Systems 
 */

$(document).ready(function ()
{	
	
	$(".titleText").mouseenter(function () {
		$(this).css("color", "red");
	});
	$(".titleText").mouseleave(function() {
		$(this).css("color", "inherit");
	});
	
	$("#gitHubToggle").hide();
	$("#gitHubToggleButton").click(function () {
		$("#gitHubToggle").slideToggle("slow");
	});
	
	$("#AWSToggle").hide();
	$("#AWSToggleButton").click(function () {
		$("#AWSToggle").slideToggle("slow");
	});
	
	$("#prodAppsToggle").hide();
	$("#prodAppsToggleButton").click(function () {
		$("#prodAppsToggle").slideToggle("slow");
	});
	
	
	//Fades other three contact buttons upon hovering over one of them
	$("#emailIcon").mouseenter(function (){
		$("#twitterIcon").fadeTo("slow", 0.5);
		$("#facebookIcon").fadeTo("slow", 0.5);
	});
	$("#emailIcon").mouseleave(function (){
		$("#twitterIcon").fadeTo("slow", 1);
		$("#facebookIcon").fadeTo("slow", 1);
	});
	
	
	$("#twitterIcon").mouseenter(function (){
		$("#emailIcon").fadeTo("slow", 0.5);
		$("#facebookIcon").fadeTo("slow", 0.5);
	});
	$("#twitterIcon").mouseleave(function (){
		$("#emailIcon").fadeTo("slow", 1);
		$("#facebookIcon").fadeTo("slow", 1);
	});
	
	
	$("#facebookIcon").mouseenter(function (){
		$("#twitterIcon").fadeTo("slow", 0.5);
		$("#emailIcon").fadeTo("slow", 0.5);
	});
	$("#facebookIcon").mouseleave(function (){
		$("#twitterIcon").fadeTo("slow", 1);
		$("#emailIcon").fadeTo("slow", 1);
	});
	
}); 

