import Button from "./Button"

const FormAddFriend = ({ onSubmit, formData, setFormData }) => {
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  return (
    <form className="form-add-friend" onSubmit={onSubmit}>
        <label htmlFor="">🧑‍🤝‍🧑 Friend Name</label>
         <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />

        <label htmlFor="">🌄 Image URL</label>
        <input type="text" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} />

        <Button>Add</Button>
    </form>
  )
}

export default FormAddFriend