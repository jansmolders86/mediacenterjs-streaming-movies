/*
    MediaCenterJS - A NodeJS based mediacenter solution

    Copyright (C) 2013 - Jan Smolders

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

exports.engine = 'jade';

/* Modules */
var express = require('express')
, app = express()
, fs = require('fs.extra')
, config = require('../../lib/handlers/configuration-handler').getConfiguration()
, DeviceInfo = require('../../lib/utils/device-utils')
, torrentStream = require('torrent-stream');

exports.index = function(req, res){

    DeviceInfo.isDeviceAllowed(req, function(allowed){
        res.render('streaming-movies', {
            title: 'Streaming Movies',
            selectedTheme: config.theme,
            allowed: allowed
        });
    });

};

exports.get = function(req, res){
    var infoRequest = req.params.id,
        optionalParam = req.params.optionalParam;
    

}

exports.post = function(req, res){
    if(req.params.id === 'file'){
        var data =  req.body;
        var engine = torrentStream(data.magnet);

        engine.on('ready', function() {
            engine.files.forEach(function(file) {
                //var stream = file.createReadStream();
                res.send(file.name);
                res.end();
            });
        });
    }
}
