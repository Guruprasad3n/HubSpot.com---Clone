import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import TopBar from "../Navbar/TopBar";
import "./resources.css";

const ExploreTopics = [
  { name: "Customer Retention", color: "red" },
  { name: "Customer Experience" },
  { name: "SEO" },
  { name: "Instagram Marketing", color: "green" },
  { name: "Email Newsletters" },
  { name: "Email Marketing" },
  { name: "Sales Qualification" },
  { name: "Sales Process" },
  { name: "Sales Prospecting" },
  { name: "Remote Work" },
];

function Resources() {

  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="mainContainer">
        <div className="topResource">
          {/* Flex Div-1 */}

          <div className="flexDiv1">
            <img
              className="resourceTopImage"
              src="https://blog.hubspot.com/hubfs/marketing-plan.png"
              alt="Resources Top Image"
            />

            <p className="ResourceTopHeading">
              5 Steps to Create an Outstanding Marketing Plan [Free Template]
            </p>
            <p className="ResourceTopSubHeading">
              <span className="ResourceTopSubHeadingUnderLine">
                MARKETING |
              </span>{" "}
              20 MIN READ{" "}
            </p>
          </div>

          {/* Flex Div-2 */}

          <div className="flexDiv2">
            <div className="flexDiv2SideHeading">
              <p className="flexDiv2SideHeadingText">Most Popular</p>
            </div>
            <div className="flexRightTextDivs">
              <p className="lexRightTextDivs1">
                How to Create Detailed Buyer Persons for Your Businedd [Free
                Persona Template]
              </p>
              <p className="lexRightTextDivs2">
                <span className="lexRightTextDivsType">MATKETING |</span> 14 MIN
                READ{" "}
              </p>
            </div>

            <div className="flexRightTextDivs">
              <p className="lexRightTextDivs1">
                How to Create Create a Sales Plan: Template + Examples
              </p>
              <p className="lexRightTextDivs2">
                <span className="lexRightTextDivsType">SALES |</span> 18 MIN
                READ{" "}
              </p>
            </div>

            <div className="flexRightTextDivs">
              <p className="lexRightTextDivs1">
                13 New Customers Onboarding Best Practices
              </p>
              <p className="lexRightTextDivs2">
                <span className="lexRightTextDivsType">SERVICE |</span> 9 MIN
                READ{" "}
              </p>
            </div>
            {/* //////////////// */}

            <div className="flexDiv2SideHeading">
              <p className="flexDiv2SideHeadingText">Editor's Picks</p>
            </div>
            <div className="flexRightTextDivs">
              <p className="lexRightTextDivs1">
                The HubSpot Blog's 2022 Content & Media Strategy Report [Data]
              </p>
              <p className="lexRightTextDivs2">
                <span className="lexRightTextDivsType">MATKETING |</span> 17 MIN
                READ{" "}
              </p>
            </div>

            <div className="flexRightTextDivs">
              <p className="lexRightTextDivs1">
                17 Best Sales Strategies, Plans, & Initiatives for Success
                [Templates]
              </p>
              <p className="lexRightTextDivs2">
                <span className="lexRightTextDivsType">SALES |</span> 14 MIN
                READ{" "}
              </p>
            </div>

            <div className="flexRightTextDivs">
              <p className="lexRightTextDivs1">
                The 15 Customer Success Metrics That Actually Matter
              </p>
              <p className="lexRightTextDivs2">
                <span className="lexRightTextDivsType">SERVICE |</span> 15 MIN
                READ{" "}
              </p>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////    2nd Part       ////////////////////////////////////////// */}

        <div className="SecondContainer">
          <div className="SecondLeftContainer">
            <div className="secondContainerDivParts">
              <img
                style={{ marginBottom: "15px" }}
                src="https://blog.hubspot.com/hubfs/project%20management-2.jpg"
                alt=""
              />

              <p className="secondDivTopLine">Project Management</p>
              <p className="ResourceTopHeading1">
                {" "}
                Program Management Vs. Project Management: What You Need To Know{" "}
              </p>
              <p className="ResourceTopSubHeading">
                {" "}
                <span className="ResourceTopSubHeadingUnderLine">
                  MARKETING |{" "}
                </span>
                2 MIN READ{" "}
              </p>
            </div>
            {/* ///////////////////// */}
            <div className="secondContainerDivParts">
              <img
                style={{ marginBottom: "15px" }}
                src="https://blog.hubspot.com/hubfs/woman%20looking%20at%20her%20laptop%20and%20seeing%20her%20products%20are%20on%20page%20one%20of%20image%20results%20page.jpg"
                alt=""
              />

              <p className="secondDivTopLine">SEO</p>
              <p className="ResourceTopHeading1">
                Image SEO Best Practices to Make Your Content More Discoverable
              </p>
              <p className="ResourceTopSubHeading">
                {" "}
                <span className="ResourceTopSubHeadingUnderLine">
                  MARKETING |{" "}
                </span>
                6 MIN READ{" "}
              </p>
            </div>
          </div>

          {/* ///////////////////// */}

          <div className="rightSideSecongSubscribeEmail">
            <h1 className="secondContainerDivGeading">Subscribe via Email</h1>
            <br />
            <hr
              style={{
                width: "80%",
                color: "white",
                margin: "auto",
                marginBottom: "19px",
                height: "3px",
                top: "20px",
              }}
            />

            <div className="checkboxesCategory">
              <div className="checkboxesCategory1">
                <label htmlFor="marketing">
                  <input type="checkbox" id="marketing" /> Marketing{" "}
                </label>

                <br />
                <label htmlFor="Service">
                  <input type="checkbox" id="Service" /> Service{" "}
                </label>
              </div>
              <div className="checkboxesCategory1">
                <label htmlFor="sales">
                  <input type="checkbox" id="sales" /> Sales{" "}
                </label>
                <br />
                <label htmlFor="website">
                  <input type="checkbox" id="website" /> Website{" "}
                </label>
              </div>
            </div>
            <br />

            <div>
              <p
                style={{
                  marginLeft: "15px",
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: "19px",
                }}
              >
                Email Address
              </p>
              <input
                style={{
                  display: "block",
                  margin: "auto",
                  width: "91%",
                  outline: "0",
                  borderRadius: "3px",
                  height: "30px",
                  marginBottom: "15px",
                }}
                type="text"
              />
            </div>

            <div>
              <p
                style={{
                  color: "#fff",
                  width: "90%",
                  margin: "auto",
                  fontSize: "14.2px",
                  fontWeight: "500",
                }}
              >
                We're committed to your privacy. HubSpot uses the information
                you provide to us to contact you about our relevant content,
                products, and services. You may unsubscribe from these
                communications at any time. For more information, check out our{" "}
                <span style={{ textDecoration: "underline" }}>
                  privacy policy
                </span>
                .
              </p>
            </div>
            <button className="buttonSubscribe">Subscribe</button>
          </div>
        </div>

        {/* ////////////////////////   3rd Part Div   ////////////////////// */}

        <div className="thirdContainer">
          <div className="thirdConteinerInnerDiv">
            <div className="thisrConteiner1">
              <p className="thisrConteiner1text">
                HubSpot's 2022 State of Marketing Report
              </p>

              <button className="thirdDivButton">Get the Free Report</button>
            </div>

            <div className="thisrConteiner2">
              {/* style={{width:"100%"}} */}
              <img
                className="resourceTopImage"
                src="https://blog.hubspot.com/hubfs/social-media-holiday-calendar.png"
                alt="hubspot 2022 state of marketing"
              />

              <p className="thirdDivRightSideHoliday">Holiday Marketing</p>
              <p className="ResourceTopHeading2">
                278 Social Media Holidays for your 2023 Content Calender
                [+Template]
              </p>
              <p className="ResourceTopSubHeading">
                {" "}
                <span className="ResourceTopSubHeadingUnderLine">
                  MARKETING |{" "}
                </span>
                13 MIN READ{" "}
              </p>
            </div>
          </div>
        </div>

        {/* ///////////////////////   4the part Div   //////////////////// */}

        <div className="thirdContainer">
          <div className="thirdConteinerInnerDiv">
            <div className="thisrConteiner2">
              {/* style={{width:"100%"}} */}
              <img
                className="resourceTopImage"
                src="https://blog.hubspot.com/hubfs/summer-slump-fi%20%281%29.jpg"
                alt="hubspot 2022 state of marketing"
              />

              <p className="thirdDivRightSideHoliday">Sales Strategy</p>
              <p className="ResourceTopHeading2">
                How to Avoide a Summer Slump in Slaes [Data + Tips]
              </p>
              <p className="ResourceTopSubHeading">
                {" "}
                <span className="ResourceTopSubHeadingUnderLine">SALES | </span>
                7 MIN READ{" "}
              </p>
            </div>

            <div className="fourthDivrightSide">
              <img
                src="https://blog.hubspot.com/hubfs/sales-resolutions.jpg"
                alt="Sales Image"
              />

              <p className="thirdDivRightSideHoliday">Sales Goals</p>

              <p className="ResourceTopHeading2">
                What Sales Reps Should Do in the First Quarter of New Year,
                According to Experts
              </p>

              <p className="ResourceTopSubHeading3">
                {" "}
                <span className="ResourceTopSubHeadingUnderLine">SALES | </span>
                3 MIN READ{" "}
              </p>
            </div>
          </div>
        </div>

        {/* ///////////////////////   5the part Div   //////////////////// */}

        <hr className="horizon" />

        <div>
          <div>
            <h1
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              Explore More Topics
            </h1>
            <p
              style={{
                textAlign: "center",
                marginTop: "15px",
                fontSize: "17px",
                marginBottom: "45px",
              }}
            >
              Ready to brush up on something new? We've got more to read right
              this way
            </p>

            <div className="mainExploreContainer">
              {ExploreTopics.map((e) => (
                <div className="ExploreTopics">
                  <a className="anchorDivs" href="">
                    <div className="anchorDiv1">
                      {e.name}
                      <span className="rightArroe"> </span>{" "}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="horizon" />

        <div className="sixthPartOfDiv">
          <div>
            <img
              className="sixthDivHeadingImage"
              src="https://cdn2.hubspot.net/hubfs/53/assets/blog.hubspot.com/images/orange-circles.png"
              alt=""
            />
            <p className="sixthDivHeading"> Visit the HubSpot Blogs </p>
          </div>

          <div className="marktingSalesDivsSixthDiv">
            <div className="insideGridDivs">
              <img
                className="sixthDivimageDivClas"
                src="https://blog.hubspot.com/hubfs/assets/blog.hubspot.com/2018/blogroll-images/marketing-blog-image.jpg"
                alt=""
              />
              <p className="insideGridDivsHeading">Marketing</p>
              <p className="insideGridDivsPara">
                Insights, ideas, and inspiration for moderen marketers.
              </p>
            </div>

            {/* ///////////// */}
            <div className="insideGridDivs">
              <img
                className="sixthDivimageDivClas"
                src="https://blog.hubspot.com/hubfs/assets/blog.hubspot.com/2018/blogroll-images/sales-blog-image.jpg"
                alt=""
              />
              <p className="insideGridDivsHeading">Sales</p>
              <p className="insideGridDivsPara">
                Sell smarter, better and faster .
              </p>
            </div>

            {/* ///////////////// */}
            <div className="insideGridDivs">
              <img
                className="sixthDivimageDivClas"
                src="https://blog.hubspot.com/hubfs/assets/blog.hubspot.com/2018/blogroll-images/service-blog-image.jpg"
                alt=""
              />
              <p className="insideGridDivsHeading">Service</p>
              <p className="insideGridDivsPara">
                Helping you help your customers.
              </p>
            </div>

            {/* ///////////// */}
            <div className="insideGridDivs">
              <img
                className="sixthDivimageDivClas"
                src="https://blog.hubspot.com/hubfs/assets/blog.hubspot.com/2018/blogroll-images/website-blog-image.jpg"
                alt=""
              />
              <p className="insideGridDivsHeading">Website</p>
              <p className="insideGridDivsPara">
                All the nuts and bolts that go into building your website.
              </p>
            </div>
            {/* /////////// */}

            <a className="insideGridDivs1" href="">
              <div className="insideGridDivs">
                <img
                  className="sixthDivimageDivClas"
                  src="https://blog.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/HubSpot%20Media/The%20Hustle/Images/The%20Hustle_resized.jpg"
                  alt=""
                />
                <p className="insideGridDivsHeading">The Hustle</p>
                <p className="insideGridDivsPara">
                  IThe insights you need to make smarter business decisions.
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* //////////////////////// 7th Part Divs   //////////////////////// */}

        <div className="seventhPartDiv">
          <div className="insideseventhPartDiv">
            <div className="SubscribeLeftDic">
              <p className="headingSubs">Subscribe to Our Blog</p>
              <p className="headingPara">
                Stay up to date with the latest marketing, sales, and service
                tips and news.
              </p>
            </div>

            <div className="SubscribeRightDic">
              <p className="SubscribeRightDivhead">I want the latest in...</p>
              <div className="checkboxesCategory">
                <div className="checkboxesCategory1">
                  <label htmlFor="market">
                    <input type="checkbox" id="market" /> Marketing{" "}
                  </label>

                  <br />
                  <label htmlFor="Serviceing">
                    <input type="checkbox" id="Serviceing" /> Service{" "}
                  </label>
                </div>
                <div className="checkboxesCategory1">
                  <label htmlFor="sale">
                    <input type="checkbox" id="sale" /> Sales{" "}
                  </label>
                  <br />
                  <label htmlFor="websit">
                    <input type="checkbox" id="websit" /> Website{" "}
                  </label>
                </div>
              </div>

              <div className="EmaininpurAndButton">
                <div className="inputSubs">
                  <p>Email Address</p>
                  <input type="text" />
                </div>

                <div className="buttonSubs">
                  <button>Subscribe</button>
                </div>
              </div>
              <p className="bottomText">
                We're committed to your privacy. HubSpot uses the information
                you provide to us to contact you about our relevant content,
                products, and services. You may unsubscribe from these
                communications at any time. For more information, check out our.{" "}
                <a
                  href=""
                  style={{ fontWeight: "500", textDecoration: "underline" }}
                >
                  privacy policy
                </a>
                .
              </p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Resources;