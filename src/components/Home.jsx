import Happening from "./Happening";
import Legend from "./Legend";
import Trending from "./Trending";

export default function Home(){
    return(
        <div className="home">
            <Legend />
            <div className="flex-col main">
                <Trending />
                <Happening />
            </div>
        </div>
    )
}