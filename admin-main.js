/**
 * @author Andrew Lass | Black Dog Systems 
 */

$(document).ready(function ()
{	
	
	//initialize DOM elements
	$(".collapseAll, #currentDevToggle, #gitHubToggle, #AWSToggle, #prodAppsToggle, #domainControlToggle, #googleControlToggle").hide();
	
	
	//primitive expand/collapse all buttons
	$(".expandAll").click(function () {
		$(".expandAll").slideToggle("slow");
		$(".collapseAll").slideToggle("slow");
		$("#currentDevToggle, #gitHubToggle, #AWSToggle, #prodAppsToggle, #domainControlToggle, #googleControlToggle").slideToggle("slow");
	});
	
	$(".collapseAll").click(function () {
		$(".collapseAll").slideToggle("slow");
		$(".expandAll").slideToggle("slow");
		$("#currentDevToggle, #gitHubToggle, #AWSToggle, #prodAppsToggle, #domainControlToggle, #googleControlToggle").slideToggle("slow");
	});
	
	//adds hover color to the category titles
	$(".titleText").mouseenter(function () {
		$(this).css("color", "red");
	});
	$(".titleText").mouseleave(function() {
		$(this).css("color", "inherit");
	});
		
	//the below slide toggles control the sub-menu display upon user mouse1 input
	$("#currentDevToggleButton").click(function () {
		$("#currentDevToggle").slideToggle("slow");
	});
	
	$("#gitHubToggleButton").click(function () {
		$("#gitHubToggle").slideToggle("slow");
	});
	
	$("#AWSToggleButton").click(function () {
		$("#AWSToggle").slideToggle("slow");
	});
	
	$("#prodAppsToggleButton").click(function () {
		$("#prodAppsToggle").slideToggle("slow");
	});
	
	$("#domainControlToggleButton").click(function() {
		$("#domainControlToggle").slideToggle("slow");
	});
	
	$("#googleControlToggleButton").click(function() {
		$("#googleControlToggle").slideToggle("slow");
	});
	
	//Fades other three contact buttons upon hovering over one of them
	$("#emailIcon").mouseenter(function (){
		$("#twitterIcon").fadeTo("fast", 0.5);
		$("#facebookIcon").fadeTo("fast", 0.5);
	});
	$("#emailIcon").mouseleave(function (){
		$("#twitterIcon").fadeTo("fast", 1);
		$("#facebookIcon").fadeTo("fast", 1);
	});
	
	$("#twitterIcon").mouseenter(function (){
		$("#emailIcon").fadeTo("fast", 0.5);
		$("#facebookIcon").fadeTo("fast", 0.5);
	});
	$("#twitterIcon").mouseleave(function (){
		$("#emailIcon").fadeTo("fast", 1);
		$("#facebookIcon").fadeTo("fast", 1);
	});
	
	$("#facebookIcon").mouseenter(function (){
		$("#twitterIcon").fadeTo("fast", 0.5);
		$("#emailIcon").fadeTo("fast", 0.5);
	});
	
	$("#facebookIcon").mouseleave(function (){
		$("#twitterIcon").fadeTo("fast", 1);
		$("#emailIcon").fadeTo("fast", 1);
	});
	
}); 