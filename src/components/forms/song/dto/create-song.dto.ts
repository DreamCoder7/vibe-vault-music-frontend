interface CreateSongDto {
  title: string;
  artist: string;
  album: string;
  genre: string;
  duration: string;
  lyrics?: string;
  year?: string;
  _id?: string;
}

export type { CreateSongDto };
