import React from "react"

function HooksComponent() {
  const MyFunction = () => { 
    React.useEffect(() => {

      console.log("component did mount")

      return () => { 
        console.log("component will unmount")
      }

    }, [])
  }
  return (
    <div>
      <p>my hooks component </p>
      <button onCLick={MyFunction}> My button</button>
    </div>
  );
}

export default HooksComponent;
