##RSpect Testing- 12/12/17

#### 3 parts of a Test:

1. Setup
   * ​
2. Action
3. Assertion/Expectation
   * Rule: 1 expectation per test

Let vs subject:

* ```let() do```
  * the let block sets up the main focus of a test
* ```subject() do```
  * the subject of the test

Instance_double:

* It's like a stunt double for a instances of a class
  * so that you when you call on a class, then it can respond to the same file withought needing you to add multuple keys or elements as new elements get added.

### Unit vs Integration Test

#### <u>Integration Tests:</u>

* Will test the Route, Controller, Model, and View all at once, this is essentially testing the path through the system.
* Tests the "happy" nad "unhappy" paths
* These tests are located in spec_features.rb, the features spec

#### <u>Unit Tests:</u>

* Test one functionality, something fine grain
  * You can test just you controller, just the model, just the view, or even a particular method
* There are units that you can test:
  * The units related to Setup
  * The units related to Action
  * The units related to Assertion

#### <u>Testing procedures, according to @ryry</u>:

* Write the integration tests first, keep users in mind and make sure they can do what they came to your app to do, and *then* you can go in and write your unit tests.

#### Namibia Torres
