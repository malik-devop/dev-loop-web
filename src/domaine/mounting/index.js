import React from "react"

function MountingComponent() {

    const componentWillUnMount = () => { 
        // it's mounted when the component (render) is not existing or when the component load
       console.log("MountingComponent will be unmounted")
    }
    componentWillUnMount();

    const componentWillMount = () => {
      // it's mounted before the component (render) is loaded

      console.log("MountingComponent will be mounted");
    }
    componentWillMount();

    const componentDidMount = () => {
      // it's mounted after the component (render) is loaded

      console.log("MountingComponent did mount");
    }
    componentDidMount();

    const componentDidUpdate = () => {
      // it's mounted when something (state) is updated in the component (render)

      console.log("MountingComponent did update");
    }
    componentDidUpdate();

    const componentWillUpdate = () => {
      // it's mounted before something (state) is updated in the component (render)

      console.log("MountingComponent will update");
    }
    componentWillUpdate();

  return (
    <div>
    <p>my mount component </p>
    </div>
  );
}

export default MountingComponent;
