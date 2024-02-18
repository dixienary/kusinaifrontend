import CSS from "./Nav.module.css"
import ButtonLogout from "../../basic/button/ButtonLogout"

const Nav = () => {
  return (
    <div className={CSS.container}>
        <div>Kusin-AI</div>
        <div>
          <ButtonLogout/>
        </div>
    </div>
  )
}

export default Nav