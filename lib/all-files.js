/**
 * Created by Administrator on 2016/3/1.
 */
const fs = require('fs');

exports.shallow = dirName =>  fs.readdirSync(dirName).filter(x => !x.includes('index'));
