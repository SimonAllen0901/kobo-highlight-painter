const db = require("better-sqlite3")("KoboReader.sqlite");
const fs = require("fs");
const path = require("path");
const directory = "./export";

const getDBQuery = {
  bookList:
    "SELECT DISTINCT content.*" +
    "FROM Bookmark INNER JOIN content " +
    "ON Bookmark.VolumeID = content.ContentID " +
    "ORDER BY content.Title",
  highlights:
    "SELECT Bookmark.* FROM Bookmark " +
    "INNER JOIN content ON Bookmark.VolumeID = content.ContentID " +
    "WHERE content.ContentID = ? " +
    "ORDER BY content.DateCreated DESC",
};

async function exportMarkdowns() {
  const bookList = db.prepare(getDBQuery.bookList).all();

  for (book of bookList) {
    const title = book.Title;
    const attribution = book.Attribution;
    console.log("book", book);
    try {
      const filePath = path.join(directory, `KOBO 註記：${title}.md`);
      let stringData = `# ${title}\n\n`;
      stringData += `### 作者： ${attribution}\n\n`;

      const highlightsList = db
        .prepare(getDBQuery.highlights)
        .all(book.ContentID);

      function convertToMarkdown(highlightsList) {
        highlightsList.forEach((highlight) => {
          stringData += `> ${highlight.Text}\n\n`;
        });
        return stringData;
      }

      const markdownContent = convertToMarkdown(highlightsList);

      fs.mkdir(directory, { recursive: true }, (err) => {
        if (err) {
          return console.error(err);
        }

        fs.writeFile(filePath, markdownContent, (err) => {
          if (err) throw err;
          console.log(`輸出 markdown 註記： ${title}`);
        });
      });
    } catch (error) {
      console.log(`Error with ${title}: `, error);
    }
  }
}

exportMarkdowns();
