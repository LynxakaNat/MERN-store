import React from 'react';
import './AdminScreen.css'; // Import your CSS file

function AdminScreen() {
  const onUsers = () => {
    window.location.href = `http://localhost:3000/users/`;
  };
  const onOrders = () => {
    window.location.href = `http://localhost:3000/orders/`;
  };
  const onDelete = () => {
    window.location.href = `http://localhost:3000/delete/`;
  };

  const onCreate = () => {
    window.location.href = `http://localhost:3000/crodify/`;
  };

  return (
    <div className="AdminScreen">
      <button className="AdminButton" onClick={onUsers}>
        Get all users
      </button>
      <button className="AdminButton" onClick={onOrders}>
        Get all orders
      </button>
      <button className="AdminButton" onClick={onDelete}>
        Delete a product
      </button>
      <button className="AdminButton" onClick={onCreate}>
        Modify or create a product
      </button>
    </div>
  );
}

export default AdminScreen;
