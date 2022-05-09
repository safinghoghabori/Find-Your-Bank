import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const BankDetails = () => {
  const { bank, ifsc } = useParams();
  const [bankData, setBankData] = useState(null);

  // Find record based on ifsc code
  const fetchBank = (bank, ifsc) => {
    const allBanks = JSON.parse(localStorage.getItem(bank));
    const res = allBanks?.filter((bnk) => bnk.ifsc === ifsc);

    setBankData(res[0]);
  };

  useEffect(() => {
    fetchBank(bank, ifsc);
  }, []);

  return (
    <Card
      border="dark"
      style={{ width: "28rem", textAlign: "center", margin: "0 auto" }}
    >
      <Card.Header>{bankData?.bank_name}</Card.Header>
      <Card.Body>
        <Card.Text>IFSC: {bankData?.ifsc}</Card.Text>
        <Card.Text>Branch: {bankData?.branch}</Card.Text>
        <Card.Text>Id: {bankData?.bank_id}</Card.Text>
        <Card.Text>Address: {bankData?.address}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BankDetails;
