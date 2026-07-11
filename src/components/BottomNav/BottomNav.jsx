import "./BottomNav.css";

import {

FiHome,
FiSearch,
FiFilm,
FiHeart

} from "react-icons/fi";

export default function BottomNav(){

return(

<div className="bottom-nav">

<FiHome/>

<FiSearch/>

<FiFilm/>

<FiHeart/>

<img
src="https://i.pravatar.cc/100?img=10"
alt=""
/>

</div>

);

}