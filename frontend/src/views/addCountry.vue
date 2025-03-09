<script setup lang="ts">
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid"; 

const formData = ref({
  id: uuidv4(),
  name: "",
  opinion: "",
});

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3001/api/country", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      alert("Data sent successfully!");
      formData.value = { id: uuidv4(), name: "", opinion: "" }; 
      // alert("Failed to send data.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Check the console for details.");
  }
};
</script>

<template>
  <main>
    <h1>Submit Your Opinion</h1>
    <form @submit="handleSubmit">
  
      <input v-model="formData.id" type="hidden" id="id" name="id" />

      <label for="name">Name</label>
      <input v-model="formData.name" type="text" id="name" name="name" required />

      <label for="opinion">Opinion</label>
      <textarea v-model="formData.opinion" id="opinion" name="opinion" rows="4" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </main>
</template>

<style>
main {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color:black;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
  font-weight: bold;
  color: black;
}

input, textarea {
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
}

button {
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  color:black;
}

button:hover {
  background-color: #0056b3;
}
</style>
