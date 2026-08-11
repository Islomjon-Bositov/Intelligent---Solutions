import "./Banner.css"
import bannerImg from "../../assets/Group 1147.png"

const Banner = () => {
  return (
    <div className='banner'>
      <section className='banner_container'>
        <div className="trust_us">
          <p className='sub_title'>Professional IT products and services</p>
          <h2 className='banner_title'>Trust us and reduce your expenditures on business-processes </h2>
          <p className='banner_desc'>We implement IT systems and help to get an additional effect in production</p>
          <button>Discuss a project</button>
        </div>
        <img src={bannerImg} alt={bannerImg} />
      </section>
    </div>
  )
}

export default Banner