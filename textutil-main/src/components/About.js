//import React, { useState } from 'react'
import React, {  } from 'react'

export default function About(props) {

  // const [mystyle, setMystyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })
  // const [btnText, SetBtnText] = useState("Enable Dark mode")
  // let toggleStyle = () => {
  //   if (mystyle.backgroundColor === 'white') {
  //     setMystyle({
  //       color: 'white',
  //       backgroundColor: '#042743'
  //     })
  //     SetBtnText("Enable light mode")
  //   } else {
  //     setMystyle({
  //       color: '#042743',
  //       backgroundColor: 'white'
  //     })
  //     SetBtnText("Enable dark mode")
  //   }
  // }
  let mystyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'#042743':'white'
     
}
  return (
    <>
      <div className="container" style={mystyle}>
        <h1 className="my-3">About us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Who i am ? </strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <p> my name is shivam katiyar. I am pursing Btech computer science. This is my react website that be have created. I lives in indore Madhya Pradesh</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             <strong> What is an About Us page?</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <strong>This is the second item's accordion body.</strong> An "About Us" Page is where you reveal your brand story, business values, mission, and experiences. 

                Now the question is: why would you want to share all this information and make it appealing? The answer is simple: you want to tell your audience who you are, show them what you are good at, and tell them you are worthy of their trust.

                Think for a moment: would you rather purchase from a business you know nothing about, or would you go for somebody with a friendly face shared on their About page and a story that you find exciting? The latter one, right? 

              A great About Us page not just portrays your story, qualities and provides an insight on how your business started, but it also helps you sell. When visitors become familiar with your story and connect with it, they're probably going to purchase from you. A well-planned About Us page can do this!
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong> Why does your website need an About Us page? </strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <strong>This is the third item's accordion body.</strong> Well, benefits of about us page are many. Various types of visitors check out your "About Us" page. They can be first-time visitors, regular visitors, people who wish to work with you, and possible customers. With all kinds of visitors coming to your website, you need to offer sufficient and valuable information to convince them to establish a more substantial connection with you and your business.
            Although not every user who visits your website will end up on your "About Us" page, you still need to make sure to attract those who click on the page. You can achieve this by having insightful, exciting content and ultimately makes them believe that they really need what you are offering.

            Your “About Us” page is a wonderful way to show your visitors who you are and provide them the confidence that you and your organization have the skills and expertise they need to solve their issues. 

            Your About Us page ideas is where you create that first intimate bond with your prospective client. It's where they ascertain if you would understand them and if you're dependable. The more pleasant, personal, and convincing you are, the more likely it is that prospects will feel comfortable buying from you and becoming lifetime customers.
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
