module.exports = {
    beforeEach: browser => {
        browser.url('https://www.yoodlize.com/')
    },
    after: browser => {
        browser.end()
    },
    'Clicking Recreational Vehicles "see more" button and verifying button says "category..."': browser => {
        browser
            .click('.sc-bdVaJa:nth-child(1) > .sc-jqCOkK:nth-child(1) .sc-jqCOkK') 
            .expect.element('.sc-jKVCRD').text.to.contain('category: Recreational Vehicles')
         
    },
    'Clicking Tool button verify button next page says Category Tools': browser => {
        browser
             .click('.sc-esjQYD:nth-child(1) .f-1')
             .expect.element('.sc-jKVCRD').text.to.contain('category: Tools')        
    },
    'Outdoor gear click see more test"': browser => {
        browser
             .click('.sc-jqCOkK:nth-child(5) .sc-jqCOkK')
             .expect.element('.sc-jKVCRD').text.to.contain('category: Outdoor Gear')
    },
    'Electronics click see more test--why showing not present error?': browser => {
        browser
              .click('.sc-jqCOkK:nth-child(8) .sc-jqCOkK')
              .expect.element('.sc-jKVCRD').text.to.not.contain('Outdoor gear')
    },
    'Party/wedding click see more test': browser => {
        browser
            .click('.sc-jqCOkK:nth-child(5)  .sc-jqCOkK')
            .expect.element('.sc-jKVCRD').to.be.visible
    },
    'Tools click see more test': browser => {
        browser
            .click('.sc-jqCOkK:nth-child(5)  .sc-jqCOkK')
            .expect.element('.sc-jKVCRD').to.be.present
    },
    'Clothes click see more test': browser => {
        browser
            .click('.sc-jqCOkK:nth-child(7)  .sc-jqCOkK')
            .expect.element('.sc-jqCOkK:nth-child(5)').to.not.be.present;
    },
    'Home/Kitchen click see more test': browser => {
        browser
            .click('.sc-jqCOkK:nth-child(10)  .sc-jqCOkK')
            .verify.containsText('.sc-jKVCRD', 'category: Home and Kitchen')
    },
     'Toys click see more test': browser => {
         browser
             .click('.sc-bdVaJa:nth-child(10) > .sc-jqCOkK:nth-child(1) .sc-jqCOkK')
             .verify.containsText('.sc-jKVCRD', 'category: Toys and Games')
    },
    'Outdoor gear button see more test': browser => {
            browser
                    .click('.fa-campground')
                    .expect.element('.sc-jKVCRD').text.to.contain('category: Outdoor Gear')
    },
     'Electronics button see more test': browser => {
        browser
            .click('.fa-camera-alt')
            .expect.element('.sc-jKVCRD').to.be.visible
     },
     'Party button see more test': browser => {
        browser
            .click('.fa-birthday-cake')
            .expect.element('.sc-jqCOkK:nth-child(5)').to.not.be.present;
   },
    'Clothing button see more test': browser => {
        browser
            .click('.sc-esjQYD:nth-child(7) .sc-jqCOkK')
            .expect.element('.sc-jKVCRD').to.be.visible
    }


}