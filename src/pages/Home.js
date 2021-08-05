import React, { useState } from 'react';

function Home(props) {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState(null)
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const newForm = { ...formData };
    newForm[e.target.name] = e.target.value;
    setFormData(newForm);

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('password do not match');
    } else {
      setError(null)
      fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'success') {

            props.history.push('/users');
          } else {
            setError('user not register and also try with new username')
          }
        });
    }
  };
  const handleFile = (e) => {
    const file = e.target.files[0]
    const imageFormData = new FormData();
    imageFormData.append("profileImage", file, file.name)
    setImage(URL.createObjectURL(file))
    fetch("http://localhost:5000/api/image/upload", {
      method: 'POST',
      body: imageFormData
    }).then(res => res.json())
      .then(res => {
        setFormData({ ...formData, ProfileImage: res.data._id })
      })
  }

  return (
    <>
      <div className='text-center mt-5 text-2xl '>FILL USER FORM</div>

      <div className=' px-10 py-10 mt-2 mb-1 bg-gray-100 space-y-3 rounded-md max-w-md mx-auto  text-center'>

        <div className=" justify-center content-center space-y-1">

          {image && <img className="h-28 w-32 mx-auto" src={image} alt={image} />}
          <input type="file" name="profileImage" onChange={handleFile} />
        </div>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <div className=' bg-green-300  h-14'>
            <label className=' -ml-14'>Name</label>
            <input
              className=' rounded-sm border-2 m-2 ml-5 outline-none'
              placeholder='name'
              type='name'
              name='name'
              required
            />
          </div>
          <div className='bg-green-300 h-14'>
            <label className='-ml-10'>UserName</label>
            <input
              className=' rounded-sm border-2 m-2 outline-none'
              placeholder='username'
              type='username'
              name='userName'
              required
            />
          </div>
          <div className='bg-green-300 h-14'>
            <label className=' -ml-12'>Password</label>
            <input
              className=' rounded-sm border-2 m-2 outline-none'
              placeholder='password'
              type='password'
              name='password'
              required
            />
          </div>

          <div className='bg-green-300 h-14'>
            <label className=' ml-2'>ConfirmPassword</label>
            <input
              className=' rounded-sm border-2 m-2 outline-none'
              placeholder='confirmpassword'
              type='Password'
              name='confirmPassword'
              required
            />
          </div>
          <div className='bg-green-300 h-14'>
            <label className=' -ml-11'>Zip Code</label>
            <input
              className=' rounded-sm border-2 m-2 outline-none'
              placeholder='number'
              type='number'
              name='zipCode'
              required
            />
          </div>
          {error}
          <div>
            <button className='h-9 w-20 mt-7 bg-green-300' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
