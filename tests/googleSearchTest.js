module.exports = {

    'default' : {
        isLocal : true,
    },
    
    'integration' : {
        isLocal : false
    },

    before : function(browser) {
      /*   console.log('Setting up...'); */
    },
    
    after : function(browser) {
       /*  console.log('Closing down...'); */
    },
    
    beforeEach : function(browser) {
        
    },
    
    afterEach : function(browser, done) {
/*         performAsync(function(err) {
            if (err) {
              done(err);
              return;
            }
        }); */
        done();
    },

    'Goole Demo Search for nightwatch' : function (browser) {
        browser
          .url('http://www.google.com')
          .waitForElementVisible('body', 1000)
          .setValue('input[type=text]', 'nightwatch')
          .waitForElementVisible('input[name=btnK]', 1000)
          .click('input[name=btnK]')
          .pause(1000)
    },
    'Looking at search results and coosing nightwatch homepage' : function (browser) {
        browser
          .waitForElementVisible('body', 1000)
          .assert.containsText('#main', 'Night Watch')
          .assert.containsText('.LC20lb','Nightwatch.js | Node.js powered End-to-End testing framework')
          .click('html body#gsr.srp.tbo.vasq div#main div#cnt.mdm div.mw div#rcnt div.col div#center_col div#res.med div#search div div#ires div#rso div.bkWMgd div.srg div.g div div.rc div.r a')
          .pause(1000)
    },
    'Checking out Nightwatch homepage' : function (browser) {
        browser
          .waitForElementVisible('body', 1000)
          .assert.containsText('div.col-md-6:nth-child(1) > h1:nth-child(1)','Nightwatch.js')
          .assert.containsText('div.col-md-6:nth-child(1) > p:nth-child(2)','Browser automated testing, the easy way.')
          .end();
    }

};