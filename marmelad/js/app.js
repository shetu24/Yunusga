/**
 * Подключение JS файлов которые начинаются с подчеркивания
 */
//=require ../_blocks/**/_*.js


/* ^^^
 * JQUERY Actions
 * ========================================================================== */
$(function() {

    'use strict';

    /**
     * определение существования элемента на странице
     */
    $.exists = (selector) => $(selector).length > 0;

    /**
     * [^_]*.js - выборка всех файлов, которые не начинаются с подчеркивания
     */
    //=require ../_blocks/**/[^_]*.jquery.js
});