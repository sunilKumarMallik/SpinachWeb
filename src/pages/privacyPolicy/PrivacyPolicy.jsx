import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { doGet } from '../../api-services/axiosservice';
import clayfin from "../../assets/images/clayfin.svg";
import MainLoader from '../common/Loader/main-loader';
import parse from "html-react-parser";


function PrivacyPolicy() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [privacy, setPrivacy] = useState([]);
  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
    getAboutData();
  }, [pathname]);

  const getAboutData = async () => {
    setLoading(true);
    try {
      let privacyData = doGet("/privacy-policies?populate=*");
    
      let [privacyDataSelected] = await Promise.all([privacyData]);

      setPrivacy(privacyDataSelected.data.data)
   

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  console.log("privacy",privacy)
  // console.log("privacyTitle",privacy[0].attributes.title)
  // console.log("privacyDesc",privacy[0].attributes.description)
  console.log("privacyDesc",privacy[6]&&privacy[6].attributes&&privacy[6].attributes.description.split("</br>")[0])

  let privacyTitlefirst = privacy[0]&&privacy[0].attributes&&privacy[0].attributes.title;
  let privacyDescfirst = privacy[0]&&privacy[0].attributes&&privacy[0].attributes.description;
  let privacyTitlesecond = privacy[1]&&privacy[1].attributes&&privacy[1].attributes.title;
  let privacyDescsecond = privacy[1]&&privacy[1].attributes&&privacy[1].attributes.description;
  let privacyTitlethird = privacy[2]&&privacy[2].attributes&&privacy[2].attributes.title;
  let privacyDescthird = privacy[2]&&privacy[2].attributes&&privacy[2].attributes.description;
  let privacyTitlefourth = privacy[3]&&privacy[3].attributes&&privacy[3].attributes.title;
  let privacyDescfourth = privacy[3]&&privacy[3].attributes&&privacy[3].attributes.description;
  let privacyTitlefifth = privacy[4]&&privacy[4].attributes&&privacy[4].attributes.title;
  let privacyDescfifth = privacy[4]&&privacy[4].attributes&&privacy[4].attributes.description;
  let privacyTitlesix = privacy[5]&&privacy[5].attributes&&privacy[5].attributes.title;
  let privacyDescsix = privacy[5]&&privacy[5].attributes&&privacy[5].attributes.description;
  let privacyTitleseven = privacy[6]&&privacy[6].attributes&&privacy[6].attributes.title;
  let privacyDescseven = privacy[6]&&privacy[6].attributes&&privacy[6].attributes.description;
  if (loading) {
    return <MainLoader />;
  }
else{

  return (
    <div>
    <main id="privacy-policy">
    <article>
      <section id="inner-banner-sec">
        <div className="banner-box">
          <div className="container">
            <div className="content-box">
              <div className="sec-title">
                <h1>{privacyTitlefirst ? privacyTitlefirst :""}
                </h1>
              </div>
              <p> {parse(`${privacyDescfirst ? privacyDescfirst  : ""}`)}</p>
            </div>
          </div>
        </div>
   
      </section>

      <section id="main-content">
        <div className="container">
          <div className="content-box">
            <h3 className='text-start'>{privacyTitlesecond}</h3>
            <p className='text-start'> {parse(`${privacyDescsecond}`)}</p>
          </div>
          <div className="content-box bg-light-sec">
            <h3 className='text-start'>{privacyTitlethird}</h3>
            <p  className='text-start'>{parse(`${privacyDescthird}`)}</p>
          </div>
          <div className="content-box">
            <h3 className='text-start'>{privacyTitlefourth}</h3>
            <p className='text-start'>{parse(`${privacyDescfourth}`)}</p>
          </div>
          <div className="content-box bg-light-sec">
            <h3 className='text-start'>{privacyTitlefifth}</h3>
            <p className='text-start'>{parse(`${privacyDescfifth}`)}</p>
          </div>
          <div className="content-box">
            <h3 className='text-start'>{privacyTitlesix}</h3>
            <p className='text-start'>{parse(`${privacyDescsix}`)}</p>
          </div>
          <div className="content-box">
            <h3 className='text-start'>{privacyTitleseven}</h3>
            <p className='text-start'>{parse(`${privacyDescseven}`)} </p>
            <p className='text-start'><a href="mailto:marketing@clayfin.com.">marketing@clayfin.com.</a></p>
          </div>
        </div>
      </section>
      <section id="new-age-bank" className="pt-0 ptb_50" style={{backgroundColor: "transparent"}}>
        <div className="container">
          <div className="sec-title">
            <h4>Made for New <br/> Age Banks</h4>
          </div>
          <p className="text-center mt-4">
            Made with <img src="../images/clayfin.svg" className="heart" alt="" /> by 
            <Link
              to="https://www.clayfin.com/"
              target="_blank"
              style={{ color: "gray", marginLeft:'5px' }}
            >
              Clayfin
            </Link>
          </p>
        </div>
      </section>


    </article>
  </main>
    </div>
  )
}
}

export default PrivacyPolicy