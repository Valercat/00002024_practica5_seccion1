import './App.css';
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <div>
      <br></br>
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
      <br></br>
      <strong>Nombre:</strong> {person.name}
      <br></br>
      <strong>Profesión:</strong> {person.profesion}
      <br></br>
      <strong>Premios:</strong> {person.premios}
      <br></br>
      <strong>Descubrió:</strong> {person.descubrio}
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <h2>Cientificos Notables</h2>
      <Avatar class="avatar-box"
        size={100}
        person={{
          name: "Maria Skodowska-Curie",
          imageId: "YfeOqp2",
          profesion: "Fisica y Quimica",
          premios: "4(Premio Nobel de Fisica y Premio Nobel de Quimica, Medalla Davy, Medalla Matteucci)",
          descubrio: "polinio (elemento quimico)"
        }}
      />
      <Avatar class="avatar-box"
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "OKS67lh",
          profesion: "Geoquimica",
          premios: "2(Premio Miyake de geoquimica, Medalla Tanaka)",
          descubrio: "metodo para medir el dioxido de carbono en el agua de mar"
        }}
      />
    </div>
  );
}

