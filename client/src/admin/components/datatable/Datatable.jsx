import "./datatable.scss";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useSelector } from "react-redux";
// import { categoriesAll } from "../../../redux/reducer/getCategorie";
import { allUserRegisters } from "../../../redux/reducer/getAllUsers";

const Datatable = () => {
  let allUser = useSelector(allUserRegisters);
  const [data, setData] = useState(allUser);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // let allUser = useSelector(allUserRegisters);
  // console.log(allUser);
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Acción",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="2" style={{ textDecoration: "none" }}>
              <div className="viewButton">Ver</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Deshabilitar
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Usuarios
        <Link to="new" className="link">
          Agregar usuario
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[9]}
        // checkboxSelection
        localeText={{
          toolbarColumns: "Columnas",
          toolbarFilters: "Filtros",
          toolbarDensity: "Densidad",
          toolbarExport: "Exportar",
          columnMenuUnsort: "No clasificado",
          columnMenuSortAsc: "Ascendente ",
          columnMenuSortDesc: "Descendente",
          columnMenuFilter: "Filtro",
          columnMenuHideColumn: "Ocultar",
          columnMenuShowColumns: "Mostrar columnas"
        }}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default Datatable;
