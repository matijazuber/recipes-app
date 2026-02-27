import icon from "../assets/chef-icon.svg"

function Header() {
  return (
    <>
      <header>
        <div className="divHeader">
          <img className="chefIcon" src={icon} alt="Chef Icon"></img>
          <p className="paragraphHeader">Chef Claude</p>
          </div>
      </header>
    </>
  )
}


export default Header
