Feature: Youtube search

  # Scenario: As a user, I can search video
  #   Given I navigate to "https://www.youtube.com/"
  #   And I accept all cookies
  #   When I input webdriverio to field input#search
  #   And I click search button
  #   Then I expect that element span.style-scope.ytd-playlist-renderer contain text webdriverio

Scenario: As a user, I can search products
    Given I navigate to "https://www.onliner.by/"
    When I add value "vacuum cleaner" to ".fast-search__input"
    And I wait for "3"
    And I switch to frame 1
    And I click ".result__item.result__item_product .product__title a.product__title-link" 1 element
    And I wait for "3"