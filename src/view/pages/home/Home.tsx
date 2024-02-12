import CSS from "./Home.module.css"
import RobotChef from "../../assets/robotchef.png"
import Food from "../../assets/biggs.png"
import { TEAnimation } from "tw-elements-react";
import Who from "../../assets/piratechef.png"
import Card from "../../basic/card/Card";
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
          <TEAnimation
            animation="[fly-in-right_0.5s]"
            start="onScroll"
            repeatOnScroll
            showOnLoad
            className="[&>svg]:w-11"
          >
            Kusin-AI
            </TEAnimation>
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
              style={{width:"18vw"}}
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
            <img src={Who} />
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
            <p>Introducing Kusin-AI, your personal Bicolano recipe maestro! Craving authentic Bicolano dishes but missing the right ingredients? Fear not, for Kusin-AI is here to help! This innovative chatbot assistant serves as your culinary guide, conjuring up delicious Bicolano recipes based on the ingredients you have on hand. Simply tell Kusin-AI what you have in your pantry, and watch as it whips up creative and mouthwatering suggestions, inspired by the rich flavors of Bicolano cuisine. So ditch the recipe books and say hello to a more convenient and personalized cooking experience with Kusin-AI by your side!</p>
         
          </div>
             
        </div>
     

        {/* featured photos */}
        <div style={{width:"85vw",height:"30em",display:"flex",justifyContent:"center",gap:"5em",marginTop:"5em"}}>
          <div style={{height:"50px",width:"20em"}}>
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
          <div style={{height:"50px",width:"20em"}}>
          <TEAnimation
            animation="[fade-out_1s_ease-in-out]"
            start="onScroll"
            repeatOnScroll
            showOnLoad
            className="[&>svg]:w-11"
          >
            <Card/>
            </TEAnimation> 
          </div> 
          <div style={{height:"50px",width:"20em"}}>
          <TEAnimation
            animation="[fade-in-right_1s_ease-in-out]"
            start="onScroll"
            repeatOnScroll
            showOnLoad
            className="[&>svg]:w-11"
          >
            <Card/>
            </TEAnimation> 
          </div>
        </div>

        <div className={CSS.footer}>
           Kusin-AI developers:
           <div>one</div>
           <div>two</div>
           <div>three</div>

        </div>
      
      </div>
     
      
        

    </div>
  )
}

export default Home