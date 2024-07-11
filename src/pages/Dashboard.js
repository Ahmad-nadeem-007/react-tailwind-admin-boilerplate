import React from "react";
import Sidebar from "../components/layout/Sidebar";
import DataTable from "react-data-table-component";

const Dashboard = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    { id: 1, title: "Beetlejuice", year: "1988" },
    { id: 2, title: "Ghostbusters", year: "1984" },
    { id: 3, title: "Batman", year: "1989" },
    { id: 4, title: "Back to the Future", year: "1985" },
    { id: 5, title: "The Terminator", year: "1984" },
    { id: 6, title: "The Godfather", year: "1972" },
    { id: 7, title: "The Shawshank Redemption", year: "1994" },
    { id: 8, title: "Pulp Fiction", year: "1994" },
    { id: 9, title: "The Dark Knight", year: "2008" },
    { id: 10, title: "Fight Club", year: "1999" },
    { id: 11, title: "Forrest Gump", year: "1994" },
    { id: 12, title: "Inception", year: "2010" },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        background: "#e9ecef",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };
  return (
    <Sidebar>
        <div className="mt-2">
            <p className="font-semibold text-xl mb-2">Dashboard</p>
        </div>
      <div className="p-3 border rounded-lg">
        <DataTable
        //   title="Dashboard"
          responsive
          columns={columns}
          data={data}
          customStyles={customStyles}
          pagination
          paginationPerPage={4}
          paginationRowsPerPageOptions={[5, 10, 15]}
        />
      </div>
    </Sidebar>
  );
};

export default Dashboard;
