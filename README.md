# <---learning --->

# extracting different key -- os:{something}
it can be tough to extract a key which is not in simple format of a name (if that key in os:image : "image url" then method can be different)
["os:(name of the type of thing)"] basically you need to a pass it as a string into a array

# infinte scroll
to have infinte scroll information in your page try 
command -- npm install react-infinite-scroll-component
  <InfiniteScroll
        className
        dataLength
        next
        hasMore
        loader
        scrollThreshold
      >
 this code will be the base of using  infinte scroll on your application     

# if(), true and false *****
In JavaScript, values are considered truthy or falsy based on their boolean interpretation. While the value 42 itself is not the boolean true, it is considered a truthy value because it is not one of the "falsy" values in JavaScript. In JavaScript, values like 42, non-empty strings, objects, functions, and more are all considered truthy. Conversely, "falsy" values include 0, null, undefined, false, empty strings, and so on.

#  what is usecontext
usecontext is a kind of a container, which we use to store data of any kind. which can be accessable anywhere in the application. we can achieve this functionality by using state concept of the react. 

# create context 
The createContext function is a built-in utility provided by React that allows you to create a new context. A context in React is a way to share data between components without explicitly passing props through each level of the component tree. It provides a mechanism for components to access certain values, such as state or functions, without needing to pass them down as props.

 code and explain

 import { createContext, useContext, useState } from "react";
const SearchThing = createContext();

 export function SearchThing2({ children }) {
    const [searchinput, setsearchinput] = useState('');

    return (
        <SearchThing.Provider value={{ searchinput, setsearchinput }}>
            {children}
        </SearchThing.Provider>
    );
}
 const SearchThing = createContext();

 SearchThing is a context which we created by using createcontext() function of the react. searchThing will be use to store shareable data and to be accessable for different components in the component tree , without using props drilling.

 functional component

SearchThing2 is functional component is made to provide access to the context which has data storing capabilty (in different forms like states)

 provider

provider is useful in providing storing data capabilty to the context


question : f i am wrapping components inside the searchinputfun components suppose, wrapped component have too many sub components then that data will be accessable to those sub components also.

Yes, when you wrap components inside the Searchinputfun component, the data provided by the context created by Searchinputfun will be accessible not only to the direct children but also to all descendant components, including sub-components. This is one of the powerful features of React's context system – it provides a way to share data throughout a component tree, no matter how deeply nested the components are