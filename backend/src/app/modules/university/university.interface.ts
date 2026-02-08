export interface University {
  id: string;
  universityName: string;
  country: string;
  location: string;
  tuitionFee: number;
  ranking: number;
  establishedYear: number;
  createdAt: Date;
  updatedAt: Date;
}

export type Filters = {
  country?:string;
  location?: string ;
  minFee?: number;
  maxFee?: number;
  minRank?: number;
  maxRank?: number;
  minYear?: number;
  maxYear?: number;
};


export type Pagination = {
  page: number;
  limit: number;
};
