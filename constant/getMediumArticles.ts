import axios from "axios";
import parse from "date-fns/parse";

interface MediumArticle {
  title: string;
  thumbnail: string;
  guid: string;
  pubDate: string;
  description: string;
  categories: string;
}

const shortenDescription = (description: string) => {
  const defaultContinue = " Continue reading on Medium »";

  description = description
    ?.replace(/<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm, "")
    .substring(0, 100);
  if (description.length <= 100 - defaultContinue.length) {
    description += defaultContinue;
  }
  description += "...";

  return description;
};

const getMediumArticles = async ({ username }: { username: string }) => {
  try {
    console.log({ username });
    const { data } = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
    );

    let { items } = data || {};

    const article = items.map(
      ({ title, thumbnail, guid, pubDate, description, categories }: MediumArticle) => {
        return {
          title: title,
          thumbnail: thumbnail,
          url: guid,
          date: parse(pubDate, "yyyy-MM-dd HH:mm:ss", new Date()).toString(),
          description: shortenDescription(description),
          categories: categories,
        };
      }
    );

    return article;
  } catch (err) {
    console.log(err);
  }
};

export default getMediumArticles;
