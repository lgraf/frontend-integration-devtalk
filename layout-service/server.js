const PORT = 80;
const TWO_HOURS = 3600000;
const NAVIGATION = [
    { 'name' : 'Home', 'path' : '/' },
    { 'name' : 'Mailings', 'path' : '/mail/' }
];

var express = require( 'express' );
var app = express();

app.use( express.static( 'static', { maxAge: TWO_HOURS } ) );

app.listen( PORT, function() {
    console.log( 'layout-service listening on port: ' + PORT + '!' );
} );


app.get( '/header.html', function( req, res ) {
    let navigation = `
        <nav class="navbar navbar-toggleable-md navbar-inverse" style="background-color:#333333">
          <a class="navbar-brand" href="#">P</a>
          <div id="navbarNav" class="collapse navbar-collapse">
            <ul class="navbar-nav">
                ${navigationEntries()}
            </ul>
          </div>
          <div class="navbar-text font-weight-normal text-right text-nowrap font-small">
              Dynamic header served by <a href="http://expressjs.com/" target="_blank">express.js</a>
          </div>
        </nav>`;
    
    res.header( "Cache-Control", `public, max-age=${TWO_HOURS}` );
    res.contentType( 'text/html' );
    res.send( navigation ); 
} );

function navigationEntries() {
    let entries = '';
    NAVIGATION.forEach( function( entry ) {
        entries += `<li class="nav-item"><a class="nav-link" href="${entry.path}">${entry.name}</a></li>`;
    } );
    return entries;
}