import swal from "sweetalert";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteSongRequest } from "../../../../redux/slice/song/songSlice";
import { ActionsCell } from "../../../../components/shared";

const DeleteAdminAlert = ({ songId }: { songId: string }) => {
  const dispatch = useDispatch();
  console.log(songId);

  const handleDeleteAdmin = async () => {
    const value = await swal({
      title: "Are you sure you want to delete this song?",
      text: "Once deleted, you will not be able to recover this song!",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
      closeOnClickOutside: true,
      className: "dark:bg-gray-800",
    });

    if (value) {
      dispatch(deleteSongRequest(songId));
    }
  };

  return (
    <ActionsCell title={`Delete`} Icon={MdDelete} onClick={handleDeleteAdmin} />
  );
};

export default DeleteAdminAlert;
