import React from "react";
import "./styles.css";

export default function Data(props) {
  return (
    <tr className="tr">
      <td className="td">{props.data.nama}</td>
      <td className="td">{props.data.harga}</td>
      <td className="td">{props.data.rating}</td>
      <td className="td">{props.data.likes}</td>
    </tr>
  );
}
