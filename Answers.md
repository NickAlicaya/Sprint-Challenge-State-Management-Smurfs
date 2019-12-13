1. What problem does the context API help solve?
Context Api allows us to share data between components without extensive prop drilling. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is the source of all information, the database kept in it is global and can be accessed by the components with minimal prop drilling if any if the component is provided the right hook/connection

Reducers are pure functions that takes in  a previous state and an action then determines the next state. It literally reduced 2 things into a single state. 

Actions are any happenings/events that changes the data.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global while component state is literally just that it resides in the component/local. Application state is ideal especially when dealing with an application with multiple components. Having a global state as a source of information like the store concept it redux makes large scale applications with multiple nested components more managable. Component state is alright to use especially if the information is only needed by that particular component or if there isn't much heavily nested components that you need to drill down to just to pass the data into.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a middleware that is almost like a gatekeeper of information. It allows us to use redux asynchroniously through action creators that return a function instead of an action object. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context Api and react hooks are easy to use especially with small applications. But I do understand that redux is a great tool that I will need in real world actually application. But for now I'm still not used to it.
