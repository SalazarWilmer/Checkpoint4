import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const API = "https://my-json-server.typicode.com/typicode/demo/posts";

  const fetchData = async () => {
    try {
      const response = await axios.get(API);
      console.log(response.data, "Fetch");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postData = async () => {
    try {
      const response = await axios.post(API, {
        id: 12,
        title: "post 12",
      });
      console.log(response.data, "Post");
    } catch (error) {
      console.error("Error posting data", error);
    }
  };

  const updateData = async () => {
    try {
      const response = await axios.put(`${API}/2`, {
        title: "title 5",
      });
      console.log(response.data, "Update");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const deleteData = async () => {
    try {
      const response = await axios.delete(`${API}/1`);
      console.log(response.data, "Delete");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    postData();
    updateData();
    deleteData();
  }, []);

  return <div className="App">
    
  </div>;
}

export default App;
