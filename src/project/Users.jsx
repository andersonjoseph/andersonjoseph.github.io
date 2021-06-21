import { Tween, ScrollTrigger } from 'react-gsap';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Avatar from "boring-avatars";

gsap.registerPlugin(TextPlugin);

function User(props) {

  return (
    <Tween to={{ opacity: 0, y: -50 }}>
      <div>
        <figure className="block text-center mb-5">
          <Avatar
            size="10em"
            name={props.name}
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />;
        </figure>

        <h3>{props.name} - {props.age}</h3>
        <p className="mt-5">
          {props.desc}
        </p>
      </div>
    </Tween>
  )

}

function Users(props) {
	return (

    <div className="mt-l10">

      <div className="flex">

        <ScrollTrigger start="center center" end="+=1000" pin>
          <div className="w-100pc md-w-50pc">
            <Tween>
              <div>
                <h2>Usuarios</h2>
                <p>
                 {props.desc}
                </p>
              </div>
            </Tween>
          </div>
        </ScrollTrigger>

        <div className="w-100pc md-w-10pc"></div>

        <ScrollTrigger start="center center" end="+=500" scrub={0.5} pin>
          <div className="w-100pc md-w-40pc text-center">
            {props.users.map((user) => <User name={user.name} age={user.age} desc={user.desc} />)}
          </div>
        </ScrollTrigger>


      </div>

    </div>

  )
}

export default Users;
