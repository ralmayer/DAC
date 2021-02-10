import Link from "next/link";

export default function Bodylink({ name, destination, func }) {
  return (
    <span className="bodylink">
      {" "}
      <Link href={destination} scroll={false}>
        <a onClick={() => func(true)}>
          {" "}
          {name} {">"}
        </a>
      </Link>
    </span>
  );
}
