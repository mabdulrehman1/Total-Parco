import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

const DataTable = () => {
  const rows = [
    {
      id: 1,
      no: 1,
      user: "John Doe",
      category: "Admin",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      image: "https://via.placeholder.com/50", // Placeholder image for John Doe
    },
    {
      id: 2,
      no: 2,
      user: "Jane Smith",
      category: "Manager",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      image: "https://via.placeholder.com/50", // Placeholder image for Jane Smith
    },
    {
      id: 3,
      no: 3,
      user: "Mike Johnson",
      category: "User",
      email: "mikejohnson@example.com",
      phone: "555-123-4567",
      image: "https://via.placeholder.com/50", // Placeholder image for Mike Johnson
    },
    {
      id: 4,
      no: 4,
      user: "Emily Davis",
      category: "User",
      email: "emilydavis@example.com",
      phone: "777-888-9999",
      image: "https://via.placeholder.com/50", // Placeholder image for Emily Davis
    },
    {
      id: 5,
      no: 5,
      user: "Alex Brown",
      category: "User",
      email: "alexbrown@example.com",
      phone: "111-222-3333",
      image: "https://via.placeholder.com/50", // Placeholder image for Alex Brown
    },
  ];

  const columns = [
    {
      field: "no",
      headerName: "No#",
      width: 100,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt={params.row.user}
            src={params.row.image}
            sx={{ marginRight: "8px" }}
          />
          {params.row.user}
        </div>
      ),
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "phone",
      headerName: "Phone Numbers",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <div>
          <button
            style={{ marginRight: "8px" }}
            onClick={() => handleEdit(params.row.id)}
          >
            <EditIcon />
          </button>
          <button
            style={{ marginRight: "8px" }}
            onClick={() => handleView(params.row.id)}
          >
            <VisibilityIcon />
          </button>
          <button onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ];

  const handleEdit = (id) => {
    console.log("Edit user with ID:", id);
  };

  const handleView = (id) => {
    console.log("View user with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete user with ID:", id);
  };

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableColumnMenu
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
