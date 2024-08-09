export interface MentionsDataProps {
  mentions: {
    commentsByGender: {
      male: number;
      female: number;
      unknown: number;
    };
    commentsBySentiment: {
      countSentiment0To350: number;
      countSentiment351To650: number;
      countSentiment651To1000: number;
      sentimentAverage: number;
      totalSentiment: number;
    };
    mentionQuantity: {
      news: number;
      instagram: number;
    };
    mentionsByFount: {
      name: string;
      quantity: number;
      sentiment: string; // era pra ser number
    }[];
    posts: {
      instagram: {
        commentCount: number;
        description: string;
        id: string;
        imgUrl: string;
        likeCount: number;
        ownerFullName: string;
        ownerUsername: string;
        playCount: number;
        postId: string;
        postUrl: string;
        pubDate: string;
        sentimentAnalysis: number;
        text: string;
        url: string;
        username: string;
        viewCount: number;
        comments: {
          authorGender: string;
          id: string;
          likeCount: number;
          ownerProfilePicUrl: string;
          post_id: string;
          sentimentAnalysis: number;
          text: string;
          timestamp: string;
          username: string;
        }[];
      }[];
      news: {
        date: string;
        sentiment: number;
        sentimentClassification: string;
        title: string;
        url: string;
        websiteName: string;
      }[];
    };
    postsByDay: {
      date: string;
      quantity: number;
    }[];
    sentimentEvolution: {
      instagram: {
        label: string;
        value: number;
      }[];
    };
  };
  wordCloud: {
    instagram: {
      words: {
        word: string;
        quantity: number;
        sentimentSum: number;
        sentimentAvg: number;
      }[];
      emojis: {
        emoji: string;
        quantity: number;
        sentimentSum: number;
        sentimentAvg: number;
      };
    };
  };
}

export interface HashtagsMentionsDataProps {
  hashtag: string;
  id: string;
}
