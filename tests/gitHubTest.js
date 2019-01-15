module.exports = {
    '@disabled': false,

    'default' : {
        isLocal : true,
    },
    
    'integration' : {
        isLocal : false
    },

    'Open GitHub page' : function (browser) {
        browser
          .url('https://github.com/')
          .waitForElementVisible('body', 1000)
          .assert.containsText('.h000-mktg','Built for developers')

        // checking input field
        browser.expect.element('.header-search-input').to.be.enabled;
        browser.expect.element('.header-search-input').to.be.an('input')
    },
    'Search for Nightwatch-test-sample repository' : function (browser) {
        browser
          .setValue('input[type=text]', ['Nightwatch-test-sample', browser.Keys.ENTER])
          .pause(1000)
    },
    'Looking at search results' : function (browser) {
        browser
          .waitForElementVisible('body', 1000)
          .pause(1000)
          .assert.containsText('li.repo-list-item:nth-child(4) > div:nth-child(1) > h3:nth-child(1) > a:nth-child(1)','buhijs/Nightwatch-test-sample')
          .click('.filter-list > li:nth-child(1)')
          .pause(1000)
          .assert.containsText('li.repo-list-item:nth-child(4) > div:nth-child(1) > p:nth-child(2)','Trying out Nightwatch')
          .assert.containsText('li.repo-list-item:nth-child(4) > div:nth-child(1) > h3:nth-child(1) > a:nth-child(1)','buhijs/Nightwatch-test-sample')
          .click('li.repo-list-item:nth-child(4) > div:nth-child(1) > h3:nth-child(1) > a:nth-child(1)')
          .pause(1000)
    },
    'Checking repository page' : function (browser) {
        browser
          .waitForElementVisible('body', 1000)
          .assert.containsText('.public','buhijs/Nightwatch-test-sample')
          .assert.containsText('.author','buhijs')
          .assert.containsText('.public > strong:nth-child(4)','Nightwatch-test-sample')
          .assert.containsText('.text-gray-dark','Trying out Nightwatch')
          .end();
    }

};