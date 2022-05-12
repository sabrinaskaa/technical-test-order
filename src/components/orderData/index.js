import React from "react";
import "./styles.css";

import Data from "./data";

const listData = [
  {
    nama: "Indomie",
    harga: 3000,
    rating: 5,
    likes: 150,
  },
  {
    nama: "Laptop",
    harga: 4000000,
    rating: 4.5,
    likes: 123,
  },
  {
    nama: "Aqua",
    harga: 3000,
    rating: 4,
    likes: 250,
  },
  {
    nama: "Smart TV",
    harga: 4000000,
    rating: 4.5,
    likes: 42,
  },
  {
    nama: "Headphone",
    harga: 4000000,
    rating: 3.5,
    likes: 90,
  },
  {
    nama: "Very Smart TV",
    harga: 4000000,
    rating: 3.5,
    likes: 87,
  },
];

listData.sort(function (a, b) {
  if (a.harga === b.harga && a.rating > b.rating) {
    return b.rating - a.rating;
  } else if (a.rating === b.rating && a.likes > b.likes) {
    return b.likes - a.likes;
  } else {
    return a.harga - b.harga;
  }
});

export default function OrderData() {
  return (
    <div className="allWrapper">
      <div className="tableWrap">
        <table className="table">
          <tbody className="tbody">
            <tr className="tr">
              <th className="th">Nama</th>
              <th className="th">Harga</th>
              <th className="th">Rating</th>
              <th className="th">Likes</th>
            </tr>
            {listData.map((data, index) => (
              <Data data={data} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
