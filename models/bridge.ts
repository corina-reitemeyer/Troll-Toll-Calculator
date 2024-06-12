export interface Bridge {
  id: number;
  name: string;
  location: string;
  type: string;
  year_built: number;
  length_meters: string;
  lanes?: number | null;
  added_by_user_id: number;
  active_user_id: number
}