import React, { useEffect, useState } from "react";
import { doGet } from "../../../api-services/axiosservice";
import { Link, useLocation, useParams } from "react-router-dom";
import clayfin from "../../../assets/images/clayfin.svg";
import Zigzagbg from "../../home/components/zigzag/Zigzagbg";
import parse from "html-react-parser";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReactMarkdown from "react-markdown";
import { imageBaseUrl } from "../../../api-services/config";
import MainLoader from "../../common/Loader/main-loader";
import "./single-blog.css";
export default function SingleBlog() {
  // const [blogData, setBlogData] = useState({});
  const [singleBlog, setSingleBlogData] = useState({});
  const [allCategory, setAllCategory] = useState("");
  // const [allCategories, setAllCategories] = useState([]);
  const [allBlogs, setBlogs] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBlogData();
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);
  let params = useParams();
  let id = params.blogId;
  let category = params.category
  const getBlogData = async () => {
    setLoading(true);
    try {
      // let selectedBlog = doGet(`/articles`);
      let selectedSingleBlog = doGet(`/blogs/${id}?populate=*`);
      // let allCategoriesData = doGet("/categories");
      let allBlogs = doGet("/blogs?populate=*");
      let [singleBlogData, allBlogsData] = await Promise.all([
        selectedSingleBlog,
        allBlogs,
      ]);
      if (allBlogsData.data.data.length > 0) {
        setBlogs(allBlogsData.data.data);
        setAllCategory(
          allBlogsData.data.data.map((x) => {
            return x.attributes.Category;
          })
        );
      }
      console.log("allBlogsData", allBlogsData);
      // console.log("singleBlogData", singleBlogData.data);
      // console.log("allblogs", singleBlogData.data);
      // setBlogData(blog.data.data);
      setSingleBlogData(singleBlogData.data);
      // setAllCategories(categories.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };
  const blogSingle = (blogId) => {
    console.log("TheBlogId", blogId);
    navigate(`/blog-content/${blogId}`);
  };

  let filterBlogs = allBlogs;
  if (searchCategory) {
    filterBlogs = allBlogs.filter((blog) => {
      return blog.attributes.Category == searchCategory;
    });
  } else if (searchText) {
    filterBlogs = allBlogs.filter((blog) => {
      return (
        blog.attributes.Title.indexOf(searchText) > -1 ||
        blog.attributes.Description.indexOf(searchText) > -1
      );
    });
  } else if (searchCategory && searchText) {
    return allBlogs.filter((blog) => {
      blog.attributes.Title.indexOf(searchText) > -1 ||
        (blog.attributes.Description.indexOf(searchText) > -1 &&
          blog.attributes.Category == searchCategory);
    });
  }
  // console.log("blogData",blogData)
  // console.log("singleBlog", singleBlog.data.attributes);
  console.log("allBlogs", allBlogs);

  const isoDate = singleBlog.data && singleBlog.data.attributes.publishedAt;
  const dateObj = new Date(isoDate);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);
  const handleClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this cool article!",
          url: `${imageBaseUrl}/blog-content/${id}/${category}`,
        });
        console.log('Content shared successfully!');
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    } else {
      console.log('Web Share API not supported on this device');
    }

  };
  if (loading) {
    return <MainLoader />;
  }
  return (
    <main id="blog-content-sec">
      <article>
        <section id="inner-banner-sec">
          <div className="banner-box">
            <div className="container-fluid">
              <div className="content-box col-lg-9 mx-auto d-block">
                <div className="row mx-auto  carousel-box">
                  <div className="col-sm-11 col-12 m-0 p-0">
                    <div
                      id="carouselExampleControls"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {singleBlog &&
                          singleBlog.data &&
                          singleBlog.data.attributes &&
                          singleBlog.data.attributes.Images && singleBlog.data.attributes.Images.data &&
                          singleBlog.data.attributes.Images.data.reverse().map((item, i) => {
                            console.log("item", item.attributes.url)
                            return (
                              <div className={i == 0 ? "carousel-item active" : "carousel-item"}>
                                {item.attributes.url ? (
                                  <img
                                    src={`${imageBaseUrl}${item.attributes.url}`}
                                    className="d-block w-100"
                                  />
                                ) : null}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-1 col-12 p-0">
                    <div className="main-box-m">
                      <div>
                        <a href="#" onClick={handleClick}>
                          <div className="share-icon-blog">
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.749 7C17.1988 7 18.374 5.82475 18.374 4.375C18.374 2.92525 17.1988 1.75 15.749 1.75C14.2993 1.75 13.124 2.92525 13.124 4.375C13.124 5.82475 14.2993 7 15.749 7Z"
                                stroke="#3FCA66"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.24902 13.125C6.69877 13.125 7.87402 11.9497 7.87402 10.5C7.87402 9.05025 6.69877 7.875 5.24902 7.875C3.79928 7.875 2.62402 9.05025 2.62402 10.5C2.62402 11.9497 3.79928 13.125 5.24902 13.125Z"
                                stroke="#3FCA66"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.749 19.25C17.1988 19.25 18.374 18.0747 18.374 16.625C18.374 15.1753 17.1988 14 15.749 14C14.2993 14 13.124 15.1753 13.124 16.625C13.124 18.0747 14.2993 19.25 15.749 19.25Z"
                                stroke="#3FCA66"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.51514 11.8213L13.4914 15.3038"
                                stroke="#3FCA66"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13.4826 5.69629L7.51514 9.17879"
                                stroke="#3FCA66"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          SHARE
                        </a>
                      </div>
                      <div className="nav-carousel-box">
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="content-box">
              <div className="sec-title mob-fonts">
                <h1>
                  {singleBlog.data &&
                    singleBlog.data.attributes.Title &&
                    singleBlog.data.attributes.Title}
                </h1>
              </div>
            </div>
            <Link to="/blogs" className="mx-auto">
              <button
                className="cta-btn mx-auto d-block first-color"
                style={{ fontSize: "15px", padding: "18px" }}
              >
                {category}
              </button>
            </Link>
          </div>
        </section>

        <section id="content-section" className="ptb_50">
          <div className="container" style={{ marginTop: "-48px" }}>
            <ul
              className="flex-ul-list"
              style={{ position: "relative", left: "-32px" }}
            >
              <li>
                {" "}
                By{" "}
                <span>
                  {" "}
                  {singleBlog.data &&
                    singleBlog.data.attributes.Author &&
                    singleBlog.data.attributes.Author}
                </span>
              </li>
              <li>
                {" "}
                {singleBlog.data &&
                  singleBlog.data.attributes.ReadTimeInMinute &&
                  singleBlog.data.attributes.ReadTimeInMinute}{" "}
                minutes read
              </li>
              <li>{formattedDate}</li>
            </ul>
            <div
              className="content-box"
              style={{ fontFamily: "roundo", sontStyle: "normal" }}
            >
              {singleBlog.data &&
                singleBlog.data?.attributes &&
                singleBlog.data.attributes &&
                singleBlog.data.attributes.Description && (
                  <ReactMarkdown
                    children={
                      singleBlog.data &&
                      singleBlog.data.attributes.Description &&
                      singleBlog.data.attributes.Description
                    }
                    transformImageUri={(uri) =>
                      uri.startsWith("http") ? uri : `${imageBaseUrl}${uri}`
                    }
                  />
                )}
            </div>
          </div>
          <section id="blog-card-sec">
            <div className="container">
              <h3>Related Post you might like</h3>
            </div>
            {allBlogs && (
              <ReactOwlCarousel
                className="blog-card-slider owl-carousel owl-theme-default "
                loop
                autoplay={true}
                autoplayHoverPause={true}
                autoplayTimeout={3000}
                smartSpeed={3000}
              >
                {allBlogs &&
                  allBlogs
                    .filter((y) => y.id != id)
                    .map((x) => {
                      let blogId = x.id;
                      console.log("id", blogId);

                      return (
                        <Link
                          key={x.id}
                          to={`/blog-content/${blogId}`}
                          onClick={blogSingle}
                        >
                          <div className="col-12">
                            <div className="card-box">
                              <img
                                className="blog-card"
                                src="/images/blog-card/1.svg"
                                alt="blog card"
                                title="blog card"
                              />
                              <div className="blog-title">
                                <p>{x.attributes.Title}</p>
                              </div>
                              <div className="blog-desc">
                                <div>
                                  <p className="mob-author-read">
                                    By <span>{x.attributes.Author}</span>
                                  </p>
                                </div>
                                <div>
                                  <p className="mob-author-read">
                                    {x.attributes.ReadTimeInMinute} min read
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
              </ReactOwlCarousel>
            )}
          </section>
          <div className="container">
            {/* <div className="vr-linr-sec-inner-pages">
              <div className="main-div">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div> */}
          </div>
          <div className="container">
            <div className="tab-search-box col-md-8 mx-auto">
              <h6>Browse by Categories</h6>
              <div className="row ">
                {allCategory &&
                  allCategory.map((x, i) => {
                    return (
                      <div
                        key={i}
                        className="col-md-4 col-sm-6 col-10 mx-auto d-block"
                      >
                        <Link to="/blogs" className="mx-auto">
                          <button className="content-box text-decoration-none">
                            <p
                              className="text-start"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              {x}
                            </p>
                          </button>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>

        <section id="new-age-bank" className="ptb_50  mt-3">
          <div className="container">
            <div className="sec-title">
              <h4>
                Made for New <br /> Age Banks
              </h4>
            </div>
            <p className="text-center mt-4">
              Made with{" "}
              <img src="../images/clayfin.svg" className="heart" alt="" /> by{" "}
              <Link
                to="https://www.clayfin.com/"
                target="_blank"
                style={{ color: "gray", marginLeft: "5px" }}
              >
                {" "}
                Clayfin
              </Link>{" "}
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
