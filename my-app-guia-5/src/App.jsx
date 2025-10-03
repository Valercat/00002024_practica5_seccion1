import { getImageUrl} from './utils.js'

function Avatar() {
  return (
<img
className="avatar"
src={getImageUrl(person)}
alt={person.name}
width={size}
height={size}
/>
  );
}
export default function Profile(){
  return (
    <div>
      <Avatar 
        size={100}
        person={{
          name: "Jerry",
          imageId: "YfeOqp2"
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Luna",
          imageId: "OKS67lh"
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Zoe",
          imageId: "1bX5QH6"
        }}
      />
    </div>
  );
};
function MyButton(props) {
  return (
  <button onClick={props.Fn}>Soy un botón custom y mi cuenta es: {props.count}</button>
  );
}

