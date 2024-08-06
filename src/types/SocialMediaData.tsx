export interface SocialMediaDataProps {
  commentsData: {
    commentByDays: {
      facebook: {
        label: string;
        positive: number;
        negative: number;
        neutral: number;
      }[];
      instagram: {
        label: string;
        positive: number;
        negative: number;
        neutral: number;
      }[];
      tiktok: {
        label: string;
        positive: number;
        negative: number;
        neutral: number;
      }[];
      youtube: {
        label: string;
        positive: number;
        negative: number;
        neutral: number;
      }[];
    };
    commentByGender: {
      facebook: {
        male: number;
        female: number;
        unknown: number;
      };
      instagram: {
        male: number;
        female: number;
        unknown: number;
      };
      tiktok: {
        male: number;
        female: number;
        unknown: number;
      };
      youtube: {
        male: number;
        female: number;
        unknown: number;
      };
    };
    commentBySentiment: {
      facebook: {
        countSentiment0To350: number;
        countSentiment351To650: number;
        countSentiment651To1000: number;
        sentimentAverage: number;
        totalSentiment: number;
      };
      instagram: {
        countSentiment0To350: number;
        countSentiment351To650: number;
        countSentiment651To1000: number;
        sentimentAverage: number;
        totalSentiment: number;
      };
      tiktok: {
        countSentiment0To350: number;
        countSentiment351To650: number;
        countSentiment651To1000: number;
        sentimentAverage: number;
        totalSentiment: number;
      };
      youtube: {
        countSentiment0To350: number;
        countSentiment351To650: number;
        countSentiment651To1000: number;
        sentimentAverage: number;
        totalSentiment: number;
      };
    };
    commentTime: {
      facebook: {
        name: string;
        value: number;
      }[];
      instagram: {
        name: string;
        value: number;
      }[];
      tiktok: {
        name: string;
        value: number;
      }[];
      youtube: {
        name: string;
        value: number;
      }[];
    };
    currentSentiment: {
      facebook: number | null;
      instagram: number | null;
      tiktok: number | null;
      youtube: number | null;
    };
    engagementByHour: {
      facebook: {
        four_am_to_ten_am: number;
        ten_am_to_two_pm: number;
        two_pm_to_six_pm: number;
        six_pm_to_nine_pm: number;
        nine_pm_to_midnight: number;
        midnight_to_four_am: number;
      };
      instagram: {
        four_am_to_ten_am: number;
        ten_am_to_two_pm: number;
        two_pm_to_six_pm: number;
        six_pm_to_nine_pm: number;
        nine_pm_to_midnight: number;
        midnight_to_four_am: number;
      };
      tiktok: {
        four_am_to_ten_am: number;
        ten_am_to_two_pm: number;
        two_pm_to_six_pm: number;
        six_pm_to_nine_pm: number;
        nine_pm_to_midnight: number;
        midnight_to_four_am: number;
      };
      youtube: {
        four_am_to_ten_am: number;
        ten_am_to_two_pm: number;
        two_pm_to_six_pm: number;
        six_pm_to_nine_pm: number;
        nine_pm_to_midnight: number;
        midnight_to_four_am: number;
      };
    };
    engagers: {
      facebook: {
        comments: number;
        followers: number;
        id: string;
        negativeComments: number;
        neutralComments: number;
        positiveComments: number;
        sentiment: number;
        userName: string;
      }[];
      instagram: {
        comments: number;
        followers: number;
        id: string;
        negativeComments: number;
        neutralComments: number;
        positiveComments: number;
        sentiment: number;
        userName: string;
      }[];
      tiktok: {
        comments: number;
        followers: number;
        id: string;
        negativeComments: number;
        neutralComments: number;
        positiveComments: number;
        sentiment: number;
        userName: string;
      }[];
      youtube: {
        comments: number;
        followers: number;
        id: string;
        negativeComments: number;
        neutralComments: number;
        positiveComments: number;
        sentiment: number;
        userName: string;
      }[];
    };
    sentimentEvolution: {
      facebook: {
        label: string;
        value: number;
      }[];
      instagram: {
        label: string;
        value: number;
      }[];
      tiktok: {
        label: string;
        value: number;
      }[];
      youtube: {
        label: string;
        value: number;
      }[];
    };
    wordCloud: {
      facebook: {
        emojis: {
          emoji: string;
          quantity: number;
          sentimentSum: number;
          sentimentAvg: number;
        }[];
        words: {
          word: string;
          quantity: number;
          sentimentSum: number;
          sentimentAvg: number;
        }[];
      };
      instagram: {
        emojis: {
          emoji: string;
          quantity: number;
          sentimentSum: number;
          sentimentAvg: number;
        }[];
        words: {
          word: string;
          quantity: number;
          sentimentSum: number;
          sentimentAvg: number;
        }[];
      };
      tiktok: {
        emojis: {
          emoji: string;
          quantity: number;
          sentimentSum: number;
          sentimentAvg: number;
        }[];
        words: {
          word: string;
          quantity: number;
          sentimentSum: number;
          sentimentAvg: number;
        }[];
      };
      youtube: {
        emojis: {
          emoji: string;
          quantity: number;
          sentimentSum: number;
          sentimentAvg: number;
        }[];
        words: {
          word: string;
          quantity: number;
          sentimentSum: number;
          sentimentAvg: number;
        }[];
      };
    };
  };
  followersEvolution: {
    facebook: {
      date: string;
      followers: number;
    }[];
    instagram: { date: string; followers: number }[];
    tiktok: { date: string; followers: number }[];
    youtube: { date: string; followers: number }[];
  };
  posts: {
    facebook: {
      commentCount: number;
      date: string;
      engagement: number;
      id: string;
      like: number;
      percentage: number;
      politician_id: string;
      sentiment: number;
      shares: number;
      text: string;
      thumbnail: string;
      url: string;
      comments: {
        authorGender: string;
        date: string;
        engager: boolean | null;
        facebookEngagerId: string | null;
        id: string;
        likeCount: number;
        politician_id: string;
        postUrl: string;
        post_id: string;
        sentimentAnalysis: number;
        text: string;
        username: string;
      }[];
    }[];
    instagram: {
      commentCount: number;
      created_at: string;
      description: string;
      engagement: number;
      id: string;
      imgUrl: string;
      like: number;
      percentage: number;
      playCount: number;
      politician_id: string;
      postId: string;
      postUrl: string;
      pubDate: string;
      sentiment: number;
      text: string;
      url: string;
      username: string;
      viewCount: number;
      comments: {
        authorGender: string;
        engager: boolean | null;
        id: string;
        instagramEngagerId: string | null;
        likeCount: number;
        ownerProfilePicUrl: string;
        politician_id: string;
        post_id: string;
        sentimentAnalysis: number;
        text: string;
        timestamp: string;
        username: string;
      }[];
    }[];
    tiktok: {
      commentCount: number;
      date: string;
      engagement: number;
      id: string;
      like: number;
      percentage: number;
      playCount: number;
      politician_id: string;
      sentiment: number;
      shares: number;
      text: string;
      url: string;
      comments: {
        authorGender: string;
        date: string;
        engager: {
          createdAt: string;
          fans: number;
          heart: number;
          id: string;
          name: string;
          updatedAt: string;
          username: string;
        } | null;
        id: string;
        likeCount: string;
        politician_id: string;
        replyCount: number;
        sentimentAnalysis: number;
        text: string;
        tiktokEngagerId: string | null;
        username: string;
        video_id: string;
      }[];
    }[];
    youtube: {
      commentCount: number;
      created_at: string;
      date: string;
      description: string;
      duration: string;
      engagement: number;
      id: string;
      imgUrl: string;
      like: number;
      percentage: number;
      politician_id: string;
      sentiment: number | null;
      text: string;
      title: string;
      url: string;
      views: number;
    }[];
  };
}
