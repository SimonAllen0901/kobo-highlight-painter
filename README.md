# kobo-highlight-painter
Export your Kobo e-reader highlights into a Markdown file.


## Steps to Use

1. **Connect the Kobo Reader**: Connect your Kobo e-reader to your computer via USB.
2. **Access the Hidden Folder**: Enter the `.kobo` folder.
3. **Copy Database File**: Locate the `KoboReader.sqlite` file and copy it to the root directory of this project. Note that this is just for a backup of the database and won't modify any content on your reader.
4. **Disconnect the Device**: Safely disconnect your e-reader from the computer.
5. **Install Dependencies**: Run `npm i` in the project root directory to install the necessary dependencies.
6. **Run the Script**: Extract notes by executing `npm run start`.

After completing these steps, you should find the Markdown file in the `export` folder.
