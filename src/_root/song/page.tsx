// SongPage.tsx

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { SONGMODALS } from "../../types/enum/modal.enum";
import { closeModal } from "../../redux/slice/ui/uiSlice";
import { Modal, PageTitle } from "../../components/shared";
import { SongSection, TableContainer } from "./song.styles";
import SongTable from "./components/table/SongTable";
import AddSongForm from "../../components/forms/song/AddSongForm";
import { useEffect, useState } from "react";
import { fetchSongsRequest } from "../../redux/slice/song/songSlice";
import { MRT_PaginationState } from "material-react-table";

const SongPage = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.ui.modal);
  const selectedSong = useSelector(
    (state: RootState) => state.songs.selectedSong
  );

  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { songs, loading } = useSelector((state: RootState) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  return (
    <SongSection>
      <PageTitle>Songs</PageTitle>
      <TableContainer>
        <SongTable
          data={songs}
          isLoading={loading}
          pagination={pagination}
          refetch={() => dispatch(fetchSongsRequest())}
          totalRow={songs.length}
          setPagination={setPagination}
        />
      </TableContainer>

      <Modal
        title="Add Song"
        isOpen={modal.isOpen && modal.type === SONGMODALS.ADD_SONG}
        onClose={() => dispatch(closeModal())}
        children={<AddSongForm data={undefined} isLoading={false} />}
      />
      <Modal
        title="Update Song"
        isOpen={modal.isOpen && modal.type === SONGMODALS.UPDATE_SONG}
        onClose={() => dispatch(closeModal())}
        children={
          <AddSongForm
            data={selectedSong}
            isLoading={false}
            isFormForUpdate={true}
          />
        }
      />
    </SongSection>
  );
};

export default SongPage;
