import React from 'react';
import "./Footer1.css";
// import {Popularfeatures,features,freeTools,Comapny,Costomers,Partners,socialIcons} from "./footer";
import { Link } from 'react-router-dom';


// **********************************footerjs********************************************

import {FaFacebookF} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {BsYoutube} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa"


 const Popularfeatures=[
    {
        name:"Free Meeting Scheduler App",
        path:"/"
    },
    {
        name:"Social Media Tools",
        path:"/"
    },
    {
        name:"Email Tracking Software",
        path:"/"
    },
    {
        name:"Sales Email Automation",
        path:"/"
    },
    {
        name:"Ads Software",
        path:"/"
    },
    {
        name:"Email Marketing Software",
        path:"/"
    },
    {
        name:"Lead Marketing Software",
        path:"/"
    },
    {
        name:"Pipline Management Tools",
        path:"/"
    },
]


const features=[
    {
        name:"Sales Email Templates",
        path:"/"
    },
    {
        name:"Help Desk Software",
        path:"/"
    },
    {
        name:"Free Online Form Builder",
        path:"/"
    },
    {
        name:"Free Chatbot Builder",
        path:"/"
    },
    {
        name:"Free Live Chat Software",
        path:"/"
    },
    {
        name:"Marketing Analytics",
        path:"/"
    },
    {
        name:"Free Landing Page Builder",
        path:"/"
    }
    
   
]


 const freeTools=[
    {
        name:"Website Grader",
        path:"/"
    },
    {
        name:"Make My Persona",
        path:"/"
    },
    {
        name:"Email Signature Generator",
        path:"/"
    },
    {
        name:"Blog Ideas Generator",
        path:"/"
    },
    {
        name:"Invoice Template Generator",
        path:"/"
    },
    {
        name:"Marketing Plan Generator",
        path:"/"
    },
    {
        name:"Free Buisness Templates",
        path:"/"
    },
    {
        name:"Industry Benchmark Data",
        path:"/"
    },
    {
        name:"Software Comparisons Library",
        path:"/"
    },
    {
        name:"Website Themes & Templates",
        path:"/"
    },
]



 const Comapny=[
    {
        name:"About Us",
        path:"/"
    },
    {
        name:"Careers",
        path:"/"
    },
    {
        name:"Management Team",
        path:"/"
    },
    {
        name:"Board of Directors",
        path:"/"
    },
    {
        name:"Investor Relations",
        path:"/"
    },
    {
        name:"Blog",
        path:"/"
    },
    {
        name:"Contact Us",
        path:"/"
    }
    
]


 const Costomers=[
    {
        name:"Customer Support",
        path:"/"
    },
    {
        name:"Join a Local User Group",
        path:"/"
    }     
]


 const Partners=[
    {
        name:"All Partner Programs",
        path:"/"
    },
    {
        name:"Solutions Partner Program",
        path:"/"
    },
    {
        name:"App Partner Program",
        path:"/"
    },
    {
        name:"HubSpot For Startups",
        path:"/"
    },
    {
        name:"Affiliate Program",
        path:"/"
    }
    
  
    
]



 const socialIcons=[
    {
        icon:<FaFacebookF/>,
        path:"/"
    },
    {
        icon:<BsInstagram/>,
        path:"/"
    },
    {
        icon:<BsYoutube/>,
        path:"/"
    },
    {
        icon:<BsTwitter/>,
        path:"/"
    },
    {
        icon:<FaLinkedinIn/>,
        path:"/"
    }   
]















const Footer1 = () => {
  
  return (
    <div className='footer_main_div'>
      <div className='footer_supports_div'>

        {/* ***********************************************popular feature**************************** */}
        <div className='feature'>
            <h4>Popular Features</h4>
           {Popularfeatures.map((e,index)=>(
            <Link to={e.path} className="footerlink">
               <div key={index+e} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        <div className='feature'>
            <h4>Popular Features</h4>
           {features.map((e,index)=>(
            <Link to={e.path} className="footerlink">
               <div key={e-index} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        <div className='Footer_hr_line'></div>
        <div className='feature'>
            <h4>Popular Features</h4>
           {freeTools.map((e,index)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name+index} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        <div className='feature'>
            <h4>Popular Features</h4>
           {Comapny.map((e,index)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name*index} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        <div>
        <div className='feature'>
            <h4>Popular Features</h4>
           {Costomers.map((e,index)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name/index} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
       
        <div className='feature'>
            <h4>Popular Features</h4>
           {Partners.map((e,index)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name+index*100} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        </div>
      </div>

  
      {/* ****************************************social connect********************************************* */}
     
     {/* <hr/> */}
      <div className='footer_social_icons'>
      
            {socialIcons.map((e,index)=>(
               <Link to={e.path} className="footer_icons_link">
                    <div key={index-index*100} className='icons'>{e.icon}</div>
               </Link>
          
            ))}
      </div>
      <div className='footer_hub_logo'>
         <img
         src="https://www.hubspot.com/hubfs/WBZ-1165%20Global%20Nav%20Redesign/Wordmark-White.svg" alt='.'
         />
      </div>
      <div className='footer_copyright'>Copyright © 2022 HubSpot, Inc.</div>
      <div className='footer_stuff'>
         <div className='footer_text'>Legal Stuff</div>
         <div className='vrline'></div>
         <div className='footer_text'>PrivacyPolicy</div>
         <div className='vrline'></div>
         <div className='footer_text'>Security</div>
      </div>
   
    </div>
  )
}

export default Footer1
