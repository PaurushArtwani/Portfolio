import { useState } from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import SectionHeading from "../../BuildingBlocks/SectionHeading";

const Portfolio = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("education.json").then((education) => {
      education.json().then((education) => {
        setData(education);
      });
    });
  }, []);
  return (
    <>
      <SectionHeading
        subtitle={"What I Do ?"}
        title={"Education"}
      ></SectionHeading>

      <div className="row portfolio p-5">
        {data &&
          data.education.map((record) => {
            return (
              <card key={record.id} className="col-md-3 portfolio-card">
                <Card>
                  <Card.Body className="text-center">
                    <img src={record.schoolimage} className="school-logo" />
                    <h3 className="tittle text-center py-3">{record.stream}</h3>
                    <h6 className="tittle text-center">
                      {record.institutionname}&nbsp;({record.year})
                    </h6>
                  </Card.Body>
                </Card>
              </card>
            );
          })}
      </div>
    </>
  );
};

export default Portfolio;
