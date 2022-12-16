import './App.css';
import { useState } from "react"
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom"
import { getUser } from "./utilities/users-service"

function App() {
  const [user, setUser] = useState(getUser()) 


  return (
    <main className='App'>
      {
        user ? //if user is logged in go to New Order Page otherwise go to Auth Page
          <>
            <NavBar name= { user.name } setUser={setUser}/>
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;

/*
IMPORTANT: Inspecting the elements on the page will reveal that indeed an <a>element is being emitted to the DOM when we use a <Link>component. 
However, although they look like ordinary <a>elements, React intercepts their click event thus preventing an HTTP request from being sent. 
However, if you accidentally use an <a>tag, React will not intercept the click event and a page reload will occur 😞



In a MERN-Stack app there's bound to be application/business logic, AJAX/API requests, etc.

Although it would be possible to code this logic directly within components, there are downsides of doing so:

Poor code organization. As you know, it's better to modularize related code into separate modules, e.g., the config/database.jsmodule. 
    Organizing code into modules makes it easier to build an application because you'll more or less know where new code will go. 
    It's also easier to refactor and debug when code is organized into focused modules.
Smaller, more readable components. Reading a line of code like const user = await signUp(formData);in a component is far better than having read through all of the code included in the signUp()"service" function.
Not DRY and violates the "separation of concerns" principle. 
    For example, if we wanted to fetch the same data from more than one component, we'd be repeating ourselves. 
    Service and API modules can often be used in multiple projects.


Utilities, Services, APIs, oh my...
Some common ways to organize code into modules are:

Utility modules: Modules that hold general purpose functions, for example, a formatTime(seconds)function. 
    These modules are reusable in multiple projects.
Service modules: Service modules are where we can organize application specific logic such as functions for signing-up or logging in a user. 
    Service modules often use and depend upon API modules...
API modules: API modules are for abstracting logic that make network requests such as AJAX calls to the backend or third-party APIs. 
    This abstraction makes it easier to refactor code to use different techniques, libraries, etc. 
    For example, we are going to be using fetchfor our AJAX communications, however, refactoring to use a library such as Axios would be made easy thanks to the use of API modules.

*/


