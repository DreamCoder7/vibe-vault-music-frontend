import { MRT_ColumnDef } from "material-react-table";

import { SongModel } from "../../../../types/model/song.model";

/**
 * The Column for the Song Table
 */
const songColumns: MRT_ColumnDef<SongModel>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Artist",
    accessorKey: "artist"
  },
  {
    header: "Album",
    accessorKey: "album"
  },
  {
    header: "Genre",
    accessorKey: "genre"
  },
  {
    header: "Duration",
    accessorKey: "duration",
    Cell: ({ cell }) => `${cell.row.original.duration} seconds`
  },
  {
    header: "Year",
    accessorKey: "year"
  },
  {
    header: "Lyrics",
    accessorKey: "lyrics"
  }
];

export { songColumns };
