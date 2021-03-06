const shell = require('shelljs');
const fs = require('fs');

const lightColor = '#fff';
const darkMainColor = '#555';
const darkSecondaryColor = 'rgba(85, 85, 85, 0.8)';
const darkNoteColor = 'rgba(51, 51, 51, 0.5)';

const dayInfoLines = fs.readFileSync('../src/data/dayInfo.ts').toString().split('\n');
for (let line of dayInfoLines) {
    if (line === '%%%') {
        break;
    }

    if (line && line.indexOf('#') !== 0 && line.indexOf('|') >= 0) {
        const parts = line.split('|');

        const date = parts[0].trim();
        const name = parts[1].trim();
        const file = parts[2].trim();
        const story = parts[3].trim();
        const note = parts[4].trim();

        const fontPath = file.indexOf('.') > -1 ? './fonts/' + file : file;
        console.log('path', fontPath);

        if (file) {
            const dayOfMonth = date.substr(date.indexOf('.') + 1);
            // shell.exec(`font2img -f "${fontPath}" -o ../src/assets/imgs/fonts/date/light/${date}.png`
                // + ` --text "${dayOfMonth}" -c "${lightColor}" --font-size="350px" --dpr=3`);
            shell.exec(`font2img -f "${fontPath}" -o ../src/assets/imgs/fonts/date/dark/${date}.png`
                + ` --text "${dayOfMonth}" -c "${darkMainColor}" --font-size="350px" --dpr=3`);
        }

        if (name) {
            // shell.exec(`font2img -f "${fontPath}" -o ../src/assets/imgs/fonts/fontName/light/${date}.png`
            // + ` --text "${name}" -c "${lightColor}" --font-size="20px" --dpr=3 --line-height=0.6`);
            shell.exec(`font2img -f "${fontPath}" -o ../src/assets/imgs/fonts/fontName/dark/${date}.png`
                + ` --text "${name}" -c "${darkMainColor}" --font-size="20px" --dpr=3 --line-height=0.4`);
        }

        // shell.exec(`font2img -f ./fonts/xique-juzhen.ttf -o ../src/assets/imgs/fonts/story/light/${date}.png`
        // + ` --text "${story}" -c "${lightColor}" --font-size="18px" --dpr=3 --max-width=280 --line-height=0.6`);
        shell.exec(`font2img -f ./fonts/xique-juzhen.ttf -o ../src/assets/imgs/fonts/story/dark/${date}.png`
            + ` --text "${story}" -c "${darkSecondaryColor}" --font-size="18px" --dpr=3 --max-width=280 --line-height=0.4`);

        if (note) {
            // shell.exec(`font2img -f ./fonts/xique-juzhen.ttf -o ../src/assets/imgs/fonts/note/dark/${date}.png`
            //     + ` --text "${note}" -c "${lightColor}" --font-size="14px" --dpr=3 --max-width=280 --line-height=0.6`);
            shell.exec(`font2img -f ./fonts/xique-juzhen.ttf -o ../src/assets/imgs/fonts/note/dark/${date}.png`
                + ` --text "${note}" -c "${darkNoteColor}" --font-size="14px" --dpr=3 --max-width=280 `
                + `--line-height=0.4`);
        }

        console.log('-------');
    }
}
