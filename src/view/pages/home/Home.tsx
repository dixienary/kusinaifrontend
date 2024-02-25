import CSS from "./Home.module.css"
import RobotChef from "../../assets/robotchef.png"
import Food from "../../assets/bc.png"
import { TEAnimation } from "tw-elements-react";
import Who from "../../assets/piratechef.png"
import Card from "../../basic/card/Card";
import Card2 from "../../basic/card/Card2";
import Card3 from "../../basic/card/Card3";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div className={CSS.container}>
      <div className={CSS.light}>

      </div>
      <div className={CSS.light2}>

      </div>
      
      <div className={CSS.box}>
        
        <img src={RobotChef} style={{width:"13vw",height:"13vw",position:"absolute",top:"-8vh",left:"1.5vw"}}/>
        <div className={CSS.innerBox}>
          <div className={CSS.heading}>
         
            Kusin-AI
            <TEAnimation
            animation="[fly-in-left_0.5s]"
            start="onScroll"
            repeatOnScroll
            showOnLoad
            className="[&>svg]:w-11"
          >
            <div className={CSS.subheading}>is ready to serve you</div>
            </TEAnimation>
            <NavLink to="/login">
            <button
              type="button"

              className="inline-block rounded-full bg-primary-100 px-6 pb-2 pt-2.5 text-lg font-medium leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
              style={{width:"18em"}}
            >
              Get started
            </button>
            </NavLink>
          </div>
       
         
          <TEAnimation
            animation="[zoom-in_1s_ease-in-out]"
            start="onScroll"
            repeatOnScroll
            showOnLoad
            className="[&>svg]:w-11"
          >
            <img src={Food}  className={CSS.food} />
          </TEAnimation>
        </div>
        
      </div>
      <div className={CSS.moreDetails}>
        <div className={CSS.whoiam}>
          <div className={CSS.who}>
          <TEAnimation
            animation="[fade-in_1s_ease-in-out]"
            start="onScroll"
            repeatOnScroll
            showOnLoad
            className="[&>svg]:w-11"
          >
            <img src={Who} className={CSS.robotWho}/>
            </TEAnimation>
          </div>
          <div className={CSS.iam}>
          <TEAnimation
            animation="[fade-in_1s_ease-in-out]"
            start="onScroll"
            repeatOnScroll
            showOnLoad
            className="[&>svg]:w-11"
          >
            <p style={{fontSize:"50px"}}>Who am I? </p>
            </TEAnimation> 
            <p>Introducing Kusin-AI: Your Bicolano Cuisine Maestro! Ever find yourself yearning for authentic Bicolano dishes but can't seem to match the ingredients? Worry no more! Kusin-AI is your innovative AI chatbot assistant, designed to be your culinary guide, transforming available ingredients into delicious Bicolano recipes. Just share what's in your pantry with Kusin-AI, and be amazed as it presents creative, mouthwatering suggestions that embody the rich flavors of Bicolano cuisine. Forget about flipping through recipe books. Welcome a more convenient, personalized cooking journey with Kusin-AI at your service!</p>
         
          </div>
             
        </div>
     

        {/* featured photos */}
        <div className={CSS.featuredPhotos}>
          <div className={CSS.cards}>
          <TEAnimation
            animation="[fade-in-left_1s_ease-in-out]"
            start="onScroll"
            repeatOnScroll
            showOnLoad
            className="[&>svg]:w-11"
          >
            <Card/>
            </TEAnimation> 
          </div>
          <div className={CSS.cards}>
          <TEAnimation
            animation="[fade-out_1s_ease-in-out]"
            start="onScroll"
            repeatOnScroll
            showOnLoad
            className="[&>svg]:w-11"
          >
            <Card2/>
            </TEAnimation> 
          </div> 
          <div className={CSS.cards}>
          <TEAnimation
            animation="[fade-in-right_1s_ease-in-out]"
            start="onScroll"
            repeatOnScroll
            showOnLoad
            className="[&>svg]:w-11"
          >
            <Card3/>
            </TEAnimation> 
          </div>
        </div>

        {/* <div className={CSS.footer}>
           Kusin-AI developers:
           <div>one</div>
           <div>two</div>
           <div>three</div>

        </div>
       */}
      </div>
     
      
        

    </div>
  )
}

export default Home