import { useState, useEffect } from "react"

import Button from "./base/Button"
import SearchIcon from "../assets/icon-search.svg"
import ProfileAvatar from "../assets/images/Oval.png"
import LocationIcon from "../assets/icon-location.svg"
import WebsiteIcon from "../assets/icon-website.svg"
import TwitterIcon from "../assets/icon-twitter.svg"
import CompanyIcon from "../assets/icon-company.svg"

type userInfo = {
  avatar_url: string,
  name: string,
  bio: string,
  created_at: string,
  public_repos: number,
  followers: number,
  following: number,
  location: string,
  twitter_username: null | string,
  blog: string,
  company: string,
}

// type profileData = {
//   data: userInfo
// }
export default function Form() {
  const [user, setUser] = useState<object | null>({});

  console.log("The user data is: ", user);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("https://api.github.com/user");

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`)
        }

        const data: userInfo = await response.json();
        setUser(data);

      } catch (error) {
        console.log(`Could not find users with that name please try again ${error}`)
      }
    }
    fetchUserData();
  },[user])

  return (
    <>
    <form className="mb-10" action="#">
      <label htmlFor="search" className="relative flex justify-between items-center">
        <img className="absolute z-[100] w-[22px] h-[22px] mr-auto ml-3" src={SearchIcon} alt="Search Icon" />
        <input className="absolute w-full shrink-0 py-[24px] px-[50px] rounded-[15px] shadow-paleWhite" type="text" id="search" name="search" placeholder="Search GitHub username…" />
        <Button buttonText="search" style={{
          marginLeft: "auto",
          zIndex: "100",
          marginRight: "10px"
        }}
      />
      </label>
    </form>

    <div className="results bg-white grid grid-cols-3 gap-[2px] p-9 shadow-paleWhite">
      <div className="col-start-1 col-end-2 flex justify-center items-start">
        <img className="w-[117px] h-[117px]" src={ProfileAvatar} alt="Profile Avatar Image" />
      </div>

      <div className="profile-info col-start-2 col-span-3">
        <header className="flex justify-between items-center">
          <h1 className="heading-1">The Octocat</h1>
          <p className="paragraph-text">Joined 25 Jan 2011</p>
        </header>
        <h3 className="heading-3 mb-5">@octocat</h3>
        <p className="paragraph-text mb-8">This profile has no bio</p>
        <div className="stats-section">
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
          <div className="link-item mb-4">
            <img className="w-4 h-5 shrink-0" src={LocationIcon} alt="Google Map Icon" />
            <a className="paragraph-text ml-3" href="#">San Francisco</a>
          </div>
          <div className="link-item mb-4">
            <img className="w-4 h-5 shrink-0" src={TwitterIcon} alt="Twitter Icon" />
            <a className="paragraph-text ml-3" href="#">Not Available</a>
          </div>
          <div className="link-item mb-4">
            <img className="w-4 h-5 shrink-0" src={WebsiteIcon} alt="Website Icon" />
            <a className="paragraph-text ml-3" href="#">https://github.blog</a>
          </div>
          <div className="link-item mb-4">
            <img className="w-4 h-5 shrink-0" src={CompanyIcon} alt="Company Icon" />
            <a className="paragraph-text ml-3" href="#">@github</a>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
