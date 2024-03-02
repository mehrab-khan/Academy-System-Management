import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
export default function () {
  const [showmore , setShowMore] = useState(false)
  function hide(){
setShowMore(false)
  }
  return (
    <div className="openc50">
       <Link to='/dashboard'><svg style={{position:'absolute', zIndex :'2',marginLeft :'4%',color:'blueviolet'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
</Link> 
      <img src="./Assets/bc.jpeg" className="bcimg" alt="" />
      <div className="prof24">
        <div className="userimg-about">
          <img src="Assets/saikat.png" className="useraboutimg" alt="" />
        </div>
        <p className="nameuser"style={{color : 'blueviolet'}} >Saiket Hossian</p>
        <div className="auth-info">
          <div className="icons02">
            <a href="https://www.facebook.com/cosmo.ac.bd">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(23, 157, 235)" }}
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              style={{ color: "rgb(23, 185, 235)" }}
              fill="currentColor"
              className="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
            </svg>
<a href="https://www.instagram.com/iamsaiket?fbclid=IwAR3aidWegNkMGGOpKRBu2WjjRhgYyAJTY9MvNXtVpPs8fyCvN_Z8s_189B4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              style={{ color: "rgb(223, 52, 194)" }}
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
            </a>
          </div>

          <ul className="details">
            <li className="userinfo00">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                style={{ color: "rgb(153, 0, 255)" }}
                fill="currentColor"
                className="bi bi-building"
                viewBox="0 0 16 16"
              >
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
              </svg>{" "}
              Founder Of{" "}
              <span style={{ fontWeight: "700" }}>Cosmo Academy</span>
            </li>
            <li className="userinfo00">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                style={{ color: "rgb(153, 0, 255)" }}
                fill="currentColor"
                className="bi bi-mortarboard"
                viewBox="0 0 16 16"
              >
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
              </svg>{" "}
              Studies Dept. of Finance At{" "}
              <span style={{ fontWeight: "700", marginLeft: "9%" }}>
                Jagannath University (JU)
              </span>{" "}
            </li>
            <li className="userinfo00">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                style={{ color: "rgb(153, 0, 255)" }}
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>{" "}
              +8801452000000
            </li>
            <li className="userinfo00">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                style={{ color: "rgb(153, 0, 255)" }}
                fill="currentColor"
                className="bi bi-sign-no-right-turn-fill"
                viewBox="0 0 16 16"
              >
                <path d="M14 13.292A8 8 0 0 0 2.707 2l4.097 4.098Q7.137 6.001 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658l-.026.02zm-.708.708A8 8 0 0 1 2 2.707l3.885 3.884A2.5 2.5 0 0 0 5 8.5V11h1V8.5c0-.489.234-.923.596-1.197l6.696 6.696Z" />
                <path d="M7.707 7 9 8.293V7z" />
              </svg> {' '}
              (Opppsite Of Shaniakhra <span style={{marginLeft :"10%"}}> Bridge) City Ideal School, <span style={{marginLeft : '10%'}}>Jatrabari, Dhaka</span>  </span> 
            </li>
          </ul>
          <button className="btn mrebtn" onClick={()=>setShowMore(true)} style={{position : 'absolute'}}>Show More</button>
        </div>

        {showmore &&
        <div className="more-info">
          <p className="txt20" style={{color :'blueviolet'}}>Details And Acheivements</p>
          <hr />
          <p className="adrs">Map : </p>
            <a href='https://www.google.com/maps/place/Shaheed+Azad+Memorial+Library+(শহীদ+আজাদ+স্মৃতি+পাঠাগার),+Sheikhdee+%232+Road+Shonir+Akhra,+1236,+Bangladesh/@23.7041011,90.4493942,20z/data=!4m6!3m5!1s0x3755b944547a24a5:0x31cd3005b5b68e59!8m2!3d23.7041318!4d90.4493384!16s%2Fg%2F11jsvmjp87?hl=en&gl=US'><button className="btn"
           style={{height:'30px',
           width :'110px',
           borderRadius : '20px',
           lineHeight :'8px',
           fontSize : '11px',
           backgroundColor : 'blue',
           color : 'white',
           marginTop : '-2%',
           fontFamily:'Quicksand'
           }}>Go to Map</button></a>
           <p className="adrs" style={{
            marginTop:'3%'
           }}>Acheievements/Events : </p>
<iframe style={{width : '100%' , height : '100%',marginTop : '-2%'}}
  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcosmo.ac.bd%2Fposts%2Fpfbid02po4ouQoEvS66Cfn2eQybxaZ1DQor8QAPkooXh1XHF7sTEfswgGEa4AJVAh1ECyD8l&show_text=true&width=500"/>

<hr />
<iframe style={{width : '100%' , height : '150%',marginTop : '-2%'}}
src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcosmo.ac.bd%2Fposts%2Fpfbid02vZuRanpFJP5DEhmuiq5BTEVNvgp19bcaQv9U51Jec3HJ7quvRhFPVTwmoQGaC5E3l&show_text=true&width=500"/>

<hr />
<iframe style={{width : '100%' , height : '148%',marginTop : '-2%'}}

  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcosmo.ac.bd%2Fposts%2Fpfbid0W3Z4qhgmVEouAUs2YA2oRGSdT3EHoin2SJhwQxFrqioLTP35cYW2ELeKH6MoXu12l&show_text=true&width=500"
 
/>
<hr />
<iframe style={{width : '100%' , height : '155%',marginTop : '-2%'}}
  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcosmo.ac.bd%2Fposts%2Fpfbid0bqNgxuVkE1kwkCHTMomUk92gkRuE7gzBqbBEJfyNGdXD9EFFDWAHHi2df2oyFUPel&show_text=true&width=500"
 
/>
<button className="btn btn-primary" onClick={hide} style={{fontFamily:'Quicksand'}}>Back</button>

        </div>
}


 

      </div>
    </div>
  );
}
