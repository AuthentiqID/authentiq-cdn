/*!
 * Authentiq JS snippet v0.1.0
 *
 * Authentiq JS Snippet for adding a button in a website
 *
 *
 * @author The Authentiq team
 * @website http://authentiq.io
 *
 * @copyright Authentiq 2016
 * @license under MIT (https://github.com/AuthentiqID/authentiq-js/blob/master/LICENSE)
 */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(n,t,i,u){"use strict";function e(){this.$get=function(){return i}}t.module("authentiq",[]).provider("authentiq",e)}(window,window.angular,window.authentiq=window.authentiq||{});
},{}]},{},[1]);
