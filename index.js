/**
 * Created by Islam on 16.06.2017.
 */

let request = require('request'),
	querystring = require('querystring');

module.exports = TelegramBot;

function TelegramBot(token){
	this.token = token;
	this.url = "https://api.telegram.org/bot" + this.token + "/";
}

TelegramBot.prototype.api = function(method, options){
	let url = this.url + method;
	if(options)
		url += "?" + querystring.stringify(options);
	request(url);
};

/**
 * Send message
 * @param {string} text
 * @param {number} chat_id
 * @param {Object} [params]
 * @param {boolean} [params.disable_notification] - send message without notification
 */
TelegramBot.prototype.sendMessage = function(text, chat_id, params){
	let options = params || {};
	options.text = text;
	options.chat_id = chat_id;
	this.api('sendMessage', options);
};