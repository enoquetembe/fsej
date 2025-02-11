"use client";
import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participateInSpeedMarketing: false,
    company: "",
    productOrService: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Inscrição realizada com sucesso!");
  };

  return (
    <div className="min-h-screen bg-red-50 flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-red-600 mb-8 text-center">
          Inscreva-se para o Evento
        </h1>

        <label className="block mb-4">
          <span className="text-gray-700">Nome</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Digite seu nome completo"
            className="mt-2 w-full p-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-500 shadow-sm text-black"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Digite seu email"
            className="mt-2 w-full p-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-500 shadow-sm text-black"
          />
        </label>

        <label className="flex items-center mb-6">
          <input
            type="checkbox"
            name="participateInSpeedMarketing"
            checked={formData.participateInSpeedMarketing}
            onChange={handleChange}
            className="w-5 h-5 text-red-500 focus:ring-red-400 border-gray-300 rounded"
          />
          <span className="ml-3 text-gray-700">
            Deseja participar do Speed Marketing?
          </span>
        </label>

        {formData.participateInSpeedMarketing && (
          <>
            <label className="block mb-4">
              <span className="text-gray-700">Empresa</span>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nome da empresa"
                className="mt-2  w-full p-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-500 shadow-sm text-black"
              />
            </label>

            <label className="block mb-6">
              <span className="text-gray-700">Produto, Serviço ou Marca</span>
              <input
                type="text"
                name="productOrService"
                value={formData.productOrService}
                onChange={handleChange}
                placeholder="Digite o que pretende promover"
                className="mt-2 w-full p-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-500 shadow-sm text-black"
              />
            </label>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-md"
        >
          Enviar Inscrição
        </button>
      </form>
    </div>
  );
}
