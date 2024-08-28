# kobo-highlight-painter
Export your Kobo e-reader highlights into a Markdown file.


## How to Use

1. **Connect the Kobo Reader**: Connect your Kobo e-reader to your computer via USB.
2. **Access the Hidden Folder**: Enter the `.kobo` folder.
3. **Copy Database File**: Locate the `KoboReader.sqlite` file and copy it to the root directory of this project. Note that this is just for a backup of the database and won't modify any content on your reader.
4. **Disconnect the Device**: Safely disconnect your e-reader from the computer.
5. **Install Dependencies**: Run `npm i` in the project root directory to install the necessary dependencies.
6. **Run the Script**: Extract notes by executing `npm run start`.

After completing these steps, you should find the Markdown file in the `export` folder.

## 如何使用

1. 把 Kobo 電子書閱讀器透過 USB 接線到電腦上。
2. 找到閱讀器的根目錄資料夾，根目錄有個隱藏資料夾 `.kobo` 直接點進去。
3. 在 `.kobo` 資料夾中有個檔案 `KoboReader.sqlite`，將它複製到你的本機電腦 `kobo-highlight-painter` 專案的根目錄中。注意是「複製」閱讀器 `.kobo` 中 `KoboReader.sqlite` 到本機，不要「剪下」或作任何會異動到閱讀器`.kobo` 資料夾與 `KoboReader.sqlite` 的操作。
4. 我們只是需要 `KoboReader.sqlite` 這個副本檔案而已，接著就可以解除 Kobo 電子書閱讀器與電腦的連線了。
5. terminal cd 進入 `kobo-highlight-painter` 專案，並 `npm i` 安裝所需的套件。
6. 接著在 terminal `kobo-highlight-painter` 執行 `npm run start`。

等 terminal 跑完就會在 `kobo-highlight-painter` 專案中出現一個 `export` 資料夾，裡頭就有所有你畫線註記的筆記 Markdown 擋案。
