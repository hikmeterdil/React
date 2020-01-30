import React from "react";

export default function FriendProfile({ friend }) {
  return (
    <div>
      <ul>
        <li>
          <strong>Name :</strong>
          {friend.results[0].name.first}
          {friend.results[0].name.last}
        </li>
        <li>
          <strong>Adress : </strong>
          {friend.results[0].location.street.name}
          {friend.results[0].location.street.number}
          {friend.results[0].location.country}
        </li>
        <li>
          <strong>E-mail : </strong>
          {friend.results[0].email}
        </li>
        <li>
          <strong>Phone : </strong>
          {friend.results[0].phone}
        </li>
      </ul>
    </div>
  );
}
