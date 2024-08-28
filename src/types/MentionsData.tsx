export interface MentionsDataProps {
  mentions: {
    commentsByGender: {
      male: number;
      female: number;
      unknown: number;
    };
    staticData: {
      engagement: number;
      mentions: number;
      userRange: number;
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
    engagers: {
      negative: {
        comments: number;
        followers: number;
        id: string;
        negativeComments: number;
        neutralComments: number;
        positiveComments: number;
        sentiment: number;
        userName: string;
      }[];
      positive: {
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
    authors: {
      createdAt: string;
      engagement: number;
      followers: number;
      id: string;
      lastPost: string;
      name: string;
      posts: number;
      sentiment: number;
      updatedAt: string;
      username: string;
    }[];
    influencers: {
      createdAt: string;
      engagement: number;
      followers: number;
      id: string;
      lastPost: string;
      name: string;
      posts: number;
      sentiment: number;
      updatedAt: string;
      username: string;
    }[];
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
  hashtagCloud: {
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
      }[];
    };
  };
}

export interface HashtagsMentionsDataProps {
  hashtagCloud: {
    quantity: number;
    sentimentAvg: number;
    sentimentSum: number;
    word: string;
  }[];
  hashtagMentions: {
    authors: {
      instagram: {
        createdAt: string;
        engagement: number;
        followers: number;
        id: string;
        lastPost: string;
        name: string;
        posts: number;
        sentiment: number;
        updatedAt: string;
        username: string;
      }[];
      tiktok: {
        createdAt: string;
        engagement: number;
        followers: number;
        id: string;
        lastPost: string;
        name: string;
        posts: number;
        sentiment: number;
        updatedAt: string;
        username: string;
      }[];
    };
    commentData: {
      commentByDays: {
        instagram: {
          label: string;
          negative: number;
          neutral: number;
          positive: number;
        }[];
        tiktok: {
          label: string;
          negative: number;
          neutral: number;
          positive: number;
        }[];
      };
      commentByGender: {
        instagram: {
          female: number;
          male: number;
          unknown: number;
        };
        tiktok: {
          female: number;
          male: number;
          unknown: number;
        };
      };
      commentBySentiment: {
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
      };
      currentSentiment: {
        instagram: number;
        tiktok: number;
      };
      engagementByHour: {
        instagram: {
          midnight_to_four_am: number;
          four_am_to_ten_am: number;
          ten_am_to_two_pm: number;
          two_pm_to_six_pm: number;
          six_pm_to_nine_pm: number;
          nine_pm_to_midnight: number;
        };
        tiktok: {
          midnight_to_four_am: number;
          four_am_to_ten_am: number;
          ten_am_to_two_pm: number;
          two_pm_to_six_pm: number;
          six_pm_to_nine_pm: number;
          nine_pm_to_midnight: number;
        };
      };
      engagers: {
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
      };
      sentimentEvolution: {
        instagram: {
          label: string;
          value: number;
        }[];
        tiktok: {
          label: string;
          value: number;
        }[];
      };
    };
    engagers: {
      instagram: {
        negative: {
          comments: number;
          followers: number;
          id: string;
          negativeComments: number;
          neutralComments: number;
          positiveComments: number;
          sentiment: number;
          userName: string;
        }[];
        positive: {
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
      tiktok: {
        negative: {
          comments: number;
          followers: number;
          id: string;
          negativeComments: number;
          neutralComments: number;
          positiveComments: number;
          sentiment: number;
          userName: string;
        }[];
        positive: {
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
    };
    influencers: {
      instagram: {
        createdAt: string;
        engagement: number;
        followers: number;
        id: string;
        lastPost: string;
        name: string;
        posts: number;
        sentiment: number;
        updatedAt: string;
        username: string;
      }[];
      tiktok: {
        createdAt: string;
        engagement: number;
        followers: number;
        id: string;
        lastPost: string;
        name: string;
        posts: number;
        sentiment: number;
        updatedAt: string;
        username: string;
      }[];
    };
    mentionQuantity: {
      instagram: number;
      tiktok: number;
    };
    mentionsByFount: {
      name: string;
      quantity: number;
      sentiment: number;
    }[];
    posts: {
      instagram: {
        commentCount: number;
        comments: {
          authorGender: string;
          hashtagId: string;
          id: string;
          instagramEngagerId: string;
          likeCount: number;
          ownerProfilePicUrl: string;
          post_id: string;
          sentimentAnalysis: number;
          text: string;
          timestamp: string;
          username: string;
        }[];
        description: string;
        hashtagId: string;
        hashtags: string;
        id: string;
        imgUrl: string;
        instagramEngagerId: string | null;
        likeCount: number;
        ownerFullName: string;
        ownerUsername: string;
        playCount: number;
        postId: string;
        postUrl: string;
        pubDate: string;
        sentiment: number;
        sentimentAnalysis: number;
        username: string;
        viewCount: number;
      }[];
      tiktok: {
        authorAvatar: string;
        authorName: string;
        commentCount: number;
        date: string;
        diggCount: number;
        hashtagId: string;
        hashtags: string | null;
        id: string;
        playCount: number;
        sentiment: number | null;
        shareCount: number;
        text: string;
        tiktokEngagerId: string | null;
        url: string;
        comments: {
          text: string;
        }[];
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
      }[];
    };
    tiktok: {
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
      }[];
    };
  };
}
