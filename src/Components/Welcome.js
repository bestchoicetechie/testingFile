import { useState } from "react";

const Welcome = () => {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = ()=>{
        setChangeText(true)
    }

  return (
    <div>
        <h2>Hello World</h2>
        {!changeText ? <p>Good to have you back</p> : (<p> Good to Text Was Changed</p>)}
        {/* {changeText ? <p>Text Was Changed</p> : ""} */}
        <button onClick={changeTextHandler}>Change Text</button>
    </div>
  )
}

export default Welcome;