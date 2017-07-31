import React, { component } from "react"

class MyClass extends component {
    constructor(props){
        super(props);
        console.log(this);
    }
    render(){
        return(
            <div></div>
        )
    }
}

export default MyClass;