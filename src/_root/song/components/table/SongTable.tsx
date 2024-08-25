import { FC, useMemo } from "react";
import {
  useMaterialReactTable,
  MaterialReactTable,
} from "material-react-table";
import { useDispatch } from "react-redux";

import { MdMusicNote } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { songColumns } from "./_column ";
import {
  ActionsCellWrapper,
  TableTopToolBarContainer,
} from "../../song.styles";
import { Button, ActionsCell } from "../../../../components/shared/index";
import { SongModel } from "../../../../types/model/song.model";
import { openModal } from "../../../../redux/slice/ui/uiSlice";
import { SONGMODALS } from "../../../../types/enum/modal.enum";
import { getDefaultMRTOptions } from "../../../../lib/utils/getDefaultMRTOption";
import { TableProps } from "../../../../types/props/table.props";

import DeleteAdminAlert from "../alerts/DeleteSongAlert";
import { setSelectedSong } from "../../../../redux/slice/song/songSlice";

const defaultMRTOptions = getDefaultMRTOptions<SongModel>();

const SongTable: FC<TableProps<SongModel>> = ({ data, isLoading }) => {
  const columns = useMemo(() => songColumns, []);
  const dispatch = useDispatch();

  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    columns,
    data: data || [],
    initialState: {
      ...defaultMRTOptions.initialState,
      showColumnFilters: false,
    },
    state: {
      isLoading,
    },
    enablePagination: false,
    enableRowActions: true,
    enableRowNumbers: true,
    rowNumberDisplayMode: "original",
    renderTopToolbarCustomActions: () => (
      <TableTopToolBarContainer>
        <Button
          title="Add Song"
          type="button"
          Icon={MdMusicNote}
          highlight
          onClick={() => dispatch(openModal(SONGMODALS.ADD_SONG))}
        />
      </TableTopToolBarContainer>
    ),
    renderToolbarInternalActions: () => <></>,
    renderRowActions: ({ row }) => (
      <ActionsCellWrapper>
        <ActionsCell
          title={`Edit`}
          Icon={FaEdit}
          onClick={() => {
            dispatch(setSelectedSong(row.original));
            dispatch(openModal(SONGMODALS.UPDATE_SONG));
          }}
        />
        <DeleteAdminAlert songId={row.original._id} />
      </ActionsCellWrapper>
    ),
  });

  return <MaterialReactTable table={table} />;
};

export default SongTable;
