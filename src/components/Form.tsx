import { useState } from "react"
import Button from "./base/Button"
import SearchIcon from "../assets/icon-search.svg"
import LocationIcon from "../assets/icon-location.svg"
import WebsiteIcon from "../assets/icon-website.svg"
import TwitterIcon from "../assets/icon-twitter.svg"
import CompanyIcon from "../assets/icon-company.svg"

interface userInfo {
  avatar_url: string;
  name: string;
  bio: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  twitter_username: null | string;
  blog: string;
  company: string;
  login: string;
}

export default function Form() {
  const [userData, setUserData] = useState<userInfo | null>(null);
  const [userNameInput, setUserNameInput] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(true);

  function searchUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserNameInput(event.target.value);
  }

  async function fetchUserData() {
    try {
      const response = await fetch(`https://api.github.com/users/${userNameInput}`);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const result: userInfo = await response.json();
      setUserData(result);

    } catch (error) {
      console.log(`Could not find users with that name please try again ${error}`)
    }
  }


  function submitUserName(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetchUserData();
  }

  return (
    <>
    <form className="mb-10" onSubmit={submitUserName}>
      <label htmlFor="search" className="relative flex justify-between items-center">
        <img className="absolute z-[100] w-[22px] h-[22px] mr-auto ml-3" src={SearchIcon} alt="Search Icon" />
        <input className="absolute w-full shrink-0 py-[24px] px-[50px] rounded-[15px] shadow-paleWhite" id="search" type="text" value={userNameInput} name="search" placeholder="Search GitHub username…" onChange={searchUserName} />
        <Button buttonText="search" eventType="submit" style={{
          marginLeft: "auto",
          zIndex: "100",
          marginRight: "10px"
        }}
      />
      </label>
    </form>

    {userData &&
      <div className="results bg-white grid grid-cols-3 gap-[2px] p-9 shadow-paleWhite">
        <div className="col-start-1 col-end-2 flex justify-center items-start">
          <img className="w-[117px] h-[117px] rounded-full" src={userData.avatar_url} alt="Profile Avatar Image" />
        </div>

        <div className="profile-info col-start-2 col-span-3">
          <header className="flex justify-between items-center">
            <h1 className="heading-1">{userData.login}</h1>
            <p className="paragraph-text">Joined {userData.created_at}</p>
          </header>
          <h3 className="heading-3 mb-5">@{userData.login}</h3>
          <p className="paragraph-text mb-8">{userData.bio}</p>
          <div className="stats-section">
            <div>
              <h4 className="heading-4">Repos</h4>
              <h2 className="heading-2">{userData.public_repos}</h2>
            </div>
            <div>
              <h4 className="heading-4">Followers</h4>
              <h2 className="heading-2">{userData.followers}</h2>
            </div>
            <div>
              <h4 className="heading-4">Following</h4>
              <h2 className="heading-2">{userData.following}</h2>
            </div>
          </div>
          <div className="links">
            <div className="link-item mb-4">
              <img className="w-4 h-5 shrink-0" src={LocationIcon} alt="Google Map Icon" />
              {userData.location ? <a className="paragraph-text ml-3" href={userData.location}>{userData.location}</a> : <p className="paragraph-text ml-2">None</p>}
            </div>
            <div className="link-item mb-4">
              <img className="w-4 h-5 shrink-0" src={TwitterIcon} alt="Twitter Icon" />
              {userData.twitter_username ? <a className="paragraph-text ml-3" href={userData.twitter_username}>{userData.twitter_username}</a> : <p className="paragraph-text ml-2">None</p>}
            </div>
            <div className="link-item mb-4">
              <img className="w-4 h-5 shrink-0" src={WebsiteIcon} alt="Website Icon" />
              {userData.blog ? <a className="paragraph-text ml-3" href={userData.blog}>{userData.blog}</a> : <p className="paragraph-text ml-2">None</p>}
            </div>
            <div className="link-item mb-4">
              <img className="w-4 h-5 shrink-0" src={CompanyIcon} alt="Company Icon" />
              {userData.company ? <a className="paragraph-text ml-3" href={userData.company}>{userData.company}</a> : <p className="paragraph-text ml-2">None</p>}
            </div>
          </div>
        </div>
      </div>
    }

    </>
  )
}
