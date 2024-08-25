import { object, string } from "yup";

const LoginSchema = object().shape({
  username: string().required(),
  password: string().required(),
});

const SongSchema = object().shape({
  title: string().required(),
  artist: string().required(),
  album: string().required(),
  genre: string().required(),
  duration: string().required(),
  lyrics: string().required(),
});

export { LoginSchema, SongSchema };
