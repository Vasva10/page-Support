export interface ApiFaqResponse {
    data: ApiFaqItem[];
  }
  
  export interface ApiFaqItem {
    id: number;
    attributes: {
      caption: string;
      questions: {
        data: ApiFaqQuestionItem[];
      };
    };
  }
  
  export interface ApiFaqQuestionItem {
    id: number;
    attributes: {
      Caption: string;
      Text: string;
    };
  }