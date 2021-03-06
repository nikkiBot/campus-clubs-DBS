import React from 'react'
import Header_ch from '../components/Header_ch';
import SignOut from '../components/SignOut';


const chNewPost = () => {
  return (
    <div>
      <div>
        <div>
          <Header_ch />
        </div>
        <div>
          <SignOut/>
        </div>
      </div>

      <div>
        <input class="form-control form-control-lg" type="text" placeholder="Title of the Post" aria-label=".form-control-lg example"/>
        <input class="form-control" type="text" placeholder="Body(Description)" aria-label="default input example"/>
        <input class="form-control form-control-sm" type="url" placeholder="Media Link" aria-label=".form-control-sm example"/>
        <label for="customRange2" class="form-label">Set Urgency </label>
        <input type="range" class="form-range" min="0" max="10" id="customRange2"/>
        <button className="btn btn-Sucess">Create</button>
      </div>
    </div>
  )
}

export default chNewPost;