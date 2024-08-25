import { FC, useEffect, useState } from "react";
import { useFormik } from "formik";

import { Button, Form, FormField, Input, Label } from "./song-form.styles";
import { CreateSongDto } from "./dto/create-song.dto";
import { SongSchema } from "../../../constants/FormSchema";
import { FormProps } from "../../../types/props/form.props";
import { SongModel } from "../../../types/model/song.model";

const AddSongForm: FC<FormProps<SongModel>> = ({ data }) => {
  const [updateSong, setUpdateSong] = useState<CreateSongDto>({
    title: data?.title ?? "",
    album: data?.album ?? "",
    artist: data?.artist ?? "",
    genre: data?.genre ?? "",
    duration: data?.duration ?? "",
  });

  const formik = useFormik({
    initialValues: updateSong,
    validationSchema: SongSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    if (data) {
      setUpdateSong(data);
    }
  }, []);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormField>
        <Label htmlFor="title">TItle: </Label>
        <Input type="text" id="title" {...formik.getFieldProps("title")} />
      </FormField>
      <FormField>
        <Label htmlFor="album">Album: </Label>
        <Input type="text" id="album" {...formik.getFieldProps("album")} />
      </FormField>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default AddSongForm;
