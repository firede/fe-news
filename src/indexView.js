/**
 * @file
 * @author (firede@firede.us)
 */

define(function (require) {

    var config = {};

    config.template = [
        require('./common/master.tpl'),
        require('./index.tpl')
    ];

    return config;

});
