```sh
git clone https://github.com/flakessp/branding.git
npm install
npm run dev/prod
```
For everyday usage use branding.sh shell script

# To do:

1. ~~Automate app.manifest creation~~
2. Automate css to json
3. Optimize images
4. Minify
5. Optional normalize
6. Get screenshots from various screen sizes
7. Resolve bug for empty css files after sass compile
8. [Functional testing with node, zombie and mocha](http://www.redotheweb.com/2013/01/15/functional-testing-for-nodejs-using-mocha-and-zombie-js.html)
9. Automate index.html #content innerHTML to app/source/html/index.html
9. Automate style.css to app/source/scss/base.scss

## Ideas
1. Move gulp prod to diff folder without unused dev assets. Maybe just add another command for that.

# Варианты
## Bash automatization
Using Bash for creating files and pulling git repository
[Link to tutsplus course](https://code.tutsplus.com/courses/speedy-workflows-with-atom/lessons/command-line-workflow)

## Wanted libs
### Sussy + Breakpoints
[Susy](http://susy.oddbird.net/)

[Breakpoints](http://breakpoint-sass.com/)

### Bundling
[Gulp](http://gulpjs.com/)

[Gulp Tut](https://code.tutsplus.com/tutorials/managing-your-build-tasks-with-gulpjs--net-36910)

[Gulp Habr Tut](https://habrahabr.ru/post/208890/)

[Gulp Scotch Tut](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)

[Gulp Css-Tricks Tut](https://css-tricks.com/gulp-for-beginners/)

[Gulp Smashingmag Tut](https://www.smashingmagazine.com/2014/06/building-with-gulp/)

[Сборка фронтэнда проекта](http://alexfedoseev.com/post/54/frontend-project-build)
[Gulp Arkency](http://blog.arkency.com/2015/03/gulp-modern-approach-to-asset-pipeline-for-rails-developers/)

Automate Injecting code in HTML page
[Gulp Inject](https://www.npmjs.com/package/gulp-inject)

Automate Extractin code from HTML page
[Gulp Extract](https://github.com/FormidableLabs/gulp-html-extract)

[NPM Split](https://www.npmjs.com/package/splitfile)

For further diving google "node file split/extract"

## Automate iOs screenshot taking
[http://arteksoftware.com/easily-launch-the-ios-simulator-from-the-command-line/](Nice CLI for via npm package)
[https://krausefx.com/blog/creating-perfect-app-store-screenshots-of-your-ios-app](Taking screenshots using XCode)
[https://medium.com/@MarcioK/opening-links-on-the-simulator-from-the-terminal-16d67b436e84#.ykyl119hy](Opening links in safari on simulator from Terminal)

## Run custom scripts for tests
* npm scripts
* or learn how to run node scripts as gulp package

### Testing
[QUnit](https://qunitjs.com/)

#### Css testing
[CSS Testing Framework](https://github.com/jamesshore/quixote)
[Яндекс.Лекция - Тестирование верстки](https://vimeo.com/124015174)

# Алгоритм

## Dev
1. Compile and minify Sass assets
2. Minify images

## Production
1. Copy to Production
2. Touch app.manifest
3. Delete all files in /assets except /branding
4. Remove all temp and trash files (Thumbs.db)
5. Check if /branding < 2mb
6. Check if file count in assets <10
7. Copy file paths to app.manifest
8. Remove responsive based files from app.manifest
9. App.manifest - set comment for todays date
10. Index.html - replace header and bottom files with Production
11. Test for expecting all <a> tags have href and data-event-click properties

# To-Do for this project
Learn Gulp
Learn how to create your own Gulp plugins
Learn Node for file manipulation
Learn layout html templating

# Links
[Simple layouting with Gulp](http://twin.github.io/simple-layouting-with-gulp/)

[How to Modularize HTML Using Template Engines and Gulp](http://www.zell-weekeat.com/nunjucks-with-gulp)

[Основа для старта проекта в коддельной (gulp)](https://github.com/straykov/initium)

[Gulp FTP deploy](https://github.com/morris/vinyl-ftp)
