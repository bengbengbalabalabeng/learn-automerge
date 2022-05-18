import Round from "../components/Round";
import {useMouse} from "ahooks";


const Home = () => {

    const mouse = useMouse();

    return (
        <>
            鼠标位置： X: {isNaN(mouse.clientX) ? 0 : mouse.clientX} -- Y: {isNaN(mouse.clientY) ? 0 : mouse.clientY}
            <Round info={{
                'clientX': isNaN(mouse.clientX) ? 23 : mouse.clientX,
                'clientY': isNaN(mouse.clientY) ? 22 : mouse.clientY,
                'enabled': true
            }} />
        </>
    )
}

export default Home