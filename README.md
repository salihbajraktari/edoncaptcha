edoncaptcha
===========
A simple lightweight jQuery plugin for creating and implementing captcha with logic questions in jQuery.
 
Installation
============
Include script after the jQuery library.
<script type="text/javascript" src="jquery.edoncaptcha.js"></script>

Usage
=====
Call the plugin:
$('the_value').edoncaptcha();

"the_value" can be class or ID of the form. You are required to call a property of the form (class or ID).

When the plugin is called it will generate automatically a label and a text input at the bottom of the form before the submit input. 
The submit input automatically will disabled at the start. Submit input will be enabled only after the logic question is right.
If you click on "Enter", the form will not be submitted. Only after the captcha value is right you can click "Enter" key is enabled.
