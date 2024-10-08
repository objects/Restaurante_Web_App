"use client";
import ProductForm from "../../components/ProductForm";
import "../../styles/global.css"; // Asegúrate de que la ruta sea correcta

const AdminProducts = () => {
  return (
    <div className="admin-container">
      <h1 className="text-center">Gestionar Productos</h1>
      <div className="form-container">
        <ProductForm />
      </div>
    </div>
  );
};

export default AdminProducts;
