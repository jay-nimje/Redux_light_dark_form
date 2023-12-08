import React, { useContext } from 'react'
import { AppContext } from '../Appcontext'
import './Style.css'


const Main = () => {

  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div>



      {/* <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <i onClick={toggleTheme} class="fa-solid fa-sun"></i>
    </div> */}
      <div className="container mt-5 w-50 rounded" style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
        <div className='i_tag '>
          {/* <button onClick={theme}><i class=" fa-solid fa-sun"></i></button> */}
          <i onClick={toggleTheme} class=" fa-solid fa-sun"></i>

        </div>
        <hr />
        <div className="container p-5">
          <h1 className="text-center text-primary">LOGIN </h1>
          <div className="container">
            <form name="myform" action onsubmit="return validation()">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Emali</label>
                <input type="email" className="form-control" name="email" placeholder ="Enter the email" />
                <div className="mt-3">
                  <h6 id="email_msg" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" placeholder ="Enter the Password" />
                <div className="mt-3">
                  <h6 id="password_msg" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary" name="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main