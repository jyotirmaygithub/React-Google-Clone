# <<-------------learning throughout the project--------------->>

# extracting different key -- os:{something}
it can be tough to extract a key which is not in simple format of a name (if that key in os:image : "image url" then method can be different)
["os:(name of the type of thing)"] basically you need to a pass it as a string into a array

# infinte scroll
to have infinte scroll information in your page try 
# npm install react-infinite-scroll-component
  <InfiniteScroll
        className="universal big-box-add"
        dataLength={newdata.length}
        next={fetchmoredata}
        hasMore={true}
        loader={<Spinner />}
        scrollThreshold={0.9}
      >
 this code will be the base of using  infinte scroll on your application     

# if(), true and false *****
In JavaScript, values are considered truthy or falsy based on their boolean interpretation. While the value 42 itself is not the boolean true, it is considered a truthy value because it is not one of the "falsy" values in JavaScript. In JavaScript, values like 42, non-empty strings, objects, functions, and more are all considered truthy. Conversely, "falsy" values include 0, null, undefined, false, empty strings, and so on.

 # debounce