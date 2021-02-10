export default function Navlink({ name, destination, importance = "3" }) {
  return (
    <a className="navlink" href={destination} data-important={importance}>
      {" "}
      {name}
    </a>
  );
}
