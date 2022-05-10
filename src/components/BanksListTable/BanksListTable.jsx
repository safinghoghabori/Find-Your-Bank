import { Container, Spinner, Table } from "react-bootstrap";
import Paginations from "../../utils/Paginations";
import { useNavigate } from "react-router-dom";

const BanksListTable = (props) => {
  const {
    banksData,
    loading,
    banksPerPage,
    totalBanks,
    handlePageChange,
    selectedCity,
    currentPage,
    changeBanksPerPage,
  } = props;
  const navigate = useNavigate();

  // Redirect user to perticular bank details
  const handleBankDetails = (selectedCity, ifsc) => {
    navigate(`/bank-details/${selectedCity}/${ifsc}`);
  };

  // Change total entries to be displayed
  const handleOnChange = (e) => {
    // Fix input number when its blank to avoid crashing of webpage
    if (e.target.value === "" || e.target.value == 0) e.target.value = 10;

    changeBanksPerPage(e.target.value);
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            marginTop: "300px",
            justifyContent: "center",
          }}
        >
          <Spinner animation="border" />
        </div>
      ) : (
        <Container>
          <Table
            striped
            bordered
            hover
            size="sm"
            responsive
            style={{ marginTop: "100px" }}
          >
            <thead>
              <tr>
                <th>Bank</th>
                <th>IFSC</th>
                <th>Branch</th>
                <th>Bank ID</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {banksData.map((bank, i) => (
                <tr
                  key={i}
                  onClick={() => handleBankDetails(selectedCity, bank.ifsc)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{bank.bank_name}</td>
                  <td>{bank.ifsc}</td>
                  <td>{bank.branch}</td>
                  <td>{bank.bank_id}</td>
                  <td>{bank.address}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <input
            type="number"
            defaultValue={10}
            min={10}
            onChange={handleOnChange}
          />

          <Paginations
            banksPerPage={banksPerPage}
            totalBanks={totalBanks}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </Container>
      )}
    </>
  );
};

export default BanksListTable;
