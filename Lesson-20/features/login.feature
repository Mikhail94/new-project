Feature: Youtybe search

  Scenario: As a user, I can search video
    Given I navigate to website
    And I accept all cookies 
    When I input "webdriverio" to search field
    And I click search button
    Then I expect that second link contains text "webdriverio"

