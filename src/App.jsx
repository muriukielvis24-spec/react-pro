 
 import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AddProjectForm from "./components/AddProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Creative Landing Page",
      description: "A modern landing page design",
      image: "https://picsum.photos/300/200?random=1",
      category: "Web Design",
    },
    {
      id: 2,
      title: "Mobile App UI",
      description: "Clean mobile interface design",
      image: "https://picsum.photos/300/200?random=2",
      category: "UI/UX",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddProjectForm addProject={addProject} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;