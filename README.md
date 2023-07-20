# Noa Technologies | Interview for frontend engineers (React.ts)
This is a brief evaluation task Noa Technologies uses while interviewing applicants for frontend engineering positions.

## The task
Modify the existing app to match the following criteria.
* When the map loads, bound it so that the center is between the two markers.
* Async data is loaded using promise callback functions. Reformat code using proper async await syntax.
* DataContext provider could introduce memory leaks. Cleanup the effect properly.
* Add a welcome page containing a start button. When the start button is clicked
  * app navigates to the map
  * app data should be not be loaded (no ip info fetch and no location subscription) until past the welcome page
  * when Noa logo is clicked, the app navigates back to the welcome page. All data should be unloaded, ready to be loaded again if the start button is clicked.

## Instructions
* Share your entire screen so we can see what you are consulting while doing the exercise
* You can search the web for any hint/solution, no limits. Actually, pls don't use AI to write code ;)
* If you are stuck on something, move to the next task

## Estimated time for completion
~30 minutes.

## Submission
Fork the repo, create a PR and ask a review.
