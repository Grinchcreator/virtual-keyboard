# virtual-keyboard

1. Task:
  https://github.com/rolling-scopes-school/tasks/blob/master/tasks/virtual-keyboard/virtual-keyboard-en.md
2. App screenshot:
  ![image](https://user-images.githubusercontent.com/119819551/235909523-ebd6b18c-2a81-4e72-b21f-52a93ce2bd1e.png)
3. Deploy:  https://grinchcreator.github.io/virtual-keyboard/
   
4. Done / (deadline 02.05.23)
5. Maximum score for the task: 70/110

Minimal scope:

 the generation of DOM elements is implemented. body in the index.html is empty (can contain only script tag): +20/20
 pressing a key on a physical keyboard highlights the key on the virtual keyboard (you should check keystrokes of numbers, letters, punctuation marks, backspace, del (if it's present), enter, shift, alt, ctrl, tab, caps lock, space, arrow keys: +0/10
 
Basic scope:

 switching keyboard layouts between English and another language is implemented. Selected language should be saved and used on page reload. A keyboard shortcut for switching a language should be specified on the page: +7.5/15
 mouse clicks on buttons of the virtual keyboard or pressing buttons on a physical keyboard inputs characters to the input field (text area): +7.5/15
 
Extra scope:

 animation of pressing a key is implemented: +7.5/15
 
Technical requirements:

 usage of ES6+ features (classes, property destructuring, etc): +15/15
 usage of ESLint: +0/10
 requirements to the repository, commits and pull request are met: +8/10
Penalties:

 there're errors related to the executable code (errors like favicon.ico: Failed to load resource: the server responded with a status of 404 are not taken into account) or there're eslint-config-airbnb-base warnings: 0/-15
