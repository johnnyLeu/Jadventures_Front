import React, { useState } from "react";

const PatronLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Effettua una richiesta API per verificare le credenziali
      const response = await fetch("patronlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      // Controlla la risposta del server
      if (response.ok) {
        // Se la risposta è ok, l'accesso è avvenuto con successo
        console.log("Accesso riuscito!");
      } else {
        // Se la risposta non è ok, gestisci l'errore
        console.error("Errore durante l'accesso:", response.statusText);
      }
    } catch (error) {
      console.error("Errore durante la richiesta API:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default PatronLogin;
