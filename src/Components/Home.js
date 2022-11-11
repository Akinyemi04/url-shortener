import shortly from './images/logo.svg'
import image1 from './images/illustration-working.svg'
import Connector from './Connector'
import side1 from './images/icon-brand-recognition.svg'
import side2 from './images/icon-detailed-records.svg'
import side3 from './images/icon-fully-customizable.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useDispatch, useSelector } from 'react-redux'
import { fetching } from './store'
import { useEffect } from 'react'

const Home = () => {
  const display= useSelector((val)=>{
    return val.Data.display
  })
  const dispatch = useDispatch()
  useEffect(()=>{
    if(window.screen.width > '550'){
      dispatch(fetching.changeDisplay('flex'))
    }
    else{
      dispatch(fetching.changeDisplay('none'))
    }
  },[dispatch])
  
  function Show(){
    if(display ==='flex'){
      dispatch(fetching.changeDisplay('none'))
    }else if(display ==='none'){
      dispatch(fetching.changeDisplay('flex'))
    }
  }
  return (
    <>
      <div className='home'>
          <header>
                <img src={shortly} alt="" />
                <span onClick={Show} className='option'><DensityMediumIcon/></span>
            <div style={{display:display}} className='semi_header'>
                <section>
                    <span>Features</span>
                    <span>Pricing</span>
                    <span>Resources</span>
                </section>
                <hr />
                <div className='aside'>
                    <p>Login</p>
                    <p className='button'>Sign Up</p>
                </div>
            </div>
          </header>
          <main>
            <aside>
              <h1>More Than Just Shorter Links</h1>
              <p> Build Your Brand's recognition and get detailed insight on how your links are performing.</p>
              <button>Get Started</button>
            </aside>
            <img src={image1} alt="" />
          </main>
      </div>
      <section className='s_page'>
        <Connector/>
        <h2>Advanced Statictics</h2>
        <center><p>Track how your links are performing across the web with our advanced statistic dashboard</p></center>
        <div className='flexer'>
          <aside className='one'>
            <div className='div'><img src={side1} alt="" /></div>
            <h2>Brand Recognition</h2>
            <p> Boost your brand with each click.Generic links don't mean a thing.branded links help instill confidence in your content</p>
            <hr />
          </aside>
          <aside className='two'>
            <div className='div '><img src={side2} alt="" /></div>
            <h2>Detailed Records</h2>
            <p>Gain insights into who is clicking  your links.Knowing when and where people engage  with your content helps inform better decisions</p>
            <hr />
          </aside>
          <aside className='three'>
            <div className='div '><img src={side3} alt="" /></div>
            <h2>Fully Customizable</h2>
            <p>Improve brand awareness and content discoverability through customizale links, supercharging audience engagement</p>
          </aside>
        </div>
      </section>
      <div className='pre_footer'>
          <h4>Boost your links today</h4>
          <button>Get Started</button>
      </div>
      <footer>
        <img src={shortly} alt="" />
        <ul>
            <li className='main_text'>Features</li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
        </ul>
        <ul>
          <li className='main_text'>Resources</li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul>
          <li className='main_text'>Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contacts</li>
        </ul>
        <div className='diver'>
            <FacebookIcon/>
            <TwitterIcon/>
            <PinterestIcon/>
             <InstagramIcon/>       
        </div>
      </footer>
    </>
  )
}

export default Home;