import { type MRT_RowData, type MRT_TableOptions } from "material-react-table";

export const mrtStyles = (width?: string) => {
  const muiTablePaperProps = {
    elevation: 0,
    sx: {
      borderRadius: "20px",
      padding: "20px",
      display: "grid",
      overflow: "visible",

      ":hover": {
        boxShadow: "#fff",
      },
    },
  };

  const muiTableBodyCellProps = {
    sx: {
      border: "none",
      fontWeight: "bold",
      fontSize: "12px",
      color: "#888",
      zIndex: -1,

      ":last-child": {
        width: width ? width : "200px",
      },
    },
  };

  const muiTableHeadCellProps = {
    sx: {
      border: "none",
      textTransform: "uppercase",
      color: "#464E5F",

      ":last-child": {
        width: width ? width : "200px",
      },
    },
  };

  return { muiTablePaperProps, muiTableBodyCellProps, muiTableHeadCellProps };
};

export const getDefaultMRTOptions = <TData extends MRT_RowData>(): Partial<
  MRT_TableOptions<TData>
> => ({
  initialState: { showColumnFilters: true },
  columnFilterDisplayMode: "popover",
  manualPagination: true,
  muiTablePaperProps: { ...mrtStyles().muiTablePaperProps },
  keepPinnedRows: false,
  positionActionsColumn: "last",
  positionGlobalFilter: "left",
  muiSearchTextFieldProps: {
    sx: { minWidth: "300px" },
    variant: "outlined",
  },
  muiPaginationProps: {
    color: "standard",
    shape: "rounded",
    showRowsPerPage: false,
  },
  muiTableContainerProps: {
    sx: {
      zIndex: 0,
    },
  },
  muiTopToolbarProps: {
    sx: {
      overflow: "visible",
      "& > div": {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        alignItems: "center",
        paddingBottom: "25px",
        paddingTop: "0px",

        "& > div:first-of-type": {
          justifySelf: "end",
        },

        "& > div:last-child": {
          gridRow: "1",
          justifySelf: "start",
        },

        "& svg": { color: "#1f2937" },
      },
    },
  },
  muiBottomToolbarProps: {
    sx: {
      zIndex: "0",
    },
  },
  muiTableBodyCellProps: {
    sx: {
      ...mrtStyles().muiTableBodyCellProps.sx,
      color: "#888",
    },
  },

  muiTableHeadRowProps: {
    sx: {
      backgroundColor: "#F9FAFB",
      border: "6px, 6px, 0px, 0px",
      padding: "10px 20px",
    },
  },
  muiTableHeadCellProps: {
    sx: {
      ...mrtStyles().muiTableHeadCellProps.sx,
      color: "#464E5F",
    },
  },

  paginationDisplayMode: "pages",
  defaultColumn: {
    //you can even list default column options here
  },
  mrtTheme: {
    baseBackgroundColor: "#fff",
  },
});
