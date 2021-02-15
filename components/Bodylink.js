import Link from "next/link";

export default function Bodylink({ name, destination, id, func }) {
  return (
    <span className="bodylink">
      {" "}
      <Link href={destination}>
        <a id={`${id}-project-link`} onClick={() => func && func(true)}>
          {" "}
          {name} {">"}
        </a>
      </Link>
    </span>
  );
}
