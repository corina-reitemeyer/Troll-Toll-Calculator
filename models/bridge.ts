export interface Bridge {
  id: number;
  name: string;
  location: string;
  type: string;
  yearBuilt: number;
  lengthMeters: string;
  lanes?: number | null;
  added_by_user_id: number;
<<<<<<< HEAD
  active_user_id: number;
  image: string;
}

export interface tollAnalytics {
  id: number
  bridge_id: number
  revenue: number
}
=======
  active_user_id: number
}
>>>>>>> 26226ac0ca3532cf6618449052da46577f6c9977
