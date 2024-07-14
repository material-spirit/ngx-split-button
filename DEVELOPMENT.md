1. Clone the repo.
2. Run commands from root directory.
3. Build library project with watch option - `yarn watch`.
   * The library gets built to `dist\split-button` folder.
3. Run test-app - `yarn serve`.
   * The app uses `@material-spirit/ngx-split-button` library from `dist\split-button` folder.
   * It is achieved by configuring `compilerOptions/paths` in `tsconfig.json`.

Now, every time you change code in the library project, it gets auto-rebuilt and after that, test-app gets auto-rebuilt. Thanks for the configuration ideas to [this article](https://medium.com/p/87959301d3d3).
