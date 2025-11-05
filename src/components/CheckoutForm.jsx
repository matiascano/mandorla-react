import { useState } from "react";

export default function CheckoutForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.handleCheckout(formData);
  }

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
  }

  function clearForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Ingresá tus datos</h4>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          onChange={handleChange}
          value={formData.name}
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          value={formData.email}
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Teléfono:</label>
        <input
          onChange={handleChange}
          value={formData.phone}
          type="tel"
          id="phone"
          name="phone"
          required
        />
      </div>
      <div>
        <label htmlFor="address">Dirección:</label>
        <input
          onChange={handleChange}
          value={formData.address}
          type="text"
          id="address"
          name="address"
          required
        />
      </div>
      <button type="submit">Confirmar</button>
      <button type="button" onClick={clearForm}>
        Borrar datos del formulario
      </button>
    </form>
  );
}
