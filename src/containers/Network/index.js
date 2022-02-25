import React from "react";
import axios from "axios";
import keys from "../../configs";
import StyledNetwork from "../../styles/pages/network";
import { useEffect, useState } from "react";

function Network(props) {
  const [data, setData] = useState({});
  const { id } = props.match.params;

  const fetchData = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/network/${id}?api_key=${keys.API_KEY}`);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledNetwork>
      <div className="network__home">
        <div className="container">
          <img src={keys.IMG_URL + data?.logo_path} alt={data?.name} />
        </div>
      </div>
    </StyledNetwork>
  );
}

export default Network;
