import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../bootapi/server";
import { toast } from "react-toastify";
import Song from "./Song";

const AllSongs = () => {
  useEffect(() => {
    document.title = "All-Songs";
  }, []);
  const [Songs, setSongs] = useState([]);

  useEffect(() => {
    getSongsFromServer();
  }, []);

  //get song from server
  const getSongsFromServer = () => {
    axios.get(`${base_url}/songs`).then(
      (response) => {
        console.log(response);
        toast.success("Songs Loaded !", {
          toastId: "success1",
        });
        setSongs(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong", {
          toastId: "error1",
        });
      }
    );
  };
  return (
    <div>
      <h1 className="text-center">List of Songs</h1>
      {setSongs.length > 0
        ? Songs.map((item) => <Song key={item.id} song={item} />)
        : "No songs Found"}
    </div>
  );
};

export default AllSongs;
