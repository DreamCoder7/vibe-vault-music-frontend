import PageTitle from "../../components/shared/PageTitle";
import SongTable from "./components/table/SongTable";

import { SongSection, TableContainer } from "./song.styles";
import Modal from "../../components/shared/Modal";
import AddSongForm from "../../components/forms/song/AddSongForm";

const SongPage = () => {
  return (
    <SongSection>
      <PageTitle>Songs</PageTitle>
      <TableContainer>
        <SongTable />
      </TableContainer>

      <Modal
        title="Add Song"
        isOpen={false}
        onClose={() => {}}
        children={
          <AddSongForm data={undefined} isLoading={false} refetch={() => {}} />
        }
      />
      <Modal
        title="Update Song"
        isOpen={false}
        onClose={() => {}}
        children={
          <AddSongForm
            data={undefined}
            isLoading={false}
            refetch={() => {}}
            isFormForUpdate={true}
          />
        }
      />
    </SongSection>
  );
};

export default SongPage;
