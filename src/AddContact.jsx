import React from 'react'

const AddContact = () => {

    const [name, setName] = useState("");


  return (<>
    <div>AddContact</div>
    <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

    </>

  )
}

export default AddContact