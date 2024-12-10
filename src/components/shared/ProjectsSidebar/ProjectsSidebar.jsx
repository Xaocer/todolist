import Switcher from "../Switch/swithc";
import style from "./style.module.css"
const ProjectsSidebar = () => {


return(
     <div className={style.wrapper}>
            <div className={style.projects}>
                <h1>Projects</h1>
            </div>
        <Switcher/>
     </div>
    );
};
export default ProjectsSidebar;