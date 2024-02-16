import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="form-container">
          <img src="" alt="logo" />
          <h4>paste invitation id</h4>
          <div className="inputGrp">
            <input placeholder='room id' type='text' className="inputBox"/>
            <input placeholder='userName' type='text' className="inputBox"/>
            <button className='btn'>Join</button> 
            <span>If you dont have an invite then create an invite link</span>
            <a href="" className='createNewBtn'>
              new room
            </a>
          </div>
        </div>
      </div>

      <footer>
        <h4>Built with Love By Ajay Panaskar</h4>
      </footer>
    </div>
  )
}

export default Home