
interface FileType {
  id: number;
  name: string;
  size: number;
  created: string;
  path: string;
}

interface FolderType {
  id: number;
  name: string;
  created: string;
  files: FileType[]
}

export interface DriveType {
  id: number | null;
  ownerId: number | null;
  folders: FolderType[] | null;
  files: FileType[] | null;
}