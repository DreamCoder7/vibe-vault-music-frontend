import { useMemo } from "react";
import {
  useMaterialReactTable,
  MaterialReactTable,
} from "material-react-table";

import { MdMusicNote } from "react-icons/md";

import { songColumns } from "./_column ";
import { SongModel } from "../../../../types/model/song.model";
import { getDefaultMRTOptions } from "../../../../lib/utils/getDefaultMRTOption";
import { TableTopToolBarContainer } from "../../song.styles";
import { Button } from "../../../../components/shared/index";

const defaultMRTOptions = getDefaultMRTOptions<SongModel>();

const SongTable = () => {
  const columns = useMemo(() => songColumns, []);

  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    columns,
    data: [],
    initialState: {
      ...defaultMRTOptions.initialState,
      showColumnFilters: false,
    },
    state: {},
    enablePagination: false,
    enableRowNumbers: true,
    rowNumberDisplayMode: "original",
    renderTopToolbarCustomActions: () => (
      <TableTopToolBarContainer>
        <Button title="Add Song" type="button" Icon={MdMusicNote} highlight />
      </TableTopToolBarContainer>
    ),
    renderToolbarInternalActions: () => <></>,
  });

  return <MaterialReactTable table={table} />;
};

export default SongTable;
