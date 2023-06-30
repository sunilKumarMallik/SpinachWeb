import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { doGet } from "../../api-services/axiosservice";
import MainLoader from "../common/Loader/main-loader";
import BankingExperience from "./components/banking-experience/banking-experience";
import Benefits from "./components/benefits/benifits";
import Faq from "./components/faq/faq";
import MainBanner from "./components/main-banner/main-banner";

const Home = () => {
  const { handleShow } = useOutletContext();
  // console.log("contextData", contextData);
  const [homePageData, setHomeData] = useState({});
  const [goalBasedData, setGoalBasedData] = useState({});
  const [testimonialData, setTestimonialData] = useState({});
  const [loading, setLoading] = useState(false);
  const [intelligentTextSelectedData, setIntelligentTextSelectedData] =
      useState({});
    useEffect(() => {
      getAboutData();
    }, []);
    const getAboutData = async () => {
      setLoading(true);
      try {
        let homeData = doGet("/home?populate=*");
        let goalBasedPlanningData = doGet("/goal-based-plannings?populate=*");
        let testimonialData = doGet("/testimonals?populate=*");
        let intelligent_text = doGet("/intelligent-dashboards?populate=*");
        let [
          homeDataSelected,
          goalBasedPlanningSelected,
          testimonialSelected,
          intelligentTextSelected,
        ] = await Promise.all([
          homeData,
          goalBasedPlanningData,
          testimonialData,
          intelligent_text,
        ]);
        setIntelligentTextSelectedData(intelligentTextSelected.data);
      // console.log(testimonialSelected.data.data, "testi");
        console.log("homeDataSelected",homeDataSelected.data.data.attributes);
        setHomeData(homeDataSelected.data.data.attributes);
        setGoalBasedData(
          goalBasedPlanningSelected.data.data.map((x) => {
            return x.attributes.text;
          })
        );
        setTestimonialData(testimonialSelected.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
console.log(homePageData)
if (loading) {
  return <MainLoader />;
}
  return (
    <>
      <MainBanner handleShow={handleShow} data={homePageData} />
      <Benefits
        handleShow={handleShow}
        data={homePageData}
        testimonials={testimonialData}
        intelligentTextData={intelligentTextSelectedData.data}
      ></Benefits>
      <BankingExperience
        handleShow={handleShow}
        data={homePageData}
        goalBasedData={goalBasedData}
      />
      <Faq handleShow={handleShow} data={homePageData}></Faq>
    </>
  );
};
export default Home;
