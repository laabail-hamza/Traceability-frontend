import React, { useState } from "react";
import axios from "axios";
import "./LotForm.css";

function LotForm() {

  const initialState = {
    lotCode: "",
    productName: "",
    variety: "",
    productDescription: "",
    harvestDate: "",
    farmName: "",
    farmAddress: "",
    totalQuantity: "",
    unit: ""
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/lots", formData);
      alert("Lot créé avec succès !");
      setFormData(initialState);
    } catch (error) {
      alert("Erreur lors de la création du lot");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>FSMA - Création Lot Légumes</h2>

        <form onSubmit={handleSubmit} className="form">

          <input name="lotCode" placeholder="Lot Code"
            value={formData.lotCode} onChange={handleChange} required />

          <input name="productName" placeholder="Nom Produit"
            value={formData.productName} onChange={handleChange} required />

          <input name="variety" placeholder="Variété"
            value={formData.variety} onChange={handleChange} required />

          <input name="productDescription" placeholder="Description"
            value={formData.productDescription} onChange={handleChange} required />

          <input type="date" name="harvestDate"
            value={formData.harvestDate} onChange={handleChange} required />

          <input name="farmName" placeholder="Nom Ferme"
            value={formData.farmName} onChange={handleChange} required />

          <input name="farmAddress" placeholder="Adresse Ferme"
            value={formData.farmAddress} onChange={handleChange} required />

          <div className="row">
            <input type="number" name="totalQuantity" placeholder="Quantité"
              value={formData.totalQuantity} onChange={handleChange} required />

            <input name="unit" placeholder="Unité (kg/cartons)"
              value={formData.unit} onChange={handleChange} required />
          </div>

          <button type="submit">Créer Lot</button>

        </form>
      </div>
    </div>
  );
}

export default LotForm;