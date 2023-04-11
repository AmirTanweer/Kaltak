import React from 'react'
import{
    Link
} from "react-router-dom"
export default function NavBar(props) {
  
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.nvcolor} bg-${props.nvcolor}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">KalTak</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/world">World</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/nation">Nation</Link>
        </li>
      </ul>
        
      <div  className="form-check form-switch mx-3">
  <input  className="form-check-input" onClick={props.handleToggle}  type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.nvcolor==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Enable {props.nvcolor==="light"?"dark":"light"} Mode</label>
</div>
<form className="d-flex" role="search">
        <input  className="form-control me-2" type="search" name='srch'  onChange={props.handleOnChange} value={props.text}  placeholder="Search" aria-label="Search"/>
          </form>
    </div>
  </div>
</nav>
    </div>
  )
}
