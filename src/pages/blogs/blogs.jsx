import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { doGet } from "../../api-services/axiosservice";
import clay from "../../assets/images/clayfin.svg";
import MainLoader from "../common/Loader/main-loader";
import parse from "html-react-parser";
import { imageBaseUrl } from "../../api-services/config";

export default function Blogs() {
  const [allBlogs, setBlogs] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [blogTitle, setBlogTitle] = useState({});
  // const history = useHistory();

  useEffect(() => {
    getAllData();
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);
  const getAllData = async () => {
    setLoading(true);
    try {
      let allBlogs = doGet("/blogs?populate=*");
      let blogTitleData = doGet("/blog-title");
      Promise.all([allBlogs, blogTitleData]).then(
        ([blogs, blogTitleDataSelected]) => {
          setBlogs(blogs.data.data);
          // console.log(blogTitleDataSelected.data.data);
          setBlogTitle(blogTitleDataSelected.data.data);
          if (blogs.data.data.length > 0) {
            setAllCategory(
              ["All Category"].concat(
                blogs.data.data.map((x) => {
                  return x.attributes.Category;
                })
              )
            );
          }

          console.log(blogs.data.data);
        }
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  console.log(allCategory);
  const navigate = useNavigate();
  const blogSingle = (blogId,category) => {
    console.log("TheBlogId", blogId);
    navigate(`/blog-content/${blogId}/${category}`);
  };
  //   // history.push({
  //   //   pathname:"/blog-content",
  //   //   state:{blogId},
  //   // })
  //   //   console.log("iddddd",blogId);
  // };
  console.log("allBlogs", allBlogs);
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

  console.log("searchCategory", searchCategory);
  if (loading) {
    return <MainLoader />;
  } else {
    return (
      <main id="blog-sec">
        <article>
          <section id="inner-banner-sec">
            <div className="banner-box">
              <div className="container">
                <div className="content-box">
                  <div className="sec-title">
                    <h1>
                      {
                          blogTitle && blogTitle.attributes
                            ? blogTitle.attributes.title
                            : ""
                        }{" "}
                        <br />{" "}
                        <span>
                          {" "}
                          { blogTitle && blogTitle.attributes
                            ? blogTitle.attributes.subtitle
                            : ""}{" "}
                        </span>
                        <br />
                    </h1>
                  </div>
                  <form className="search-container">
                    <a href="#" className=" search-icon ">
                      <img loading="lazy" src="images/search.svg" />
                    </a>
                    <input
                      type="search"
                      id="search-bar"
                      placeholder="Search"
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="inner-banner-img img-fluid mx-auto d-block">
                <div className="tab-search-box col-md-8  mx-auto ">
                  <div className="d-flex row d-block">
                    {allCategory &&
                      allCategory.map((x) => {
                        return (
                          <div className="col-sm-2 col-md-2 col-xs-2 mx-auto">
                            <button
                              className="content-box  btn-lg"
                              onClick={() => {
                                setSearchCategory(x == "All Category" ? "" : x);
                              }}
                            >
                              <p
                                className="text-center"
                                style={{ whiteSpace: "nowrap" }}
                              >
                                {" "}
                                {x}
                              </p>
                            </button>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="blog-card-sec">
            <div className="container-fluid px-md-5 px-2">
              <div className="container">
                {/* <div className="vr-linr-sec-inner-pages">
                <div className="main-div">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div> */}
              </div>
              <div className="row col-12">
                {filterBlogs &&
                  filterBlogs.map((x) => {
                    let blogId = x.id;
                    console.log("value of x",x);
                    let imageUrl =
                      x &&
                      x.attributes &&
                      x.attributes.Images &&
                      x.attributes.Images.data &&
                      x.attributes.Images.data[0] &&
                      x.attributes.Images.data[0].attributes &&
                      x.attributes.Images.data[0].attributes.url
                        ? x.attributes.Images.data[0].attributes.url
                        : "";
                    console.log("id", imageUrl);

                    return (
                      // let _id=x.id;
                      <div className="col-md-4">
                        <Link
                          to={`/blog-content/${x.id}/${x.attributes.Category}`}
                          onClick={()=>blogSingle(x.attributes.id,x.attributes.Category
                            )}
                        >
                          <div className="card-box">
                            {imageUrl ? (
                              <img
                                loading="lazy"
                                className="blog-card"
                                src={`${imageBaseUrl}${imageUrl}`}
                                alt="blog card"
                                title="blog card"
                              />
                            ) : null}

                            <div className="blog-title">
                              <p>{x.attributes.Title}</p>
                            </div>

                            <div className="blog-desc">
                              <div>
                                <p>
                                  By <span>{x.attributes.Author}</span>
                                </p>
                              </div>
                              <div>
                                <p>{x.attributes.ReadTimeInMinute} min read</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>

          <section
            id="new-age-bank"
            className="ptb_50  mt-3"
            style={{ background: "#fff" }}
          >
            <div className="container">
              <div className="sec-title">
                <h4>
                  Made for New <br /> Age Banks
                </h4>
              </div>
              <p className="text-center mt-4">
                Made with <img src={clay} className="heart" alt="" /> by{" "}
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
}
