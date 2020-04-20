import React from 'react'
export default function Header(props){
    // function increment(){
    //     const [counter,setCounter] = useState(0)
    //     setCounter(counter+1)
    // }
    return (
        //<div>
        <header>
          <h1>{props.children}</h1>
        </header>
        //<button onClick = {increment}>Incrementar</button>
        //</div>  
    );
}