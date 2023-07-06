"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = void 0;
const path = require("path");
const editFileName = (req, file, callback) => {
    const name = file.originalname.split(".")[0];
    const fileExtName = path.extname(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 10).toString(10))
        .join("");
    callback(null, `${name}${randomName}${fileExtName}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=file-upload.js.map