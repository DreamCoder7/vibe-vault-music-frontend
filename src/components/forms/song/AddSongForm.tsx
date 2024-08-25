import { FC, useEffect } from "react";
import { useFormik } from "formik";
import {
  BtnContainer,
  Button,
  Form,
  FormField,
  Input,
  Label,
  Textarea,
} from "./song-form.styles";
import { SongSchema } from "../../../constants/FormSchema";
import { FormProps } from "../../../types/props/form.props";
import { SongModel } from "../../../types/model/song.model";
import { Button as CustomButton } from "../../shared";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slice/ui/uiSlice";
import {
  createSongRequest,
  updateSongRequest,
} from "../../../redux/slice/song/songSlice";

const AddSongForm: FC<FormProps<SongModel> & { isFormForUpdate?: boolean }> = ({
  data,
  isFormForUpdate,
}) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: data?.title || "",
      album: data?.album || "",
      artist: data?.artist || "",
      genre: data?.genre || "",
      duration: data?.duration || "",
      lyrics: data?.lyrics || "",
      year: data?.year || "",
    },
    validationSchema: SongSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const songYear = values.year ? new Date(values.year) : new Date();
      if (isFormForUpdate && data) {
        dispatch(
          updateSongRequest({
            ...values,
            year: songYear.toString(),
            _id: data._id,
          })
        );
      } else {
        dispatch(
          createSongRequest({
            ...values,
            year: songYear.toString(),
          })
        );
      }
      dispatch(closeModal());
    },
  });

  useEffect(() => {
    if (data) {
      formik.setValues({
        title: data.title,
        album: data.album,
        artist: data.artist,
        genre: data.genre,
        duration: data.duration,
        lyrics: data.lyrics,
        year: data.year,
      });
    }
  }, [data]);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormField>
        <Label htmlFor="title">Title:</Label>
        <Input type="text" id="title" {...formik.getFieldProps("title")} />
      </FormField>
      <FormField>
        <Label htmlFor="album">Album:</Label>
        <Input type="text" id="album" {...formik.getFieldProps("album")} />
      </FormField>
      <FormField>
        <Label htmlFor="artist">Artist:</Label>
        <Input type="text" id="artist" {...formik.getFieldProps("artist")} />
      </FormField>
      <FormField>
        <Label htmlFor="genre">Genre:</Label>
        <Input type="text" id="genre" {...formik.getFieldProps("genre")} />
      </FormField>
      <FormField>
        <Label htmlFor="duration">Duration:</Label>
        <Input
          type="text"
          id="duration"
          {...formik.getFieldProps("duration")}
        />
      </FormField>
      <FormField>
        <Label htmlFor="year">Year:</Label>
        <Input type="text" id="year" {...formik.getFieldProps("year")} />
      </FormField>
      <FormField>
        <Label htmlFor="lyrics">Lyrics:</Label>
        <Textarea id="lyrics" {...formik.getFieldProps("lyrics")} />
      </FormField>

      <BtnContainer>
        <Button type="submit">{isFormForUpdate ? "Update" : "Create"}</Button>
        <CustomButton
          title="Cancel"
          type="button"
          onClick={() => dispatch(closeModal())}
        />
      </BtnContainer>
    </Form>
  );
};

export default AddSongForm;
