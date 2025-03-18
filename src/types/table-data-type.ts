export interface TableProps {
  tableData: {
    headers: readonly string[];
    data: readonly {
      iconPath: string;
      "File name": string;
      "File size": string;
      "Date uploaded": string;
      "Last updated": string;
      "Uploaded by": string;
    }[];
  };
}