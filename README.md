# test-fullstack-app
This app is about asking for a specific device and display its stock. Those datas will be shown in a chart where x-axis is a month-based timeline and y-axis is the amount of units in stock. A table will also be shown as a quick easy-readable summary. 

For a live demo, follow this [link](https://still-river-24824.herokuapp.com/)

To install this app on your local machine, open up your terminal and follow these steps:
```terminal
git clone https://github.com/SHANbic/fullstack-app-test.git test
cd test
npm install
cd client
npm install
cd ..
npm run dev
```

## If you're new to using a terminal, let's break down those commands.

- git clone \<param1\> \<param2\> will clone a github repository to your own computer. Thus you'll be able to edit files in your own code editor. \<param1\> must be a valid github repository link (eg: https://github.com/SHANbic/fullstack-app-test.git) and \<param2\> will be the name of the folder containing the repository. Note that \<param2\> is optionnal, the name of the folder will be the very same name of the repository, in this case fullstack-app-test.
- cd is used to change directory. cd test take you from the current directory you're in into the new directory you've just created. test in only the name I chose for this example, you can choose the name you want.
- npm install will look for the package.json file and install all the needed dependencies for the project. This will take only a few seconds to run.
- cd client will take you to the client folder. client is a folder I created to nest all the client-side part of my application.
- npm install. Wait, didn't we just do that one step earlier? That's right but we changed directory since. The first npm install was for the server-side of the app. With these two npm install, we're now ready to execute all of the code contained in the repository.
- cd .. will take you back in the parent directory. You're taken from client folder to its parent folder, which is the one you named as \<param2\> when cloning the repository (or test-fullstack-app if you didn't give any second parameter).
- npm run dev is a script written in the server-side package.json file. It will make both server and client start, just wait something like 3 seconds to see your browser opening up a new window with the app.
  
## I'll now be explaining how I crafted the app, starting with server side.
Let's focus on package.json and server.js files. I decided to make use of 3 dependencies, concurrently, express and nodemon. Let's say briefly that express is a back-end framework to quickly set up a server and handle routes, nodemon lets you run your server without having to restart it on every single change in the code, concurrently can run several scripts at once (in this case, it will run the server and the front-end app in a single command).

For the server.js file, you can notice that it is pretty straightforward. I only listen if a request comes in on port 5000 and I take the query parameter to check if it matches with my datas. They are being stored in a separate file(imported on line 4) to avoid having too much code in this one. 

## Let's now tackle the client-side of the application
One quick note about package.json, I only added chart.js and set up a proxy, so that I can just make request on '/' instead of writing 'http://localhost:5000/' every time a request should be sent to my back-end server.

Now the App.js file! Let's break it down into 3 parts, beginning obviously with the top part. After having imported the components that I'll present you in a few minutes, I initialize Home as a class-based component. Right after that, I set up a state with the keys I'll be manipulating with empty values.

Then I create a method called onHandleChange that will keep an eye on the Select component and update the state of the app according to the value selected. If the fetch request matches with the datas stored in my back-end server, I pass the datas to the state. If it doesn't, I empty all the values in the state.

Render method at last. I start with some ES6 destructuring feature to avoid having to call this.state.blablabla everytime I need a variable from the state object. I return a div tag containing all the app, starting with a main title (h1). The Select component comes next and will be always shown in the browser. I pass some props such as the onHandleChange method and a value corresponding to the type stored in the state.

If type is defined with any value, I show a p tag holding the id of the hardware (yes I decided to go along with video games consoles, but let's just call them hardware to stay focused on our current work).

Every next components will be shown if the condition mentionned 20 seconds ago is true, I'm talking about the type property of the state being defined. Table component will display the table with datas, such as the stock of a device and the related month. I pass two props here, the type and the history of its stock evolution.

Very same thing for Chart component, I pass the same props because both Table and Chart need them to display datas.

I then export the app so that the index.js can make use of it and render it to the DOM.

## Let's dive into the three components
You'll see that the three components are all functional ones. I decided not to use them as classes as I only needed to render simple JSX with some dynamic datas inside of them. The main goal was to avoid having multiple states and let the Home component be the only brain.

The first component being displayed is the Select component. It receives two props, renders a label matching a select tag, this latter holding multiple options with distinct values. Everytime you pick a new value, it triggers an onChange event and I catch it to pass the function onHandleChange sent as a prop. The magic here is that I execute the function stored in Home component, setting the state object with the new datas taken from the select value, and triggering an asynchronous request to the back-end server in order to fetch datas from it.

Having the state updated with some new pieces of information (values aren't empty anymore), it makes the conditionnal rendering true and both the Table and Chart pops onto the browser.

The Table component is responsible for displaying a table tag inside of which you'll find table cells holding the datas previously fetched. To display cells, I decided to map on the history array passed as a prop, and for each of the key inside of it, I render a new table row with two table cells reading the stock of the device and the related month.

Now comes the Chart component with a pretty similar role as the Table component. The only difference is in the way it displays the fetched datas. I made use of Chart.js to the component nice and efficient. I could describe every single pieces of configuration but I can feel that you're pretty tired of reading all this, so that I'll save you the hassle. Just know that I decided to pick colors out of a function that return colors based on the type of the device. I only have to fill fields with either the colors just returned, or the props received from the Home component to display the datas fetched from the server.

### Thanks for having gone through all this helper, makes me feel like I'm not wasting hours here when I could be creating some other awesome project! Okay, awesome is not the right word but hey, I'm glad anyway :)
