import React, { useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";

export const FetchingDataFromApi = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    const getResData = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users?page=2");
        const myResData = response.data;
        console.log("Response Data--->", myResData);
        setResData(myResData);
      } catch (error) {
        console.log(error);
      }
    };
    getResData();
  }, []);

  return (
    <div>
      <h1>Fetched Data :</h1>

      {resData.data &&
        resData.data.map((item) => (
          <Card style={{ width: "18rem" }} md={4}>
            <Card.Img variant="top" src={item.avatar} />
            <Card.Body>
              <Card.Title>
                Name : {item.first_name} {item.last_name}
              </Card.Title>
              <Card.Text>
                <p>Id :{item.id}</p>
                <p>email :{item.email}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};
