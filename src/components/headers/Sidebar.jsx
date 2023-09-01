import { arrow, cube, heart, random, logo, setting } from "../../assets"

const Sidebar = () => {
  return (
    <section>
      <header>
        <img src={logo} alt="" />
        <h3>ByGeek</h3>

        <button type="button">
          <img src={arrow} alt="" />
        </button>
      </header>
      <nav>
        <button type="button">
          <img src={heart} alt="Favoris" />
          <p>Favoris</p>
        </button>

        <button type="button">
          <img src={random} alt="Random" />
          <p>Random</p>
        </button>
        <button type="button">
          <img src={cube} alt="All Articles" />
          <p>All Articles</p>
        </button>

        <div>
          {/* <img src={search} alt="search" /> */}
          <input
            type="search"
            name="search"
            id="search"
            placeholder="🔍 Search instances"
          />
        </div>
      </nav>
      <img src={setting} alt="" />
      <h3>userName</h3>
      <button type="button">Sign Up</button>
      <button type="button">Login</button>
    </section>
  )
}
export default Sidebar
