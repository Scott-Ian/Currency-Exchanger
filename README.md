# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Specifications

| | Behavior | Input | Output | isComplete |
|----|----|----|----|----|
|1.| The program should take in a base currency value and store it within a currency exchange object| $42 | $42 | _True_ |
|2.| The currency exchange object will accept a base value currency and store it within the currency exchange object| JPY | JPY | _True_ |
|3.| The currency exchange object will accept a second currency  to be converted to and store it within the currency exchange object| ISK | ISK | _True_ |
|4.| The program will be able to make an API call to the exchange rate API and utilize the user input American Dollars and foreign currency to return a converted currency value | $10 | 746.44 Indian Rupee | _True_ |
|5.| If the API call results in an error, the application will return a notification that states what the error is| $10 to Baskar Steele | Error 204: No Content | _True_ |

|6.| If the user attempts to convert a currency that the exchange API response doesn't include, the program will respond with an error saying that currency doesn't exist| $10 to Baskar Steele | Error: That currency doesn't exist | _False_ |

|7.| The user can only submit USD or EUR as a base currency, and others will not be permitted|  | Sample Output | _False_ |

|6.| Sample Behavior| Sample Input | Sample Output | _False_ |
|7.| Sample Behavior| Sample Input | Sample Output | _False_ |

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

https://choosealicense.com/
https://en.wikipedia.org/wiki/MIT_License
https://en.wikipedia.org/wiki/GNU_General_Public_License

Copyright (c) 2016 **_{List of contributors or company name}_**