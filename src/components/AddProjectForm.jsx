 import { useState } from "react";

function AddProjectForm({ addProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) return;

    addProject(formData);

    setFormData({
      title: "",
      description: "",
      image: "",
      category: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Project</h2>

      <input
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProjectForm;