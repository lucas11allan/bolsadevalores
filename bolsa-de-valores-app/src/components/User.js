import React from 'react';
import userImage from '../images/userImage.svg';
import down from '../images/chevron-down.svg';

function User() {
  return (
    <div className="user">
      <img src={userImage}></img>
      <span>João da Silva Almeida Magalhães</span>
      <img src={down}></img>
    </div>
  );
}

export default User;
