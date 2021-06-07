import Tilt from "react-tilt";

function BlurryTilt(props) {
    return(
        <div>
                <Tilt>
                    <img className="absolute h-100pc opacity-50" src={props.src} />
                </Tilt>
                <Tilt>
                    <img className="opacity-50" src={props.src} />
                </Tilt>
        </div>

    )
}

export default BlurryTilt