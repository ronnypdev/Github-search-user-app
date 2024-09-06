import Button from "./base/Button"
import SearchIcon from "../assets/icon-search.svg"
import ProfileAvatar from "../assets/images/Oval.png"
import LocationIcon from "../assets/icon-location.svg"
import WebsiteIcon from "../assets/icon-website.svg"
import TwitterIcon from "../assets/icon-twitter.svg"
import CompanyIcon from "../assets/icon-company.svg"

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
        <header>
          <h1 className="heading-1">The Octocat</h1>
          <p>Joined 25 Jan 2011</p>
        </header>
        <h3 className="heading-3">@octocat</h3>
        <p>This profile has no bio</p>
        <div className="stats">
          <div>
            <h4 className="heading-4">Repos</h4>
            <h2 className="heading-2">8</h2>
          </div>
          <div>
            <h4 className="heading-4">Followers</h4>
            <h2 className="heading-2">3938</h2>
          </div>
          <div>
            <h4 className="heading-4">Following</h4>
            <h2 className="heading-2">9</h2>
          </div>
        </div>
        <div className="links">
          <div>
            <img src={LocationIcon} alt="Google Map Icon" />
            <p>San Francisco</p>
          </div>
          <div>
            <img src={WebsiteIcon} alt="Website Icon" />
            <p>https://github.blog</p>
          </div>
          <div>
            <img src={TwitterIcon} alt="Twitter Icon" />
            <p>Not Available</p>
          </div>
          <div>
            <img src={CompanyIcon} alt="Company Icon" />
            <p>@github</p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
