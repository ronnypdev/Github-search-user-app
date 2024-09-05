import Button from "./base/Button"
import SearchIcon from "../assets/icon-search.svg"
import ProfileAvatar from "../assets/images/Oval.png"

export default function Form() {
  return (
    <>
    <form action="#">
      <label htmlFor="search">
        <img src={SearchIcon} alt="Search Icon" />
        <input type="text" id="search" name="search" placeholder="Search GitHub username…" />
        <Button buttonText="search"/>
      </label>
    </form>

    <div className="results">
      <div>
        <img src={ProfileAvatar} alt="Profile Avatar Image" />
      </div>

      <div className="profile-info">
        <header></header>
      </div>
    </div>

    </>
  )
}
