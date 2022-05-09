import { Container, Table } from "react-bootstrap";
import Paginations from "../../utils/Paginations";

const BanksListTable = (props) => {
  const { banksData, loading, banksPerPage, totalBanks, handlePageChange } =
    props;

  return (
    <>
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
              <tr key={i}>
                <td>{bank.bank_name}</td>
                <td>{bank.ifsc}</td>
                <td>{bank.branch}</td>
                <td>{bank.bank_id}</td>
                <td>{bank.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Paginations
          banksPerPage={banksPerPage}
          totalBanks={totalBanks}
          handlePageChange={handlePageChange}
        />
      </Container>
    </>
  );
};

export default BanksListTable;
